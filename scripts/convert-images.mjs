import { mkdir, readdir, stat } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import sharp from "sharp";

const inputDir = path.resolve("public/uploads-original");
const outputDir = path.resolve("public/imagenes");
const supportedExtensions = new Set([".jpg", ".jpeg", ".png", ".tif", ".tiff", ".avif"]);
const force = process.argv.includes("--force");

async function pathExists(filePath) {
  try {
    await stat(filePath);
    return true;
  } catch {
    return false;
  }
}

async function collectImages(directory) {
  if (!(await pathExists(directory))) return [];

  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(directory, entry.name);

      if (entry.isDirectory()) return collectImages(entryPath);
      if (!entry.isFile()) return [];

      const extension = path.extname(entry.name).toLowerCase();
      return supportedExtensions.has(extension) ? [entryPath] : [];
    })
  );

  return files.flat();
}

async function shouldConvert(source, target) {
  if (force) return true;
  if (!(await pathExists(target))) return true;

  const [sourceStats, targetStats] = await Promise.all([stat(source), stat(target)]);
  return sourceStats.mtimeMs > targetStats.mtimeMs;
}

async function convertImage(source) {
  const relativePath = path.relative(inputDir, source);
  const parsed = path.parse(relativePath);
  const target = path.join(outputDir, parsed.dir, `${parsed.name}.webp`);

  if (!(await shouldConvert(source, target))) {
    return { status: "skipped", source, target };
  }

  await mkdir(path.dirname(target), { recursive: true });

  await sharp(source)
    .rotate()
    .webp({ quality: 82, effort: 5 })
    .toFile(target);

  return { status: "converted", source, target };
}

const images = await collectImages(inputDir);

if (images.length === 0) {
  console.log("No hay imágenes para convertir en public/uploads-original.");
  process.exit(0);
}

const results = await Promise.all(images.map(convertImage));
const converted = results.filter((result) => result.status === "converted");
const skipped = results.filter((result) => result.status === "skipped");

converted.forEach((result) => {
  console.log(`Convertida: ${path.relative(process.cwd(), result.source)} -> ${path.relative(process.cwd(), result.target)}`);
});

if (skipped.length > 0) {
  console.log(`Omitidas sin cambios: ${skipped.length}`);
}

console.log(`Conversión WebP lista. Convertidas: ${converted.length}. Total revisadas: ${results.length}.`);
