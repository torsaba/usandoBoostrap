document.addEventListener("DOMContentLoaded", function () {
    const textos = [
        "Praesent convallis sed nisi quis posuere.",
        "...aliquam elementum molestie lacus a tristique.",
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
