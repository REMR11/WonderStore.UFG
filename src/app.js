import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

//Permitir usar recursos de las diferentes carpetas
app.use(express.static(path.join(__dirname, 'pages')));
app.use('/api',express.static(path.join(__dirname, 'api')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/components', express.static(path.join(__dirname, 'components')));
app.use('/lib', express.static(path.join(__dirname, 'lib')));

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

app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + '/pages/404.html');
});

const port = 3000;

function findAvailablePort() {
  return new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
      resolve(port);
    }).on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        port++;
        server.close();
        findAvailablePort().then((newPort) => resolve(newPort));
      } else {
        reject(err);
      }
    });
  });
}

findAvailablePort().then((port) => {
  console.log(`Visit http://localhost:${port}/ to access the app.`);
});