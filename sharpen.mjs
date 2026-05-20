import sharp from 'sharp';
import { readdir } from 'fs/promises';

const files = await readdir('./public');
const img = files.find(f => f.match(/\.(jpg|jpeg|png|webp)$/i));
if (!img) { console.error('No image found in public/'); process.exit(1); }

const input = `./public/${img}`;
const output = `./public/avatar.jpg`;

await sharp(input)
  .sharpen({ sigma: 1.5, m1: 1.5, m2: 0.7 })
  .modulate({ brightness: 1.04, saturation: 1.08 })
  .jpeg({ quality: 95 })
  .toFile(output);

console.log(`Done: ${input} → ${output}`);
