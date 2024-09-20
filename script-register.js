document.addEventListener("DOMContentLoaded", () => {
    const loginWrapper = document.querySelector('.login-wrapper');
    const registerWrapper = document.querySelector('.register-wrapper');
    const registerLink = document.querySelector('.register-link a');
    const loginLink = document.querySelector('.login-link a');
    const closeIcons = document.querySelectorAll('.icon-close');

    // Toggle between login and register
    registerLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginWrapper.classList.remove('active');
        registerWrapper.classList.add('active');
    });

    loginLink.addEventListener('click', (e) => {
        e.preventDefault();
        registerWrapper.classList.remove('active');
        loginWrapper.classList.add('active');
    });

    // Close both forms (can be customized if you want specific behavior)
    closeIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            loginWrapper.classList.remove('active');
            registerWrapper.classList.remove('active');
        });
    });
});


document.querySelector('.btn').addEventListener('click', function(event) {
    document.querySelector();
    event.preventDefault();  // Previne o envio padrão do formulário
    window.location.href = 'index.html';  // Redireciona para a página index.html
});



document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Previne o envio padrão do formulário
    window.location.href = 'index.html';  // Redireciona para a página index.html
});



document.addEventListener("DOMContentLoaded", () => {
    const loginWrapper = document.querySelector('.login-wrapper');
    const registerWrapper = document.querySelector('.register-wrapper');
    const registerLink = document.querySelector('.register-link a');
    const loginLink = document.querySelector('.login-link a');
    const closeIcons = document.querySelectorAll('.icon-close');

    // Toggle between login and register
    registerLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginWrapper.classList.remove('active');
        registerWrapper.classList.add('active');
    });

    loginLink.addEventListener('click', (e) => {
        e.preventDefault();
        registerWrapper.classList.remove('active');
        loginWrapper.classList.add('active');
    });

    // Close both forms (can be customized if you want specific behavior)
    closeIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            loginWrapper.classList.remove('active');
            registerWrapper.classList.remove('active');
        });
    });
});


document.getElementById('toggleMap').addEventListener('click', function() {
    const map = document.getElementById('map');
    map.classList.toggle('hidden');
});



document.getElementById('toggleMap').addEventListener('click', function() {
    const map = document.getElementById('map');
    map.classList.toggle('hidden');
});

const mapContainer = document.querySelector('.map-container');

mapContainer.addEventListener('mousemove', function(e) {
    const width = mapContainer.offsetWidth;
    const height = mapContainer.offsetHeight;
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const moveX = (mouseX / width - 0.5) * 10;
    const moveY = (mouseY / height - 0.5) * 10;

    mapContainer.style.transform = `rotateX(${moveY}deg) rotateY(${moveX}deg)`;
});

mapContainer.addEventListener('mouseleave', function() {
    mapContainer.style.transform = 'rotateX(0deg) rotateY(0deg)';
});



























