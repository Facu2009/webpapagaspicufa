// Function to contact via WhatsApp with product name
function contactWhatsApp(producto) {
    const mensaje = `Hola, me interesa el producto: ${producto}. ¿Podrías darme más información?`;
    const url = `https://wa.me/5492612773162?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}

// Function to handle custom request form
function handleCustomRequest(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const producto = document.getElementById('producto').value;
    const detalles = document.getElementById('detalles').value;
    
    let mensaje = `Hola, soy ${nombre}.\n\n`;
    mensaje += `Estoy buscando: ${producto}\n\n`;
    
    if (detalles) {
        mensaje += `Detalles adicionales:\n${detalles}`;
    }
    
    const url = `https://wa.me/5492612773162?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
    
    // Reset form
    event.target.reset();
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