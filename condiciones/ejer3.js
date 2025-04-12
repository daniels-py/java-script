let num1 = 10;
let num2 = 5;
let operacion = "multiplicar"; // cambia para probar

if ( operacion == "suma") {
  console.log("Resultado:", num1 + num2);
} else if (operacion == "resta") {
  console.log("Resultado:", num1 - num2);
} else if (operacion == "multiplicar") {
  console.log("Resultado:", num1 * num2);
} else if (operacion == "dividir") {
  console.log("Resultado:", num1 / num2);
} else {
  console.log("Operación no válida");
}
