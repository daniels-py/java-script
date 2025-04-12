let num1 = parseFloat(prompt("ingrese un numero porfa: "));
let num2 = parseFloat(prompt("ingrese otrro numero porfavor: "))
let operacion = prompt("¿ que operacion quieres hacer ?  (suma, resta, multiplicar, dividir)")

if (operacion === "suma") {
    console.log("Resultado:", num1 + num2);
  } else if (operacion === "resta") {
    console.log("Resultado:", num1 - num2);
  } else if (operacion === "multiplicar") {
    console.log("Resultado:", num1 * num2);
  } else if (operacion === "dividir") {
    console.log("Resultado:", num1 / num2);
  } else {
    console.log("Operación no válida");
  }
