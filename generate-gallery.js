const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "img");
const OUTPUT = path.join(__dirname, "gallery.js");
const IMAGE_EXT = [".jpg", ".jpeg", ".png", ".webp", ".gif"];
// BARU: folder di dalam img/ yang bukan project (tidak masuk galeri)
const SKIP_FOLDERS = ["certificates", "journey"];

if (!fs.existsSync(ROOT)) {
  fs.mkdirSync(ROOT, { recursive: true });
  console.log("Folder img/projects belum ada, sudah dibuatkan.");
}

const gallery = {};
const covers = {};
let total = 0;

for (const folder of fs.readdirSync(ROOT, { withFileTypes: true })) {
  if (!folder.isDirectory()) continue;
  if (SKIP_FOLDERS.includes(folder.name.toLowerCase())) continue; // BARU: lewati folder non-project

  const images = fs
    .readdirSync(path.join(ROOT, folder.name))
    .filter((file) => IMAGE_EXT.includes(path.extname(file).toLowerCase()));

  // cover.jpg / cover.png / dll = cover project
  const cover = images.find((file) => file.toLowerCase().startsWith("cover."));
  if (cover) covers[folder.name] = `img/${folder.name}/${encodeURIComponent(cover)}`;

  const files = images
    .filter((file) => file !== cover)
    // urutkan "2.jpg" sebelum "10.jpg"
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));

    gallery[folder.name] = files.map((file) => `img/${folder.name}/${encodeURIComponent(file)}`);
  total += files.length;
  console.log(`  ${folder.name}: ${files.length} foto${cover ? " + cover" : " (belum ada cover)"}`);
}

const content =
  "// File ini dibuat otomatis oleh generate-gallery.js, jangan diedit manual.\n" +
  "window.GALLERY = " + JSON.stringify(gallery, null, 2) + ";\n" +
  "window.COVERS = " + JSON.stringify(covers, null, 2) + ";\n";

fs.writeFileSync(OUTPUT, content);
console.log(`\nSelesai! ${total} foto ditulis ke gallery.js`);