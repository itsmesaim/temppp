import sharp from 'sharp';
import toIco from 'to-ico';
import { writeFileSync, unlinkSync } from 'fs';
import path from 'path';

const LOGO = path.resolve('public/snk-logo.webp');
const APP = path.resolve('app');

/** Crop to SNK letters only — drop the tiny "Web Solutions" subtitle */
const SNK_CROP = { left: 14, top: 54, width: 212, height: 78 };

async function buildFaviconSource(size = 512) {
  const cropped = await sharp(LOGO).extract(SNK_CROP).png().toBuffer();

  const markWidth = Math.round(size * 0.86);
  const mark = await sharp(cropped)
    .resize(markWidth, null, { fit: 'inside', withoutEnlargement: false })
    .png()
    .toBuffer();

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 3,
      background: { r: 255, g: 255, b: 255 },
    },
  })
    .composite([{ input: mark, gravity: 'center' }])
    .png()
    .toBuffer();
}

async function resizeIcon(source, size, sharpen = false) {
  let pipeline = sharp(source).resize(size, size, {
    fit: 'contain',
    background: { r: 255, g: 255, b: 255 },
    kernel: size <= 32 ? sharp.kernel.lanczos3 : sharp.kernel.lanczos3,
  });

  if (sharpen) {
    pipeline = pipeline.sharpen({
      sigma: size <= 24 ? 0.8 : 0.5,
      m1: 1,
      m2: 0.5,
    });
  }

  return pipeline.png().toBuffer();
}

async function main() {
  const source = await buildFaviconSource(512);

  await resizeIcon(source, 96, true).then((buf) => sharp(buf).toFile(path.join(APP, 'icon.png')));

  await resizeIcon(source, 180, false).then((buf) =>
    sharp(buf).toFile(path.join(APP, 'apple-icon.png'))
  );

  const icoSizes = [16, 32, 48, 64];
  const pngBuffers = await Promise.all(
    icoSizes.map((size) => resizeIcon(source, size, size <= 32))
  );
  const ico = await toIco(pngBuffers);
  writeFileSync(path.join(APP, 'favicon.ico'), ico);

  console.log('Favicon regenerated — SNK crop only, sharpened for small sizes');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
