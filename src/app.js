import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import livereload from 'livereload';
import connectLivereload from 'connect-livereload';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

const isProduction = process.env.NODE_ENV === 'production'; // Verifica si es producción

if (!isProduction) {
  const liveReloadServer = livereload.createServer();
  app.use(connectLivereload()); // Agregar middleware de LiveReload
  liveReloadServer.watch(path.join(__dirname, 'src')); // Observa el directorio 'src'

  liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
      liveReloadServer.refresh("/");
    }, 100); // Evitar parpadeo al inicio
  })
}

//Permitir usar recursos de las diferentes carpetas
app.use(connectLivereload()); // Agregar middleware de LiveReload
app.use(express.static(path.join(__dirname, 'pages')));
app.use('/api', express.static(path.join(__dirname, 'api')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/components', express.static(path.join(__dirname, 'components')));
app.use('/lib', express.static(path.join(__dirname, 'lib')));
app.use('/utils', express.static(path.join(__dirname, 'utils')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + 'pages/index.html');
});

app.get('/inicio', (req, res) => {
  res.sendFile(__dirname + '/pages/index.html');
});

app.get('/:page', (req, res) => {
  const page = req.params.page;

  const filePath = path.join(__dirname, 'pages', page, `${page}.html`);

  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.sendFile(__dirname + '/pages/error/404','error.css','image .png');
  }
});

//SI LES DA ERROR UNA URL Y ESTAN SEGUROS QUE LAS HICIERON BIEN COMENTEN ESTE CODIGO
app.get('/:page*', (req, res) => {
  const url = req.url;
  const filePath = path.join(__dirname, 'pages', url);
  const fileDir = path.dirname(filePath);
  const fileName = path.basename(filePath, '.html');
  const fullFilePath = `${fileDir}${"\\"}${fileName}\\${fileName}.html`;
  console.log(fullFilePath);
  if (fs.existsSync(fullFilePath)) {
    res.sendFile(fullFilePath);
  } else {
    res.sendFile(__dirname + '/pages/error/404/error.html','error.css','image .png');
  }
});
//AQUI TERMINA XD

app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + '/pages/error/404/error.html','error.css','image .png');
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