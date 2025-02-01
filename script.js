let actual = document.getElementById("actual");
let objetivo = document.getElementById("objetivo");

function calcular() {
    // Obtener el valor del objetivo dentro de la función para que siempre esté actualizado
    let valor = parseFloat(objetivo.value);

    // Verificar si el valor del objetivo es válido
    if (!isNaN(valor)) {
        // Obtener todas las celdas de porcentaje y peso
        let pesos = document.querySelectorAll('.peso');
        let porcentajes = document.querySelectorAll('.porcentaje');
        
        // Crear un array con los porcentajes
        let arrayPorcentajes = [];
        porcentajes.forEach(porcentaje => {
            arrayPorcentajes.push(parseFloat(porcentaje.textContent));
        });

        // Recorrer las celdas de peso y calcular el peso correspondiente
        let i = 0;
        pesos.forEach(peso => {
            let resultado = arrayPorcentajes[i] * valor / 100; // Calcular el peso
            peso.textContent = resultado.toFixed(2); // Actualizar el contenido con el peso calculado
            i++;
        });

        // Guardar las cookies con los valores actuales de los inputs
        setCookie("actual", actual.value, 56);  // Guarda el valor 'actual' con una duración de 56 días (8 semanas)
        setCookie("objetivo", objetivo.value, 56);  // Guarda el valor 'objetivo' con una duración de 56 días (8 semanas)
    } else {
        alert("Por favor, ingrese un valor válido para el objetivo.");
    }
}

// Función para guardar una cookie
function setCookie(name, value, days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));  // Calcula la fecha de expiración (en milisegundos)
    let expires = "expires=" + date.toUTCString();  // Convierte la fecha a formato UTC
    document.cookie = name + "=" + value + "; " + expires + "; path=/";  // Establece la cookie
}

// Función para obtener el valor de una cookie
function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);  // Elimina espacios al inicio
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);  // Si la cookie existe, devuelve su valor
    }
    return null;  // Si la cookie no existe, devuelve null
}

// Función para recuperar las cookies al cargar la página
function seguir() {
    // Obtener las cookies de 'actual' y 'objetivo'
    let actualCookie = getCookie("actual");
    let objetivoCookie = getCookie("objetivo");

    // Asignar los valores de las cookies a los campos de entrada si existen
    if (actualCookie) {
        actual.value = actualCookie;
    }

    if (objetivoCookie) {
        objetivo.value = objetivoCookie;
    }
}

// Llamar a la función seguir al cargar la página para inicializar los valores
window.onload = seguir;
