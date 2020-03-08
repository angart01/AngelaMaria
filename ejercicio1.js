'use strict'

/*Programa que pide 2 numeros y diga cuál es mayor,  menor e iguales.

- prompt (pide datos al usuario y lo recibe como string)
- si no se introduce un número en consola aparecerá: (NaN)--- 
- La función isNaN (Identifica si corresponde a string)/ y
 While podría evaluar la condición 
*/
var num1 = parseInt(prompt("Ingrese un primer número", 0));
var num2 = parseInt(prompt("Ingrese un segundo número", 0));

console.log(num1, num2);

while (num1 <= 0 || num2 <=0 || isNaN(num1) || isNaN(num2)){
    num1 = parseInt(prompt("Datos incorrectos. Vuelva a ingresar un primer número", 0));
    num2 = parseInt(prompt("Datos incorrectos. Vuelva a ingresar un segundo número", 0));
}

if(num1 == num2){
    alert("los números ingresados son iguales");

}else if (num1 > num2){
    alert("El numero mayor es: " + num1);
    alert("El número menor es: " +  num2);
}else if( num2 > num1){
    alert("El número mayor es: " + num2);
    alert("El número menor es: " + num1);
}

// if (num1 < num2 || num2 < num1){
 



