let a =50;
let b = 2;

console.log("suma ", a+b);
console.log("resta ", a-b);
console.log("multiplicar", a*b)
console.log("division ", a/b) 
console.log("modulo", a%b)


console.log("---------------------------");

// OPERADORES DE COMPARACIÓN
let x = 5;
let y = "5";

console.log("OPERADORES DE COMPARACIÓN");
console.log("x == y:", x == y);       // true (compara solo valor)
console.log("x === y:", x === y);     // false (compara valor y tipo)
console.log("x != y:", x != y);       // false
console.log("x !== y:", x !== y);     // true
console.log("x > 3:", x > 3);         // true
console.log("x < 10:", x < 10);       // true
console.log("x >= 5:", x >= 5);       // true
console.log("x <= 4:", x <= 4);       // false

console.log("---------------------------");

// OPERADORES LÓGICOS
let edad = 20;
let tieneLicencia = true;

console.log("OPERADORES LÓGICOS");
console.log("Mayor de edad y tiene licencia:", edad >= 18 && tieneLicencia); // true
console.log("Mayor de edad o tiene licencia:", edad >= 18 || tieneLicencia); // true
console.log("No tiene licencia:", !tieneLicencia); // false