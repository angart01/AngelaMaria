'use strict'

/* pedir # y decir si es par e impar*/

var num = parseInt(prompt( "Introduzca un número ", 0));

while(isNaN( num)){ //Verifica si ha ingresado srtring
    Num= parseInt(prompt( "El valor ingresado no es un número, vuelva a intentarlo", 0));
}
if ( num %2 ==0){
    alert("Es un número par");
}else{
    alert("Es un número impar");
}
