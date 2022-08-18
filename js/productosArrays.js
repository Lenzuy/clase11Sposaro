// Buscar productos en el Array 'productos', definido en el archivo array.js

function buscarProducto() {
  let productoBuscado = document
    .getElementById("inputBuscador")
    .value.toLowerCase();
  const resultado = productos.find(
    (productos) =>
      productos.producto === productoBuscado ||
      productos.descripcion === productoBuscado
  );
  if (resultado === undefined) {
    console.warn(
      "El producto " +
        "'" +
        productoBuscado +
        "'" +
        " no se encuentra en el listado"
    );
  } else {
    console.log(resultado);
  }
}

// Filtrar productos en el Array 'productos' según lo ingresado en el prompt.
function filtrarProductos() {
  let filtro = document.getElementById("inputBuscador").value.toLowerCase();
  const resultado = productos.filter((productos) =>
    productos.producto.includes(filtro)
  );
  if (resultado === undefined) {
    console.warn(
      "No se puede filtrar según:",
      filtro,
      "pruebe ingresando otro filtro"
    );
    filtrarProductos();
  } else {
    console.table(resultado);
  }
}
