const fs = require("fs");
const path = require("path");

const root = __dirname;
const publicDir = path.join(root, "public");

fs.mkdirSync(publicDir, { recursive: true });
fs.copyFileSync(path.join(root, "index.html"), path.join(publicDir, "index.html"));
