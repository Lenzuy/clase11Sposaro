// Stock de los productos disponibles en app.js (Yerba, Mate, Bombilla)
let stockAa = 20;
let stockAb = 20;
let stockB = 50;
let stockC = 50;
let stockD = 0;
let stockE = 0;

// Array con los productos disponibles en app.js más otros posibles productos.
class Producto {
  constructor(id, producto, precio, stock, descripcion) {
    this.id = id;
    this.producto = producto;
    this.precio = precio;
    this.stock = stock;
    this.descripcion = descripcion;
  }
}

const productos = [];
productos.push(
  new Producto("1", "yerba", PRECIOAa, stockAa, "yerba con palos")
);
productos.push(
  new Producto("2", "yerba", PRECIOAb, stockAa, "yerba sin palos")
);
productos.push(new Producto("3", "mate", PRECIOB, stockB, "mate calabaza"));
productos.push(
  new Producto("4", "bombilla", PRECIOC, stockC, "bombilla de plata")
);
productos.push(
  new Producto("5", "cuchillo", PRECIOD, stockD, "cuchillo acero damasco")
);
productos.push(
  new Producto("6", "termo", PRECIOE, stockE, "termo stanley verde")
);

// El Usuario puede elegir ver la lista de productos en la Consola.
let listado = confirm("¿Desea conocer el listado de productos?");

if (listado === true) {
  console.log("Listado de productos: ");
  console.table(productos);
} else {
  alert("Agradecemos su visita");
}
