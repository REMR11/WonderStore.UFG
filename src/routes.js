// routes/products.js
import express from 'express';
import fs from 'fs';
import path, { dirname } from 'path'; 
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const router = express.Router();
const productsPath = path.join(__dirname, '/assets/data/products.json'); // Asegúrate de que la ruta sea correcta

function getProducts() {
  const products = fs.readFileSync(productsPath, 'utf-8');
  return JSON.parse(products);
}

router.get('/', (req, res) => {
  const products = getProducts();
  res.status(200).json(products);
});

export default router;