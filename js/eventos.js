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
    console.table(resultado);
  }
}

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
