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


document.querySelector('.btn').addEventListener('click', function() {
    document.querySelector('.wrapper').classList.add('rotate');
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
