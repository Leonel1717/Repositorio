alert("Bienvenido a mi portfolio!")
// alert("Bienvenido a mi portfolio!"
const nombre = prompt("Cómo te llamas?")
alert("Hola " + nombre + "! Bienvenido a mi portfolio!")
// Array de frases
const frases = [
    "No comas mayonesa si lleva una hora fuera del refri",
    "Si dejas caer un huevo a una altura de 20cm aproximados en la sarten se abrira sin romper la yema",
    "Por más que caves hacía abajo no creo que llegues a China",
    "Si te pasas de sal en el guiso echa papas asi compensas el exceso",
    "No, las palomas no revientan por comer arroz",
    "Los loros pueden aprender hasta 60 palabras, suficiente como para contar la historia del patito feo",
    "Una vez un sabio dijo...por cada taza de arroz son dos de agua"   
    ];
    // Función para generar una frase aleatoria
    function generarFrase() {
        // Genera un índice aleatorio dentro del rango de la longitud del array de frases
        const indice = Math.floor(Math.random() * frases.length);
        // Obtiene la frase correspondiente al índice generado
        const fraseAleatoria = frases[indice];
        // Muestra la frase en el footer
        document.getElementById("frase").innerText = fraseAleatoria;
    }
    // Agrega un listener al botón para ejecutar la función generarFrase cuando se haga clic
    document.getElementById("btn-generar").addEventListener("click", generarFrase);
    