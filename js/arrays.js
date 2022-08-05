// Stock de los productos disponibles en app.js (Yerba, Mate, Bombilla)
let stockA = 20;
let stockB = 50;
let stockC = 50;
let stockD = 0;
let stockE = 0;

// Array con los productos disponibles en app.js más otros posibles productos.
class Producto {
  constructor(id, producto, precio, stock) {
    this.id = id;
    this.producto = producto;
    this.precio = precio;
    this.stock = stock;
  }
}

const productos = [];
productos.push(new Producto("1", "yerba", PRECIOA, stockA));
productos.push(new Producto("2", "mate", PRECIOB, stockB));
productos.push(new Producto("3", "bombilla", PRECIOC, stockC));
productos.push(new Producto("4", "cuchillo", PRECIOD, stockD));
productos.push(new Producto("5", "termo", PRECIOE, stockE));

// El programa le permitirá al usuario buscar por productos.
let listado = confirm("¿Desea conocer el listado de productos?");

if (listado === true) {
  console.table(productos);
} else {
  alert("Agradecemos su visita");
}
