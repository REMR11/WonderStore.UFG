// routes/products.js
import express from 'express';
import fs from 'fs';
import path, { dirname } from 'path'; 
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const router = express.Router();
const productsPath = path.join(__dirname, '/assets/data/products.json'); // Asegúrate de que la ruta sea correcta

//Función para obtener los productos del archivo
function getProducts() {
  const products = fs.readFileSync(productsPath, 'utf-8');
  return JSON.parse(products);
}

function setProducts(products) {
  try {
    fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
  } catch (error) {
    console.error("Error al escribir en el archivo:", error);
    throw error; // Lanza el error para que el endpoint pueda manejarlo
  }
}

//Endpoint para obtener los productos
router.get('/', (req, res) => {
  const products = getProducts();
  res.status(200).json(products);
});

//Enpoint para obtener un producto por id
router.get('/:id', (req, res) => {
  const products = getProducts();
  const {id} = req.params;
  const product = products.find((product) => product.id == id);
  if (!product) {
    res.status(404).json({ message: 'Product not found' });
  } else {
    res.status(200).json(product);
  }
});

//Enpoint para agregar comentario a un producto
router.post('/:id/comments', (req, res) => {
  const products = getProducts();
  const {id} = req.params;
  const {comment} = req.body;
  const product = products.find((product) => product.id == id);
  if (!product) {
    res.status(404).json({ message: 'Product not found' });
  } else {
    product.comments.push(comment);
    setProducts(products);
    res.status(200).json(product);
  }
});

router.post('/', (req, res) => {
  const { products } = req.body;
  try {
    setProducts(products);
    res.status(200).json({ message: 'Productos actualizados correctamente.' });
  } catch (error) {
    console.error("Error al establecer productos:", error);
    res.status(500).json({ error: 'Error al establecer productos.' });
  }
});

export default router;