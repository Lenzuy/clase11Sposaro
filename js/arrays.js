// Stock de los productos disponibles en app.js (Yerba, Mate, Bombilla)
let stockAa = 20;
let stockAb = 20;
let stockB = 50;
let stockC = 50;
let stockD = 0;
let stockE = 0;

// Array con los productos disponibles en app.js más otros posibles productos.
class Producto {
  constructor(id, producto, nombre, precio, stock, descripcion, imagen) {
    this.id = id;
    this.producto = producto;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.descripcion = descripcion;
    this.imagen = imagen;
  }
}

const productos = [];
productos.push(
  new Producto(
    "1",
    "yerba",
    "Yerba",
    PRECIOAa,
    stockAa,
    "yerba con palos",
    "https://www.innovaspain.com/wp-content/uploads/2016/11/Yerba_Mate.jpeg"
  )
);
productos.push(
  new Producto(
    "2",
    "yerba",
    "Yerba",
    PRECIOAb,
    stockAa,
    "yerba sin palos",
    "https://mercadopax.com.uy/wp-content/uploads/2021/05/yerba-mate-sin-palo.jpg"
  )
);
productos.push(
  new Producto(
    "3",
    "mate",
    "Mate",
    PRECIOB,
    stockB,
    "mate calabaza",
    "https://arandu.com.ar/media/2020/06/30008S-8_web.jpg"
  )
);
productos.push(
  new Producto(
    "4",
    "bombilla",
    "Bombilla",
    PRECIOC,
    stockC,
    "bombilla de plata",
    "https://facellojoyeros.com.uy/facello/205-large_default/bombilla-plata-y-oro-antigua.jpg"
  )
);
productos.push(
  new Producto(
    "5",
    "cuchillo",
    "Cuchillo",
    PRECIOD,
    stockD,
    "cuchillo acero damasco",
    "https://www.almacenrural.com.uy/contentimg/35788/1/d/R0501138-5_M.jpg"
  )
);
productos.push(
  new Producto(
    "6",
    "termo",
    "Termo",
    PRECIOE,
    stockE,
    "termo stanley verde",
    "https://www.charruastore.com.uy/fotos/productos/10012.jpg"
  )
);

/* // El Usuario puede elegir ver la lista de productos en la Consola.
let listado = confirm("¿Desea conocer el listado de productos?");

if (listado === true) {
  console.log("Listado de productos: ");
  console.table(productos);
} else {
  alert("Agradecemos su visita");
}
 */

const containerProd = document.getElementById("contenedorProductos");
const containerCarrito = document.querySelector("#carrito");

function crearCards() {
  productos.forEach((prod) => {
    containerProd.innerHTML += `<div class="card" style="width: 18rem;">
    <img src="${prod.imagen}" class="card-img-top" alt="${prod.descripcion}">
    <div class="card-body" id="${prod.id}">
      <h5 class="card-title">${prod.nombre}</h5>
      <p class="card-text">${prod.descripcion}</p>
      <a href="#" class="btn btn-primary">$${prod.precio}</a>
    </div>
  </div>`;
  });
}

crearCards();
