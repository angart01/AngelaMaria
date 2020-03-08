'use strict'
/*Escriba un programa que use console.log
para imprimir todos los números del 1 al 100, 
con dos excepciones:
Para los números divisibles por 3, imprima en "Fizz"lugar,
y para los números divisibles por 5 (y no 3), imprima en su "Buzz"*/
//Y # divisibles por 3 y 5 "FizzBuzz"
//?ORDEN: ¿Xq debo por la última excepción?

for (var n = 1; n <= 100; n++){
   
if (n % 3 === 0 && n % 5 === 0){
    console.log(n+ " Es divisible por 5 y por 3: (FizzBuzz)"); 

} else if (n % 3 !=0 && n % 5 !=0){
    console.log(n+ " no es un número divisible por 3 ni por 5"); 

    }else if(n % 5 === 0){
     console.log(n+ " Es divisible por 5: (BUZZ)");

    }else if (n % 3 === 0){
        console.log(n+ " Es divisible por 3: (FIZZ)");
    }
        else{
        console.log(n);
    }
}


