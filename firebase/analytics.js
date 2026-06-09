// Analytics Firebase

// Rastrear evento
function trackEvent(eventName, eventData = {}) {
    console.log('Evento rastreado:', eventName, eventData);
    // Aquí irá la lógica de Firebase Analytics
}

// Rastrear página
function trackPageView(pageName) {
    console.log('Vista de página:', pageName);
    trackEvent('page_view', { page_title: pageName });
}

// Rastrear compra
function trackPurchase(purchaseData) {
    console.log('Compra rastreada:', purchaseData);
    trackEvent('purchase', purchaseData);
}

// Rastrear búsqueda
function trackSearch(searchTerm) {
    console.log('Búsqueda rastreada:', searchTerm);
    trackEvent('search', { search_term: searchTerm });
}

// Rastrear clic en producto
function trackProductClick(productId, productName) {
    console.log('Producto clickeado:', productId, productName);
    trackEvent('product_click', { product_id: productId, product_name: productName });
}

// Inicializar analytics en página
function initAnalytics() {
    trackPageView(document.title);
}