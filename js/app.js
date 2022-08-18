//debugger;

/* En el siguiente programa, el Usuario escogerá la cantidad de items a comprar de 3 productos dados. 
Según su elección, será elegible para obtener un descuento o no, teniendo opción de modificar su elección inicial. 
El resumen de la cuenta se verá por consola al finalizar el pedido. */

/* let nombreCompleto = prompt(
  "Bienvenido a MatesUY 🧉: Favor ingrese su Nombre y Apellido"
); */

let productoA = 0;
let tipoProductoA = "";
let productoB = 0;
let productoC = 0;
let productoD = 0;
let productoE = 0;

let PRECIOAa = 150; // Precio fijo productoAa = Yerba Con Palos
let PRECIOAb = 180; // Precio fijo productoAb = Yerba Sin Palos
let PRECIOA = 0; // Variable que toma el valor de PRECIOAa o PRECIOAb, según escoja que yerba escoja el Usuario.
const PRECIOB = 240; // Precio fijo productoB = Mate Calabaza
const PRECIOC = 560; // Precio fijo productoC = Bombilla de Plata
const PRECIOD = 4560; // Precio fijo productoD = Cuchillo Acero Damasco
const PRECIOE = 3000; // Precio fijo productoE = Termo Stanley Verde

let costoA;
let costoB;
let costoC;
let precioTotal;

let tieneDescuento;
let carritoLleno;
let descuento;

// Función que determina la cantidad de productos que comprará el usuario.
function cantidadDeItems() {
  tipoProductoA = prompt(
    "¿Que tipo de Yerba desea? A (" +
      PRECIOAa +
      " $/kg); B (" +
      PRECIOAb +
      " $/kg);- Inserte la letra asignada a su preferencia: "
  ).toLowerCase();
  switch (tipoProductoA) {
    case "a":
      PRECIOA = PRECIOAa;
      break;
    case "b":
      PRECIOA = PRECIOAb;
      break;
    default:
      alert("Favor ingrese una opción válida");
      cantidadDeItems();
      break;
  }
  productoA = parseInt(
    prompt("Yerba (" + PRECIOA + " $/u) - Seleccione la cantidad: ")
  );
  productoB = parseInt(
    prompt("Mate (" + PRECIOB + " $/u) - Seleccione la cantidad: ")
  );
  productoC = parseInt(
    prompt("Bombilla (" + PRECIOC + " $/u) - Seleccione la cantidad: ")
  );
  costoA = productoA * PRECIOA;
  costoB = productoB * PRECIOB;
  costoC = productoC * PRECIOC;

  precioTotal = costoA + costoB + costoC;

  // El siguiente while sirve para que el Usuario solo pueda ingresar números y el programa no se ejecute con "NaN" en alguna de sus variables.
  while (isNaN(precioTotal)) {
    alert("Favor ingrese únicamente números");
    cantidadDeItems();
  }
  if (costoA > 0 && costoB > 0 && costoC > 0) {
    alert("¡Obtiene un descuento del 20%! 🎉");
    alert(
      "Proceda al pago 💵: El importe total a abonar es de: " +
        "$ " +
        0.8 * precioTotal
    );
    descuento = 0.8; // Obtiene un descuento del 20%
    carritoLleno = true;
  } else {
    alert(
      "No tiene descuento. Acceda comprando al menos una unidad de cada item"
    );
    tieneDescuento = confirm(
      "¿Desea cambiar sus items y acceder al descuento del 20%?"
    );
  }

  // Según que opción marque el Usuario en el anterior confirm():
  if (tieneDescuento === true) {
    cantidadDeItems(); // Nueva llamada a la función, el usuario desea cambiar sus items para acceder al descuento.
    // Con este while, me aseguro que el Usuario no acceda al Descuento asignando a algún item el valor 0.
    while (productoA * productoB * productoC === 0) {
      // Si cualquier producto es 0, la multiplicación será 0.
      alert("Favor ingrese números mayores a 0");
      cantidadDeItems();
    }
    alert(
      "Proceda al pago con descuento 😎: El importe total a abonar es de: " +
        "$" +
        0.8 * precioTotal
    );
    descuento = 0.8; // Obtiene un descuento del 20%
    carritoLleno = true;
  } else if (tieneDescuento === false) {
    // El usuario no desea acceder al descuento y procede al pago final sin descuento.
    alert(
      "Proceda al pago sin descuento ☹: El importe total a abonar es de: " +
        "$" +
        precioTotal
    );
    carritoLleno = false;
    descuento = 1; // No obtiene descuento.
  }
  if (carritoLleno === true) {
    document.getElementById("tituloCarrito").innerText =
      "Tiene items en su Carrito 🛒";
    let hr = document.createElement("hr");
    document.getElementById("tituloCarrito").append(hr);
    let botonCarrito = document.createElement("button");
    document.getElementById("tituloCarrito").append(botonCarrito);
    botonCarrito.innerHTML = "Proceda al pago";
    botonCarrito.className = "btn btn-success";
    botonCarrito.type = "button";
    let hr2 = document.createElement("hr");
    document.getElementById("tituloCarrito").append(hr2);
  } else {
    document.getElementById("tituloCarrito").innerText =
      "Su Carrito está vacío";
    let hr = document.createElement("hr");
    document.getElementById("tituloCarrito").append(hr);
  }

  console.log("Resumen de Compra 🧉: ");
  console.log("Productos: ");
  console.log(productoA + " Yerba (1 kg): " + costoA);
  console.log(productoB + " Mate (Unid.): " + costoB);
  console.log(productoC + " Bombilla (Unid.): " + costoC);
  console.log("Subtotal: $ " + precioTotal);
  console.log("Descuento del " + Math.ceil((1 - descuento) * 100) + " %");
  console.log("Total: $ " + precioTotal * descuento);
  console.log("¡Muchas Gracias por su compra " + nombreCompleto + "!"); // En este console.log devuelvo el nombre ingresado por el usuario.
}

let itemsEnCarrito = productoA + productoB + productoC;
