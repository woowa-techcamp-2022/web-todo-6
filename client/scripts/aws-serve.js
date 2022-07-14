const fs = require('fs');
const path = require('path');
require("dotenv").config();
const ROOT_PATH = process.cwd();
const configPath = path.join(ROOT_PATH, 'src', 'api', 'config.js');
const BASE_URL = process.env.BASE_URL;
const readContents = fs.readFileSync(configPath);
const changedContents = readContents.toString().replace('localhost', BASE_URL);
fs.writeFileSync(configPath, changedContents);