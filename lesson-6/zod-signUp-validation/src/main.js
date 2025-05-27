// Importamos Zod desde la librería
import { z } from "zod";

// Variables para capturar los elementos del formulario
const userForm = document.getElementById("registerForm");
const userName = document.getElementById("name");
const userPassword = document.getElementById("password");
const userEmail = document.getElementById("email");
const errorsP = document.getElementById("errors");

// Definimos el esquema de validación con Zod
const registerSchema = z.object({
  // El nombre debe ser una cadena de texto no vacía
  name: z.string().min(3, "El nombre es obligatorio."),

  // El correo debe tener formato válido
  email: z.string().email("El correo electrónico no es válido."),

  // La contraseña debe tener al menos 6 caracteres
  password: z
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres."),
});

// Escuchamos el evento de envío del formulario
userForm.addEventListener("submit", (event) => {
  // Prevenimos el envío por defecto del formulario
  event.preventDefault();

  // Capturamos los valores ingresados por el usuario
  const formData = {
    name: userName.value,
    email: userEmail.value,
    password: userPassword.value,
  };

  try {
    registerSchema.parse(formData);
    errorsP.textContent = "¡Registro exitoso!";
    errorsP.style.color = "green";
  } catch (error) {
    errorsP.textContent = error.errors.map(e => e.message).join(", ");
    errorsP.style.color = "red";
  }
});
