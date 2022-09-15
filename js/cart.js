let label = document.getElementById("label");
let shoppingCart = document.getElementById("shopping-cart");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
  let cartIcon = document.getElementById("cantidadCarrito");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

// ! Cada vez que se carga la página, se realiza el cálculo de cuántos items hay
// ! seleccionados para mostrarlos en el cartel rojo del carrito.
calculation();

let generateCartItems = () => {
  if (basket.length !== 0) {
    return (shoppingCart.innerHTML = basket
      .map((x) => {
        let { id, item } = x; // ! la x proviene de la Basket
        let buscar = productos.find((y) => y.id === id) || []; // ! y.id es el id que viene de data.js , id es el id que viene de basket
        let { imagen, nombre, precio, descripcion } = buscar;
        return `
        <div class="card mb-3" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-md-4 imagen-carrito">
              <img src="${imagen}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8 detalles">
              <div class="card-body tarjeta-carrito">
                <div class"titulo-precio">
                  <h6 class="card-title titulo-carrito">${descripcion.toUpperCase()}</h6>
                  <div class="precio-x">
                    <p>$ ${precio}</p>
                    <i onclick="removeItem(${id})" class="bi bi-trash3-fill"></i>
                  </div>
                </div>
                <p class="card-text">
                  <div class="btn-subtotal">
                    <div class="buttons">
                      <i onclick="disminuir(${id})" class="bi bi-dash-lg"></i>
                      <div id=${id} class="cantidad">${item}</div>
                      <i onclick="aumentar(${id})" class="bi bi-plus-lg"></i>
                    </div>
                    <div class="price-tag">
                      <h4>$ ${item * buscar.precio}</h4>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>`;
      })
      .join(""));
  } else {
    shoppingCart.innerHTML = ``;
    label.innerHTML = `
      <h2>El Carrito está Vacío</h2>
      <a href="index.html">
          <button class="HomeBtn">Volver al Inicio</button>
      </a>
      `;
  }
};

generateCartItems();

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

  generateCartItems();
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
  generateCartItems(); // ! si algún item llega a 0, se remueve de la lista de cartas del carrito y se regeneran las que si tienen items.
  location.reload(); // Se recarga la página para dar funcionamiento al botón "checkout"
  localStorage.setItem("data", JSON.stringify(basket));
};

let actualizar = (id) => {
  let buscar = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = buscar.item;
  calculation();
  totalAmount();
};

let removeItem = (id) => {
  let selectedItem = id;
  //console.log(selectedItem.id);
  basket = basket.filter((x) => x.id !== selectedItem.id);
  generateCartItems();
  totalAmount();
  calculation();
  location.reload(); // Se recarga la página para dar funcionamiento al botón "checkout"
  localStorage.setItem("data", JSON.stringify(basket));
};

let limpiarCarrito = () => {
  basket = [];
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(basket));
  calculation();
};

let totalAmount = () => {
  if (basket.length !== 0) {
    let amount = basket
      .map((x) => {
        let { item, id } = x;
        let buscar = productos.find((y) => y.id === id) || [];
        return item * buscar.precio;
      })
      .reduce((x, y) => x + y, 0);
    label.innerHTML = `
      <h2>Total : $ ${amount}</h2>
      <div class="btn-checkout">
        <button class="checkout" id="checkout">Checkout</button>
        <button onclick="limpiarCarrito()" class="removerTodo">Limpiar Carrito</button>
      </div>
      `;
  } else return;
};

totalAmount();

// ! Cuadro de diálogo al finalizar la compra.

let btnCheckout = document.getElementById("checkout");
btnCheckout.addEventListener("click", checkout);

async function checkout() {
  debugger;
  const inputOptions = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        PayPal: "PayPal",
        "Visa/MasterCard": "Visa/MasterCard",
        Transferencia: "Transferencia",
      });
    }, 1000);
  });

  const { value: color } = await Swal.fire({
    title: "Seleccione un método de Pago",
    input: "radio",
    inputOptions: inputOptions,
    inputValidator: (value) => {
      if (!value) {
        return "¡Debes elegir una opción!";
      }
    },
  });

  if (color) {
    Swal.fire(
      "¡Gracias por elegirnos!",
      "Recibirá un e-mail de confirmación de compra e información de pago.",
      "success"
    );
  }
  basket = [];
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(basket));
  calculation();
}
