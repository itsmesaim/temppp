import sharp from 'sharp';
import { existsSync } from 'fs';
import path from 'path';

const ROOT = path.resolve(import.meta.dirname, '..');
const SOURCE = path.join(ROOT, 'public/snk-logo-source.png');
const PUBLIC = path.join(ROOT, 'public');

if (!existsSync(SOURCE)) {
  console.error('Missing public/snk-logo-source.png — add the master logo file first.');
  process.exit(1);
}

function toDarkTheme(buffer, info) {
  const data = Buffer.from(buffer);
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const lum = 0.299 * r + 0.587 * g + 0.114 * b;

    if (lum > 235) {
      data[i + 3] = 0;
      continue;
    }
    if (lum < 90) {
      data[i] = 255;
      data[i + 1] = 255;
      data[i + 2] = 255;
      data[i + 3] = 255;
      continue;
    }
    if (r > 150 && g < 90 && b < 90) {
      data[i] = 227;
      data[i + 1] = 30;
      data[i + 2] = 36;
      data[i + 3] = 255;
      continue;
    }
    data[i] = 153;
    data[i + 1] = 153;
    data[i + 2] = 153;
    data[i + 3] = 255;
  }
  return sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } });
}

const trimmed = await sharp(SOURCE).trim({ threshold: 12 }).toBuffer();
const meta = await sharp(trimmed).metadata();

for (const width of [496, 992]) {
  const height = Math.round((meta.height / meta.width) * width);
  const suffix = width === 496 ? '' : '@2x';

  await sharp(trimmed)
    .resize(width, height, { kernel: 'lanczos3' })
    .webp({ quality: 96 })
    .toFile(path.join(PUBLIC, `snk-logo${suffix}.webp`));

  await sharp(trimmed)
    .resize(width, height, { kernel: 'lanczos3' })
    .jpeg({ quality: 96, mozjpeg: true })
    .toFile(path.join(PUBLIC, `snk-logo${suffix}.jpg`));
}

await sharp(trimmed)
  .resize(248, Math.round((meta.height / meta.width) * 248))
  .png()
  .toFile(path.join(PUBLIC, 'snk-logo.png'));

const markCrop = {
  left: 0,
  top: 0,
  width: Math.round(meta.width * 0.72),
  height: Math.round(meta.height * 0.62),
};
const mark = await sharp(trimmed).extract(markCrop).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const navSharp = await toDarkTheme(mark.data, mark.info);

for (const width of [320, 640]) {
  const height = Math.round((mark.info.height / mark.info.width) * width);
  const suffix = width === 320 ? '' : '@2x';
  await navSharp
    .clone()
    .resize(width, height, { kernel: 'lanczos3' })
    .webp({ quality: 95 })
    .toFile(path.join(PUBLIC, `snk-logo-nav${suffix}.webp`));
}

const full = await sharp(trimmed).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
await toDarkTheme(full.data, full.info)
  .resize(496, Math.round((meta.height / meta.width) * 496), { kernel: 'lanczos3' })
  .webp({ quality: 95 })
  .toFile(path.join(PUBLIC, 'snk-logo-dark.webp'));

console.log('Logo exported: light (jpg/webp), nav (transparent), dark footer');