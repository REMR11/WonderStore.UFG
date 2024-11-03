import {getCarrito,modifyCarrito, emptyCart} from "../../api/api.js";

document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('#cart-items-container');
    const subtotalAmount = document.getElementById('#subtotal-amount');
    const emptyCartButton = document.querySelector('.vaciar-carrito-button');
    const makeOrderButton = document.querySelector('.pago-button');
    const recommendedProductsContainer = document.getElementById('#recommendedProductsContainer');

    function renderCart() {
        const { cart, total } = getCarrito();
        cartItemsContainer.innerHTML = '';

        // Renderizar productos en el carrito
        cart.forEach(item => {
            const productCart = document.createElement('div');
            productCart.classList.add('producto-cart');

            productCart.innerHTML = `
                <img src="${item.productImage}" alt="${item.productName}" class="cart-item-image">
                <span class="producto-name">${item.productName}</span>
            `;

            const quantityContainer = document.createElement('div');
            quantityContainer.classList.add('cantidad-container');
            quantityContainer.innerHTML = `
                <button class="quantity-button minus" data-id="${item.id}">-</button>
                <span class="cart-item-quantity">${item.quantity}</span>
                <button class="quantity-button plus" data-id="${item.id}">+</button>
            `;
            
            const totalContainer = document.createElement('div');
            totalContainer.classList.add('total-container');
            totalContainer.innerHTML = `
                <span class="total cart-item-total">$${item.subTotal.toFixed(2)}</span>
            `;

            productCart.appendChild(quantityContainer);
            productCart.appendChild(totalContainer);
            cartItemsContainer.appendChild(productCart);
        });

        // Mostrar subtotal
        subtotalAmount.innerText = `$${total.toFixed(2)}`;
    }

    // Manejar aumento y disminución de cantidad
    cartItemsContainer.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (e.target.classList.contains('plus')) {
            modifyCarrito(id, 1);
            renderCart();
        } else if (e.target.classList.contains('minus')) {
            modifyCarrito(id, -1);
            renderCart();
        }
    });

    // Vaciar el carrito
    emptyCartButton.addEventListener('click', () => {
        emptyCart();
        renderCart();
    });

    // Hacer pedido (ir a otra página)
    makeOrderButton.addEventListener('click', () => {
        
        window.location.href = ''; 
    });

    
    renderCart();

    async function renderRecommendedProducts() {
        const products = await getRecommendedProducts();
        recommendedProductsContainer.innerHTML = ''; 

        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('recommended-product');
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="recommended-product-image">
                <span class="recommended-product-name">${product.name}</span>
                <span class="recommended-product-price">$${product.price.toFixed(2)}</span>
                <button class="add-to-cart-button" data-id="${product.id}">Agregar al carrito</button>
            `;
            recommendedProductsContainer.appendChild(productElement);
        });

      
        const addToCartButtons = recommendedProductsContainer.querySelectorAll('.add-to-cart-button');
        addToCartButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = e.target.dataset.id;
                addProductToCart(productId); 
            });
        });
    }

    renderRecommendedProducts();
});
  