import { TOPICS, PRODUCT_CATEGORIES } from "../utils/globalVariables.js"

//EJEMPLO DEL MODELO DE LOS PRODUCTOS

//YA SE QUE NO ES DE MARVEL PERO NO ME DI CUENTA CUANDO LO HACIA
export const PRODUCTS = [
  {
    id: crypto.randomUUID(),
    name: "Flash Point",
    quantity: 10,
    description: "Cómic de Flash donde se narran los sucesos de Flash",
    category: PRODUCT_CATEGORIES.COMIC,
    topic: TOPICS.MARVEL,
    price: 25.00,
    imgs: ["https://m.media-amazon.com/images/I/91dXNvO2fML._AC_UF894,1000_QL80_.jpg", "https://m.media-amazon.com/images/M/MV5BMzc3Y2Q1ZTAtNjViNi00ZDljLWI3NGUtY2FjZGQ3Y2FiNjI3XkEyXkFqcGc@._V1_.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWYzGc1NwnblFlKXnlRhjGkksJ4_Cpw0475A&s", "https://static.wikia.nocookie.net/comicdc/images/6/66/Flashpoint_Vol_2_5.jpg/revision/latest?cb=20200427184244&path-prefix=es", "https://i0.wp.com/www.comicbookwire.com/wp-content/uploads/2020/05/The-World-of-Flashpoint-Featuring-the-Flash.jpg?fit=750%2C1154&ssl=1"],//5 Imágenes obligatorias
    quantitySell: 12,
    comments: [
      {
        id: crypto.randomUUID(),
        comment: "Buenísimo cómic, la serie no le fue del todo fiel mucho menos esa película KK",
        userName: "patitoManosLargas",
        rate: 5,
        date: "01/02/2024"//Dia-Mes-Año
      }
    ]
  },
]

//Ejemplo de modelo del carrito propuesta
export const CART = {
  cart: [
    {
      id: crypto.randomUUID(),
      quantity: 10,
      subTotal: 25.00
    },
  ],
  total: 25
}