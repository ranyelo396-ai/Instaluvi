// Autenticación Firebase

// Login
async function login(email, password) {
    try {
        console.log('Intentando login con:', email);
        // Lógica de autenticación Firebase
        return true;
    } catch (error) {
        console.error('Error en login:', error);
        return false;
    }
}

// Logout
async function logout() {
    try {
        console.log('Cerrando sesión...');
        // Lógica de logout
        localStorage.removeItem('userToken');
        window.location.href = 'login.html';
    } catch (error) {
        console.error('Error en logout:', error);
    }
}

// Registrar usuario
async function register(email, password) {
    try {
        console.log('Registrando usuario:', email);
        // Lógica de registro Firebase
        return true;
    } catch (error) {
        console.error('Error en registro:', error);
        return false;
    }
}

// Verificar si usuario está autenticado
function isAuthenticated() {
    return !!localStorage.getItem('userToken');
}

// Obtener usuario actual
function getCurrentUser() {
    const userToken = localStorage.getItem('userToken');
    return userToken ? JSON.parse(atob(userToken)) : null;
}

// Event listener para formulario de login
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        const password = e.target.querySelector('input[type="password"]').value;
        
        const success = await login(email, password);
        if (success) {
            showNotification('Login exitoso', 'success');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500);
        } else {
            showNotification('Error en login', 'error');
        }
    });
}