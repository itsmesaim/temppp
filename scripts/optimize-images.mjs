import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import path from "path";

const PUBLIC = path.resolve("public");

const TEAM_FILES = [
  "team-sandeep.jpeg",
  "team-pinky.png",
  "team-main.jpeg",
  "team-kahkasha.jpeg",
  "team-anup.jpeg",
  "team-akash.jpeg",
  "snk-logo.jpg",
];

async function optimizeFile(relPath, { maxWidth, quality = 82 }) {
  const input = path.join(PUBLIC, relPath);
  const ext = path.extname(relPath);
  const base = relPath.slice(0, -ext.length);
  const output = path.join(PUBLIC, `${base}.webp`);

  const info = await stat(input);
  const before = info.size;

  await sharp(input)
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality, effort: 4 })
    .toFile(output);

  const after = (await stat(output)).size;
  console.log(
    `${relPath} → ${base}.webp  (${(before / 1024).toFixed(1)}KB → ${(after / 1024).toFixed(1)}KB)`,
  );
}

async function optimizeClients() {
  const dir = path.join(PUBLIC, "clients");
  const files = await readdir(dir);
  for (const file of files.filter((f) => /\.(png|jpe?g)$/i.test(f))) {
    await optimizeFile(`clients/${file}`, { maxWidth: 400, quality: 85 });
  }
}

async function main() {
  for (const file of TEAM_FILES) {
    const maxWidth = file.includes("logo") ? 240 : 840;
    await optimizeFile(file, {
      maxWidth,
      quality: file.includes("logo") ? 88 : 82,
    });
  }
  await optimizeClients();
  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
