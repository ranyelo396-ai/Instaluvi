// Gestión de noticias

const newsArticles = [
    {
        id: 1,
        title: 'Nueva actualización disponible',
        content: 'Lanzamos la nueva versión con mejoras de rendimiento',
        date: new Date(),
        author: 'Admin'
    },
    {
        id: 2,
        title: 'Próximas características',
        content: 'Estamos trabajando en nuevas funcionalidades para ustedes',
        date: new Date(),
        author: 'Admin'
    }
];

function loadNews() {
    const newsList = document.getElementById('newsList');
    if (!newsList) return;
    
    newsList.innerHTML = '';
    newsArticles.forEach(article => {
        const item = createNewsItem(article);
        newsList.appendChild(item);
    });
}

function createNewsItem(article) {
    const item = document.createElement('article');
    item.className = 'news-item fade-in';
    item.innerHTML = `
        <h3>${article.title}</h3>
        <p class="meta">Por ${article.author} - ${formatDate(article.date)}</p>
        <p>${article.content}</p>
    `;
    return item;
}

function formatDate(date) {
    return new Intl.DateTimeFormat('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(date);
}

// Cargar noticias cuando carga la página
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadNews);
} else {
    loadNews();
}