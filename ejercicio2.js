'use strict'
//Hacer un programa que muestre todos los numeros que hay entre dos numeros introducidos por el usario
//BUCLE FOR:  Trozo de codigo que se repite varias veces
// i= contador (++ incremento)  y (-- decremento)

// quiero contar hasta el # ?

var n1 = parseInt(prompt("Ingrese un primer número", 0));
var n2 = parseInt(prompt("Ingrese un segundo número", 0));
console.log (n1, n2);

for ( var i = n1;  i<= n2; i++){
    console.log("los números son: " +i);
}

    

    