# Instaluvi - Soluciones Profesionales de Instalación

## 📋 Descripción

Instaluvi es una plataforma web moderna diseñada para mostrar y vender productos y servicios de instalación profesional. El sitio está optimizado para GitHub Pages y utiliza tecnologías modernas como HTML5, CSS3, JavaScript y Firebase.

## 🎯 Características

- ✅ **Diseño Responsivo**: Adaptado a todos los dispositivos (desktop, tablet, móvil)
- ✅ **Página Principal Atractiva**: Hero section con llamadas a la acción
- ✅ **Catálogo de Productos**: Grid responsivo con imágenes y precios
- ✅ **Galería de Proyectos**: Showcase de trabajos realizados
- ✅ **Sistema de Autenticación**: Login con Firebase
- ✅ **Panel de Administración**: 7 módulos CRUD completos
- ✅ **Integración Firebase**: Firestore, Authentication, Analytics
- ✅ **SEO Optimizado**: robots.txt y sitemap.xml
- ✅ **Animaciones Suaves**: Transiciones y efectos visuales

## 📁 Estructura del Proyecto

```
Instaluvi/
├── index.html              # Página principal
├── login.html              # Sistema de login
├── productos.html          # Catálogo de productos
├── galeria.html            # Galería de proyectos
│
├── assets/
│   ├── css/
│   │   ├── style.css       # Estilos principales
│   │   ├── mobile.css      # Media queries responsivas
│   │   ├── admin.css       # Estilos del panel admin
│   │   └── animations.css  # Keyframes y animaciones
│   ├── js/
│   │   ├── app.js          # Lógica principal de la app
│   │   ├── layout.js       # Gestión del layout
│   │   ├── products.js     # Lógica de productos
│   │   ├── gallery.js      # Lógica de galería
│   │   ├── news.js         # Sistema de noticias
│   │   └── ...
│   └── images/             # Imágenes del sitio
│
├── firebase/
│   ├── config.js           # Configuración de Firebase
│   ├── firestore.js        # Funciones de Firestore
│   ├── auth.js             # Autenticación
│   └── analytics.js        # Google Analytics
│
├── admin/
│   ├── dashboard.html      # Panel principal
│   ├── users.html          # Gestión de usuarios
│   ├── products.html       # Gestión de productos
│   ├── categories.html     # Gestión de categorías
│   ├── orders.html         # Gestión de pedidos
│   ├── analytics.html      # Estadísticas
│   └── settings.html       # Configuración
│
├── firestore.rules         # Reglas de seguridad Firestore
├── robots.txt              # SEO - robots
├── sitemap.xml             # SEO - mapa del sitio
└── README.md               # Este archivo
```

## 🚀 Inicio Rápido

### 1. Clonar el Repositorio

```bash
git clone https://github.com/ranyelo396-ai/Instaluvi.git
cd Instaluvi
```

### 2. Configurar Firebase

1. Ir a [Firebase Console](https://console.firebase.google.com/)
2. Crear un nuevo proyecto
3. Copiar las credenciales
4. Reemplazar en `firebase/config.js`:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

### 3. Servir Localmente

```bash
# Con Python 3
python -m http.server 8000

# Con Node.js
npx http-server

# Con Live Server (VS Code)
Abrir con Live Server
```

Luego acceder a `http://localhost:8000`

### 4. Desplegar en GitHub Pages

1. Pushear los cambios a main
2. Ir a Settings → Pages
3. Seleccionar `main` como rama de publicación
4. El sitio estará disponible en `https://ranyelo396-ai.github.io/Instaluvi`

## 🎨 Personalización

### Colores

Modificar variables en `assets/css/style.css`:

```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --accent-color: #e74c3c;
    --text-color: #333;
    --bg-color: #f5f5f5;
}
```

### Contenido

- **Productos**: Editar array en `assets/js/products.js`
- **Galería**: Editar array en `assets/js/gallery.js`
- **Noticias**: Editar array en `assets/js/news.js`

## 📱 Responsive Design

Media queries en `assets/css/mobile.css`:

- 📱 Móvil (hasta 480px)
- 📱 Tablet (hasta 768px)
- 💻 Desktop (768px+)

## 🔐 Seguridad

- Reglas de Firestore en `firestore.rules`
- Autenticación con Firebase Auth
- Validación de email en `assets/js/app.js`
- HTTPS forzado en GitHub Pages

## 📊 Analytics

Google Analytics integrado en `firebase/analytics.js`:

- Rastreo de eventos
- Rastreo de compras
- Rastreo de búsquedas
- Rastreo de clics en productos

## 🛠️ Herramientas Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript vanilla
- **Backend**: Firebase (Firestore, Auth, Analytics)
- **Hosting**: GitHub Pages
- **Version Control**: Git & GitHub

## 📝 Licencia

Este proyecto está bajo licencia MIT. Ver LICENSE para más detalles.

## 👥 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📧 Contacto

- Email: info@instaluvi.com
- GitHub: [ranyelo396-ai](https://github.com/ranyelo396-ai)
- Web: https://ranyelo396-ai.github.io/Instaluvi

## 🙏 Agradecimientos

Gracias a todos los que contribuyen a mantener este proyecto.

---

**Hecho con ❤️ por Instaluvi**