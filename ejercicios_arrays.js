'use strict'
// pida 6 numeros por pantalla y los ubica en un array
// mostrar el array entero en el cuerpo de la pagina y la consola
//sacar array ordenado y mostrarlo
//invertir su orden y mostrarlo
//mostrar cuantos elementos tiene un array
//realizar busqueda de un valor introducido por el usuario y decir si se encuentra y su indice


    

//pedir 6 numeros
let numeros = [];

for (let i=0; i<= 5; i++){
    //numeros[i] = parseInt(prompt("Introduce un numero", 0)); //parseint: convertir a numero
  numeros.push(parseInt(prompt("Introduce un numero", 0)));  
}
    console.log(numeros);//mostrar array por consola

    // mostrar en cuerpo pagina
    document.write("<h1>Contenido del Array </h1>");
    numeros.forEach((numero, index)=>{
        document.write("<strong>" +numero+ "</strong></br>");
    });
//ordenar y mostrar

numeros.sort(function (a,b){return a-b}); //orden numérico
console.log(numeros);

//cuantos elementos tiene un array

document.write(+numeros.length);

// BUSQUEDA

let busqueda = parseInt(prompt("Busca un numero",0));
let posicion = numeros.findIndex(numero => numero == busqueda);
if (posicion && posicion != -1){
    document.write("<hr/> <h1> ENCONTRADO </h1>");
    }else{
        document.write("<h1> NO ENCONTRADO </h1>");
    }





    
    /*
    let numero_array = numeros.split();

document.write(numero_array);

let elemento = "";


do{
    elemento = prompt("introduce un numero:");
    películas.push(elemento);
}while(elemento != "ACABAR");

películas.pop();
console.log(películas);*/