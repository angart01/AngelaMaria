const usuario= {
    nombre: "Angela",
    
}

const compra =[]

const mostrarproductos=()=>{
   
    productos.forEach(productos => console.log( `${productos.nombre} - $${productos.precio}`)
    )
}

const comprar = nombre =>{
    if (!nombre)
    return "Ingrese un nombre válido"

const encontrarP = productos.find(producto=> producto.nombre === nombre)
    if (!encontrarP)
    return " Este producto no ha sido encontradio"

    compra.push(encontrarP)
    console.log ("Su pedido es: ") 
    return compra 
}
