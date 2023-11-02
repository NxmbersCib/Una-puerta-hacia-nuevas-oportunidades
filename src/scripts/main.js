

const topbar = document.querySelector('.topbar');


window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        topbar.style.position = 'fixed';
        topbar.style.transform = 'translateY(-100px)'; 
    } else {
        topbar.style.position = 'relative';
        topbar.style.transform = 'translateY(0)';
    }
});
