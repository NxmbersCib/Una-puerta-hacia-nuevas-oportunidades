const galeria = document.querySelector('.galeria');
const contenedorImagenes = document.querySelector('.contenedor-imagenes');
const botones = document.querySelectorAll('button');
const anchoImagen = contenedorImagenes.clientWidth;
let index = 0;

botones.forEach((boton) => {
    boton.addEventListener('click', () => {
        if (boton.id === 'anterior') {
            index = Math.max(index - 1, 0);
        } else {
            index = Math.min(index + 1, contenedorImagenes.children.length - 1);
        }
        const desplazamiento = -index * anchoImagen;
        contenedorImagenes.style.transform = `translateX(${desplazamiento}px)`;
    });
});
