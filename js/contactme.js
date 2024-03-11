document.getElementById('contactForm').addEventListener('submit', function(event) {
    var nombreInput = document.getElementById('nombre');
    var emailInput = document.getElementById('email');
    var mensajeInput = document.getElementById('mensaje');

    if (!nombreInput.value.trim() || !emailInput.value.trim() || !mensajeInput.value.trim()) {
        event.preventDefault();
        alert('Por favor, complete todos los campos del formulario.');
    }
});
