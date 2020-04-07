'use strict'
//FUNCIONES: Conjunto de ordenes agrupadas con un nombre reutilizable  -
//conjunto de instrucciones

//definir una función

function porConsola(n1, n2){
    console.log("suma:" + (n1 + n2));
    console.log("resta:" + (n1 - n2));
    console.log("multiplicación:" + (n1 * n2));
    console.log("División:" + (n1 / n2));
    console.log("----------------"+"<br/>");
}

function porPantalla(n1,n2){
    document.write("suma:" + (n1 + n2) + "<br/>");
    document.write("resta:" + (n1 - n2)+ "<br/>");
    document.write("multiplicación:" + (n1 * n2)+"<br/>");
    document.write("División:" + (n1 / n2)+"<br/>")
    document.write("----------------");
}
function calculadora(n1, n2, mostrar=false) { //aquí se crean los parámetros
    
if(mostrar == false){
    porConsola(n1,n2);
}else{
    porPantalla(n1,n2);
}
return "Esta es una calculadora"; //return devulve un texto
}
    
//recibir parámetros: una función puede recibir varios o ningún parámetro
calculadora(12, 6, true);
calculadora(56, 7, true);


//parametros opcionales
