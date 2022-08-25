// Filtrar productos en el Array 'productos' según lo ingresado en el prompt.
function filtrarProductos() {
  //  debugger;
  let filtro = document.getElementById("inputBuscador").value.toLowerCase();
  const resultado = productos.filter((productos) =>
    productos.producto.includes(filtro)
  );
  if (resultado.length === 0) {
    console.warn(
      "No se puede filtrar según:",
      "'",
      filtro,
      "'",
      "pruebe ingresando otro filtro"
    );
  } else {
    console.table(resultado);
  }
}

let buscarProd = document.getElementById("buscarProductos");
buscarProd.addEventListener("click", filtrarProductos);
