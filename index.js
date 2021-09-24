// agregar productos.

function Productos (Tipo,Talla,Valor){
  this.Tipo = Tipo;
  this.Talla = Talla;
  this.Valor = Valor; 
}

let inputTipo = "";
let inputTalla = "";
let inputValor = "";

const carrito = [];
let entrada = true 

do {
inputTipo = prompt ("Ingrese Tipo De Producto (polera, poleron. pantalon)")
inputTalla = prompt ("Ingrese su talla (S,M,L,XL)")
inputValor = prompt ("Ingrese el valor del producto")


const compra1 = new Productos (inputTipo, inputTalla, inputValor,);
carrito.push(compra1)

entrada = confirm("quieres seguir ingresando productos?")
}while (entrada);

console.log(carrito);

alert ("se ha recibido su mensaje con exito"); 






