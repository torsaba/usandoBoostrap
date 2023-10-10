document.addEventListener("DOMContentLoaded", function () {
    const textos = [
        "Texto 1: Este es el primer texto aleatorio.",
        "Texto 2: Segundo texto aleatorio para el carrusel.",
        "Texto 3: Tercer texto aleatorio que aparecerá.",
    ];

    const textCarousel = document.getElementById("text-carousel");
    let currentIndex = 0;

    function cambiarTexto() {
        textCarousel.textContent = textos[currentIndex];
        currentIndex = (currentIndex + 1) % textos.length;
    }

    setInterval(cambiarTexto, 3000);
    
    cambiarTexto(); // Mostrar el primer texto al cargar la página
});
