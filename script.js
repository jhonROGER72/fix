// Lista de imágenes para el carrusel de la portada
const imagenes = [
    'fix1.jpg',
    'fix2.jpg',
];

let indiceImagen = 0;

function cambiarImagenPortada() {
    // Selecciona el contenedor de la imagen de portada
    const portada = document.querySelector('.portada-imagen');
    
    // Cambia la imagen de fondo
    portada.style.backgroundImage = `url(${imagenes[indiceImagen]})`;
    
    // Cambia al siguiente índice
    indiceImagen = (indiceImagen + 1) % imagenes.length;
}

// Cambia la imagen cada 5 segundos
setInterval(cambiarImagenPortada, 5000);

// Ejecuta el cambio inicial
cambiarImagenPortada();
