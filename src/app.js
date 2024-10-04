import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

//http://localhost:3000/home/index.html para recibir peticiones de ese tipo
app.use(express.static(path.join(__dirname, 'pages')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + 'pages/index.html');
});

app.get('/:page', (req, res) => {
  const page = req.params.page;

  const filePath = path.join(__dirname, 'pages', page, `${page}.html`);

  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.sendFile(__dirname + '/pages/404.html');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});