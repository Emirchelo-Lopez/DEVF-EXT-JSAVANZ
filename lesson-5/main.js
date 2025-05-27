document
  .getElementById("registroEvento")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío automático del formulario

    // Variables
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;
    const intereses = document.querySelectorAll(
      'input[name="intereses"]:checked'
    );
    const horario = document.querySelector('input[name="horario"]:checked');
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;

    // Validaciones básicas
    if (!nombre || !correo || !telefono || intereses.length === 0 || !horario) {
      alert("Por favor, completa todos los campos obligatorios.");
      return;
    }

    // Validación 1: Nombre debe tener al menos 3 caracteres
    if (nombre.length < 3) {
      alert("El nombre debe tener al menos 3 caracteres.");
      return;
    }

    // Validación 2: Correo debe tener formato válido
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoRegex.test(correo)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    // Validación 3: Teléfono debe tener exactamente 10 dígitos y solo números
    if (telefono.length !== 10) {
      alert("El teléfono debe tener exactamente 10 números.");
      return;
    }
    // Recorremos cada caracter para verificar que todos sean números
    for (let i = 0; i < telefono.length; i++) {
      if (telefono[i] < "0" || telefono[i] > "9") {
        alert("El teléfono solo debe contener números.");
        return;
      }
    }

    // Si todo está bien
    alert("Registro exitoso. ¡Gracias por registrarte!");
  });
