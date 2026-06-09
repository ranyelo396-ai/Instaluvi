// Gestión del layout y navegación

function initLayout() {
    setupNavigation();
    setupSidebar();
    setupResponsive();
}

function setupNavigation() {
    // Marcar enlace activo
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

function setupSidebar() {
    const toggleButton = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (toggleButton && sidebar) {
        toggleButton.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }
}

function setupResponsive() {
    // Ajustar el layout basado en el tamaño de la pantalla
    window.addEventListener('resize', debounce(function() {
        console.log('Pantalla redimensionada');
    }, 250));
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Inicializar layout
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLayout);
} else {
    initLayout();
}