'use stric'

/* calculadora:
pedir 2//#
- si ingresa otro dato, repetir
- sumar, restar, multiplicar, dividir*/

var num1 = parseInt(prompt("Ingrese primer numero", 0));
var num2 = parseInt(prompt("Ingrese el segundo numero", 0));


while(num1 < 0 || num2 <0 || isNaN(num1) || isNaN(num2)){ //comprobar si es numero o string
    num1 = parseInt(prompt("Ingrese nuevamente el primer numero", 0));
    num2 = parseInt(prompt("Ahora ingrese el segundo numero", 0));
} 

var resultado = "La suma es: " +(num1+num2)+" \n "+ //salto línea html <br/>
                "la resta es: " +(num1-num2)+" \n "+
                "La multiplicación es: " +(num1*num2)+" \n "+
                "La división es: " +(num1/num2)+" \n ";

                var resultado2 = "La suma es: " +(num1+num2)+"<br/>  "+ //salto línea html <br/>
                "la resta es: " +(num1-num2)+" <br/> "+
                "La multiplicación es: " +(num1*num2)+" <br/> "+
                "La división es: " +(num1/num2)+" <br/> ";

                document.write(resultado);
                alert(resultado);// usando <br/> no hará el salto -- \n (xa consola y alert)

