// Gestión de galería

const galleryImages = [
    { id: 1, title: 'Proyecto 1', src: 'assets/images/gallery1.jpg' },
    { id: 2, title: 'Proyecto 2', src: 'assets/images/gallery2.jpg' },
    { id: 3, title: 'Proyecto 3', src: 'assets/images/gallery3.jpg' },
    { id: 4, title: 'Proyecto 4', src: 'assets/images/gallery4.jpg' },
    { id: 5, title: 'Proyecto 5', src: 'assets/images/gallery5.jpg' },
    { id: 6, title: 'Proyecto 6', src: 'assets/images/gallery6.jpg' }
];

function loadGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;
    
    galleryGrid.innerHTML = '';
    galleryImages.forEach(image => {
        const item = createGalleryItem(image);
        galleryGrid.appendChild(item);
    });
}

function createGalleryItem(image) {
    const item = document.createElement('div');
    item.className = 'gallery-item fade-in';
    item.innerHTML = `
        <img src="${image.src}" alt="${image.title}" onerror="this.src='https://via.placeholder.com/200x200?text=${encodeURIComponent(image.title)}'">
        <div class="gallery-overlay">
            <h4>${image.title}</h4>
        </div>
    `;
    item.addEventListener('click', () => openLightbox(image));
    return item;
}

function openLightbox(image) {
    console.log('Abriendo imagen:', image.title);
    // Aquí puedes implementar una galería modal
}

// Cargar galería cuando carga la página
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadGallery);
} else {
    loadGallery();
}