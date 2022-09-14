// ! El carrito mostrado en la navbar; obtiene la información almacenada en el localStorage.
// ! Utilizo un Operador OR para que me muestre O lo que hay en el localStorage o sino un array vacío.
let basket = JSON.parse(localStorage.getItem("data")) || [];

// let containerProd = document.getElementById("contenedorProductos");
const containerCarrito = document.querySelector("#carrito");

// ! Se crean las Cartas de Productos con Fetch

const seccion = document.getElementById("contenedorProductos");
const URL = "js/productos.json";
let tarjetasProds = [];

const peticionFetch = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

const crearCards = (content) => {
  const { id, producto, nombre, precio, stock, descripcion, imagen } = content;
  let buscar = basket.find((content) => content.id === id) || [];
  return `<div class="card" id=product-id-${id} style="width: 18rem;">
    <img src="${imagen}" class="card-img-top" id=img-${id} alt="${descripcion}">
    <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
      <p class="card-text">${descripcion}</p>
      <div class="precio-cantidad">
        <span class="card-price">$${precio}</span>
        <div class="buttons">
          <i onclick="disminuir(${id})" class="bi bi-dash-lg"></i>
          <div id=${id} class="cantidad">
          ${buscar.item === undefined ? 0 : buscar.item} 
          </div>
          <i onclick="aumentar(${id})" class="bi bi-plus-lg"></i>
        </div>
      </div>
    </div>
  </div>`;
};

const retornoCardError = () => {
  return `<div class="error-contenido">
              <div class="emoji">🛠</div>
              <p>Parece que hubo un error :/</p>
              <p>Estamos trabajando para resolver el problema...</p>
          </div>`;
};

let contenidoHTML = "";

const cargarContenido = async () => {
  await fetch("js/productos.json")
    .then((response) => response.json())
    .then((data) => {
      tarjetasProds = data;
      tarjetasProds.forEach((contenido) => {
        contenidoHTML += crearCards(contenido);
      });
      seccion.innerHTML = contenidoHTML;
    })
    .catch((error) => {
      seccion.innerHTML = retornoCardError();
    });
};

cargarContenido();

// ! Funciones para aumentar o disminuir la cantidad de items en cada producto.
let aumentar = (id) => {
  let itemSeleccionado = id;
  let buscar = basket.find((x) => x.id === itemSeleccionado.id);

  if (buscar === undefined) {
    basket.push({
      id: itemSeleccionado.id,
      item: 1,
    });
  } else {
    buscar.item += 1;
  }

  //console.log(basket);
  actualizar(itemSeleccionado.id);
  localStorage.setItem("data", JSON.stringify(basket));
};

let disminuir = (id) => {
  let itemSeleccionado = id;
  let buscar = basket.find((x) => x.id === itemSeleccionado.id);

  if (buscar === undefined) return;
  else if (buscar.item === 0) return;
  else {
    buscar.item -= 1;
  }
  actualizar(itemSeleccionado.id);
  basket = basket.filter((x) => x.item !== 0);

  localStorage.setItem("data", JSON.stringify(basket));
};

// !Esta función actualiza en momento real la cantidad de items que aparece en cada tarjeta de producto.
let actualizar = (id) => {
  let buscar = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = buscar.item;
  calculation();
};

// ! Esta función suma las items por producto y lo muestra en el carrito superior.
let calculation = () => {
  let cartIcon = document.getElementById("cantidadCarrito");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

// ! Cada vez que se carga la página, se realiza el cálculo de cuántos items hay
// ! seleccionados para mostrarlos en el cartel rojo del carrito.
calculation();

let cartIcon = parseInt(document.getElementById("cantidadCarrito"));
