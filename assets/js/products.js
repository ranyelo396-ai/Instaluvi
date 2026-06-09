// Gestión de productos

const products = [
    {
        id: 1,
        name: 'Producto 1',
        description: 'Descripción del producto 1',
        price: 99.99,
        image: 'assets/images/product1.jpg'
    },
    {
        id: 2,
        name: 'Producto 2',
        description: 'Descripción del producto 2',
        price: 149.99,
        image: 'assets/images/product2.jpg'
    },
    {
        id: 3,
        name: 'Producto 3',
        description: 'Descripción del producto 3',
        price: 199.99,
        image: 'assets/images/product3.jpg'
    }
];

function loadProducts() {
    const productsList = document.getElementById('productsList');
    if (!productsList) return;
    
    productsList.innerHTML = '';
    products.forEach(product => {
        const card = createProductCard(product);
        productsList.appendChild(card);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'card fade-in';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/250x200?text=${encodeURIComponent(product.name)}'">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="price">$${product.price.toFixed(2)}</div>
        <button onclick="addToCart(${product.id})" class="btn-add">Agregar al Carrito</button>
    `;
    return card;
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        console.log('Producto agregado al carrito:', product);
        showNotification(`${product.name} agregado al carrito`, 'success');
    }
}

// Cargar productos cuando carga la página
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadProducts);
} else {
    loadProducts();
}