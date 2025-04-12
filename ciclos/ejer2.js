
// determinar los numeros pares de un ciclo
for(let i = 1; i  <=10; i++ ){
    
    if( i % 2 === 0){
        alert(i)
    }
}


// tabla de multiplicar
for(let i = 1; i  <=10; i++){

    multiplo = 5 * i;
    console.log(`5 X ${i}=${multiplo}`)
}


let multiplo = parseFloat(prompt("Ingresa un numero para tu mutliplicaciòn: "))

console.log(`multtiplo ingresado es: ${multiplo}`)

for(let i=1; i<=10; i++){
   resultado = multiplo * i;

    console.log(`${multiplo}x${i}=${resultado}`)

}



let suma = 0
for(let i=1; i<=100; i++){

    suma += i;
    console.log(`${suma}`)

}
console.log(`la suma de todos los numeros nos da un reusultado de: ${suma}`)



// dependiendo la logica del ciclo en este caso vamos
// a hacer que nos genere el ciclo pero de forma inversa osea
// de 10 a 1 no como antes que era de 1 a 10
for(let i=10; i>=1; i-- ){
    console.log(i)
}


//el operador módulo % verifica si el número es divisible entre 3 
//es decir, si el residuo de dividir entre 3 es 0)
for(let i=1; i<=50; i++){
    if(i%3 == 0){
        console.log(i)
    }
}



