
let inicio = 1;
let fin = 100;
let input = parseFloat(prompt("Ingrese un número entre 1 y 100"));
let numAleatorio = inicio + Math.floor(Math.random() * fin);
if (input < numAleatorio) {
    alert("El número secreto es mayor");
}
else if (input > numAleatorio) {
    alert("El número secreto es menor");
}
else if (input == numAleatorio) {
    alert (" Felicitaciones!! Ha ingresado el número correcto.");
}