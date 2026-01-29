// Function to contact via WhatsApp with product name
function contactWhatsApp(producto) {
    const mensaje = `Hola, me interesa el producto: ${producto}. ¿Podrías darme más información?`;
    const url = `https://wa.me/5492612773162?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});