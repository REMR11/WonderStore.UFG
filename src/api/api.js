import { recalculateCart } from "../components/navbar.js";

/*Función para setear los productos en el localStorage solo se ha de llamar
una vez en caso de no haberse seteado antes.*/
export default function setDB(products) {
  localStorage.setItem('products', JSON.stringify(products));  
}

export function setCarrito() {
  const carritoTemplate = {
    cart: [

    ],
    total: 0
  }
  localStorage.setItem('carrito', JSON.stringify(carritoTemplate));
}

/**
 * 
 * @returns {Array<products>} Arreglo de objetos de los productos del localStorage con estas propiedades
 *   - id: string
 *   - name: string
 *   - quantity: number
 *   - description: string
 *   - category: string
 *   - topic: string
 *   - price: number
 *   - imgs: string[]
 *   - quantitySell: number
 *   - comments: Array<Object>
 */
export function getProducts() {
  return JSON.parse(localStorage.getItem('products'));
}

/**
 * 
 * @param {string} id del producto a buscar
 * @returns {products} El producto que coincida con el id pasado por parámetro, con estas propiedades:
 *   - id: string
 *   - name: string
 *   - quantity: number
 *   - description: string
 *   - category: string
 *   - topic: string
 *   - price: number
 *   - imgs: string[]
 *   - quantitySell: number
 *   - comments: Array<Object>
 */
export function getProductById(id) {
  const products = getProducts();
  return products.find(product => product.id == id);
}

/**
 * 
 * @param {Array<products>} products - Arreglo de objetos con las siguientes propiedades:
 *   - id: string
 *   - name: string
 *   - quantity: number
 *   - description: string
 *   - category: string
 *   - topic: string
 *   - price: number
 *   - imgs: string[]
 *   - quantitySell: number
 *   - comments: Array<Object>
 * @param {string} category Categoría por la cual se va filtrar 
 * @returns {products} Los productos que coincidan con la categoría pasada por parámetro con las siguientes propiedades:
 *   - id: string
 *   - name: string
 *   - quantity: number
 *   - description: string
 *   - category: string
 *   - topic: string
 *   - price: number
 *   - imgs: string[]
 *   - quantitySell: number
 *   - comments: Array<Object>
 */
export function getProductsByCategory(products, category) {
  return products.filter(product => product.category === category);
}
/**
 *
 * @param {Array<products>} products - Arreglo de objetos con las siguientes propiedades:
 *   - id: string
 *   - name: string
 *   - quantity: number
 *   - description: string
 *   - category: string
 *   - topic: string
 *   - price: number
 *   - imgs: string[]
 *   - quantitySell: number
 *   - comments: Array<Object>
 * @param {string} search Palabra por la cual se va filtrar
 * @returns {products} Los productos que coincidan con la palabra pasada por parámetro con las siguientes propiedades:
 *   - id: string
 *   - name: string
 *   - quantity: number
 *   - description: string
 *   - category: string
 *   - topic: string
 *   - price: number
 *   - imgs: string[]
 *   - quantitySell: number
 *   - comments: Array<Object>
 */
export function getProductsBySearch(products, search) {
  return products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));
}

/**
 *
 * @param {Array<products>} products - Arreglo de objetos con las siguientes propiedades:
 *   - id: string
 *   - name: string
 *   - quantity: number
 *   - description: string
 *   - category: string
 *   - topic: string
 *   - price: number
 *   - imgs: string[]
 *   - quantitySell: number
 *   - comments: Array<Object>
 * @param {string} topic Tema por la cual se va filtrar
 * @returns {products} Los productos que coincidan con el tema pasada por parámetro con las siguientes propiedades:
 *   - id: string
 *   - name: string
 *   - quantity: number
 *   - description: string
 *   - category: string
 *   - topic: string
 *   - price: number
 *   - imgs: string[]
 *   - quantitySell: number
 *   - comments: Array<Object>
 */
export function getProductsByTopic(products, topic) {
  return products.filter(product => product.topic === topic);
}

/**
 *
 * @param {string} id del producto a buscar
 * @returns {Object} El producto que coincida con el id pasado por parámetro, con estas propiedades:
 *   - product: Object que representa el producto encontrado
 *   - productRate: int que representa la calificación del producto,
 *   - totalRatings: int El total de calificaciones del producto,
 *   - ratingPercentages: Object que representa los porcentajes de calificación del producto
 *   - ratingPercentages[rate]: int El porcentaje de calificación del producto

 */
export function getProductDetail(id) {
  const products = getProducts();//Obtenemos los productos
  const product = products.find(product => product.id == id);//Buscamos el producto por el id

  //Validamos que exista
  if (!product) {
    return null;
  }

  //Obtenemos todas las calificaciones de los comentarios y las introducimos en un arreglo.
  const ratings = product.comments.map(comment => comment.rate);//Devuelve un arreglo

  //Obtenemos el promedio de calificación del producto (SU CALIFICACIÓN)
  const productRate = ratings.reduce((suma, rate) => suma + rate, 0) / ratings.length;

  //Obteniendo los porcentajes
  /**
   * Obtenemos un objeto con las calificaciones y su cantidad ejemplo:
   * {
   *  1: 2,
   *  2: 3,
   *  3: 4,
   *  4: 5,
   *  5: 6
   * }
   */
  const ratingCounts = ratings.reduce((counts, rate) => {
    counts[rate] = (counts[rate] ?? 0) + 1; //El ?? indica que si counts[rate] no existe entonces se ponga 0
    return counts;
  }, {
    "0": 0,
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0
  });

  //Obtenemos los porcentajes ejemplo:
  //{2: 14, 3: 43, 4: 29, 5: 14}

  const ratingPercentages = Object.keys(ratingCounts).reduce((percentages, rate) => {
    percentages[rate] = Math.round((ratingCounts[rate] / ratings.length) * 100);
    return percentages;
  }, {});

  return {
    product,
    productRate,
    totalRatings: ratings.length,
    ratingPercentages
  }
}

/**
 * 
 * @param {number} idProduct Representa el id del producto a modificar
 * @param {Object} comentario Representa el objeto que es el comentario a añadir
 */
export function addProductComment(idProduct, comment) {
  const products = getProducts();
  const product = products.find(product => product.id == idProduct);//Buscamos el producto por el id

  //Validamos que exista
  if (!product) {
    return null;
  }

  product.comments.push(comment);

  localStorage.setItem('products', JSON.stringify(products));
}

/**
 * Función que retorna el carrito de compras del localStorage
 * @returns El carrito de compras con estas propiedades:
 *   - cart: Array de objetos con los productos en el carrito
 *   - total: int El total de la compra
 */
export function getCarrito() {
  const carrito = JSON.parse(localStorage.getItem('carrito'));

  const productsInDB = getProducts();

  const productsInCart = carrito.cart.map(productInCart => {
    const productFinded = productsInDB.find(product => product.id == productInCart.id);
    return {
      id: productFinded.id,
      productName: productFinded.name,
      productPrice: productFinded.price,
      productImage: productFinded.imgs[0],
      quantity: productInCart.quantity,
      subTotal: productInCart.subTotal
    }
  });

  return {
    cart: productsInCart,
    total: carrito.total
  };
}

/**
 * Función que modifica la cantidad de un producto en el carrito de compras
 * También puede ser usada para añadir un producto al carrito de compras
 * Si se le pasa un número negativo se restará, positivo se sumará
 * @param {number} idProduct Representa el id del producto a modificar
 * @param {number} cantidad Representa la cantidad a modificar
 * @param {boolean} set Por defecto es false, si es true se setea la cantidad directamente
 * @throws {Error} Si el producto no se encontró
 */
export function modifyCarrito(idProduct, cantidad, set = false) {
  const products = getProducts();

  const productInDB = products.find(product => product.id == idProduct);

  if (!productInDB) return null;

  const carrito = getCarrito();
  const productInCart = carrito.cart.find(product => product.id == idProduct);
  const newSubTotal = cantidad * productInDB.price;
  let currentSubtotal = 0;
  let isNewProduct = false;
  if (productInCart) {
    currentSubtotal = productInCart.subTotal;

    //Verificamos si se debe setear los valores o solo modificar
    if (!set) {
      //Se actualizan los valores actuales

      //Si tiene 5 y se le pasa -1 -> 5  + (- 1) = 4
      //Si tiene 5 y se le pasa 1 ->  5 + 1 = 6
      productInCart.quantity = productInCart.quantity + cantidad;

      productInCart.subTotal = currentSubtotal + newSubTotal;//Seteamos el nuevo subTotal
    } else {
      //Se setean los nuevos valores
      const currentQuantity = productInCart.quantity;

      //Devolvemos la cantidad actual a la BD
      productInDB.quantity += currentQuantity;
      productInCart.quantity = cantidad;
      productInCart.subTotal = newSubTotal;
    }
  } else {
    carrito.cart.push({
      id: productInDB.id,
      productName: productInDB.name,
      productPrice: productInDB.price,
      productImage: productInDB.imgs[0],
      quantity: cantidad,
      subTotal: newSubTotal
    });

    isNewProduct = true;
  }


  //Restamos o sumamos la nueva cantidad
  //Si tiene 10 y se le pasa -1 -> 10 - (-1) = 11 
  //Si tiene 10 y se le pasa 1 -> 10 - 1 = 9
  productInDB.quantity -= cantidad;

  carrito.total -= currentSubtotal;
  carrito.total += isNewProduct ? newSubTotal : productInCart.subTotal;

  localStorage.setItem('products', JSON.stringify(products));
  localStorage.setItem('carrito', JSON.stringify(carrito));
  //Recalculamos la cantidad en el carrito del navbar
  recalculateCart();
}

/**
 * Funcion que añade un producto al carrito de compras
 * @param {string} idProduct Representa el id del producto a añadir al carrito
 * @param {number} cantidad Representa la cantidad del producto
 * @throws {Error} Si el producto no se encontró
 */
export function addProductInCart(idProduct, cantidad) {
  const products = getProducts();

  const productInDB = products.find(product => product.id == idProduct);

  if (!productInDB) throw new Error("No se encontro el producto en la base de datos");


  const carrito = getCarrito();
  const subTotal = productInDB.price * cantidad;

  carrito.cart.push({
    id: productInDB.id,
    productName: productInDB.name,
    productPrice: productInDB.price,
    productImage: productInDB.imgs[0],
    quantity: cantidad,
    subTotal: subTotal
  });

  carrito.total += subTotal;

  productInDB.quantity = productInDB.quantity - cantidad;

  localStorage.setItem('products', JSON.stringify(products));
  localStorage.setItem('carrito', JSON.stringify(carrito));
  //Recalculamos la cantidad en el carrito del navbar
  recalculateCart();
}

/**
 * 
 * @param {number} idProduct 
 * @throws {Error} Si el producto no se encontró
 */
export function deleteProductInCart(idProduct) {
  const products = getProducts();

  const productInDB = products.find(product => product.id == idProduct);

  if (!productInDB) throw new Error("No existe el producto en la base de datos");

  const carrito = getCarrito();
  const productInCart = carrito.cart.find(product => product.id == idProduct);

  if (!productInCart) throw new Error("El producto no existe en el carrito");

  const currentSubtotal = productInCart.subTotal;
  productInDB.quantity += productInCart.quantity;

  carrito.total -= currentSubtotal;
  carrito.cart = carrito.cart.filter(product => product.id != idProduct);
  localStorage.setItem('products', JSON.stringify(products));
  localStorage.setItem('carrito', JSON.stringify(carrito));
  //Recalculamos la cantidad en el carrito del navbar
  recalculateCart();
}

export function emptyCart() {
  const carrito = getCarrito();
  carrito.cart = [];
  carrito.total = 0;
  localStorage.setItem('carrito', JSON.stringify(carrito));

  //Recalculamos la cantidad en el carrito del navbar
  recalculateCart();
}