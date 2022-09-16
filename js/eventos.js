// ! Filtrar productos en el Array 'productos' según lo ingresado en el prompt.

function filtrarProductos() {
  let filtro = document.getElementById("inputBuscador").value.toLowerCase();
  const resultado = productos.filter((productos) =>
    productos.descripcion.includes(filtro)
  );
  // ! Agrego las librerías de Sweet Alert para mostrarle al usuario según su búsqueda.
  // ? Para entrega de Librerías
  if (resultado.length === 0 || filtro.length === 0) {
    Swal.fire({
      title: "¡Producto No Encontrado!",
      text: "Intente nuevamente",
      icon: "error",
      confirmButtonText: "OK",
    });
  } else {
    Swal.fire({
      title: "¡Producto Encontrado!",
      text: "Continúe a los resultados",
      icon: "success",
      confirmButtonText: "OK",
    });

    mostrarProductos();
  }
}

// ! Con esta función se muestra únicamente el producto que coincida con lo buscado por el usuario.
const mostrarProductos = () => {
  let filtro = document.getElementById("inputBuscador").value.toLowerCase();
  const idResultado = productos.filter((productos) =>
    productos.id.includes(filtro)
  );
  productos.forEach((element) => {
    switch (idResultado.length) {
      case 1:
        if (element.id !== idResultado[0].id) {
          const prodSelecc = document.getElementById(
            "product-id-" + element.id
          );
          prodSelecc.style.display = "none";
        } else {
          prodExito = document.getElementById("product-id-" + element.id);
          prodExito.style.display = "block";
        }
        break;
      case 2:
        if (
          element.id !== idResultado[0].id &&
          element.id !== idResultado[1].id
        ) {
          const prodSelecc = document.getElementById(
            "product-id-" + element.id
          );
          prodSelecc.style.display = "none";
        } else {
          prodExito = document.getElementById("product-id-" + element.id);
          prodExito.style.display = "block";
        }
        break;
    }
  });
};

let buscarProd = document.getElementById("buscarProductos");
buscarProd.addEventListener("click", filtrarProductos);

// ! Cambiar imagen al posar el mouse encima de cada imagen de producto

window.onload = function () {
  productos.forEach((element) => {
    let imagen = document.getElementById("img-" + element.id);
    if (imagen) {
      imagen.addEventListener("mouseover", cambiarImagen);
      imagen.addEventListener("mouseout", imagenIniciar);
    }
    function cambiarImagen() {
      this.setAttribute("src", element.imagenOver);
    }
    function imagenIniciar() {
      this.setAttribute("src", element.imagen);
    }
  });
};

// ! Adicionar la tecla Enter como click del botón "Buscar"

let botonBuscar = document.getElementById("buscarProductos");
let inputBuscar = document.getElementById("inputBuscador");

function clickBuscar() {
  if (event.key === "Enter") {
    event.preventDefault();
    botonBuscar.click();
  }
}
inputBuscar.addEventListener("keypress", clickBuscar);

// ! Limpiar campo de input una vez realizada la búsqueda

function limpiarCampo() {
  inputBuscar.value = "";
}
botonBuscar.addEventListener("click", limpiarCampo);
