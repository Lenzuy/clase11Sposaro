// Buscar productos en el Array 'productos', definido en el archivo array.js

function buscarProducto() {
  //debugger;
  let productoBuscado = prompt(
    "Ingrese que producto desea buscar: "
  ).toLowerCase();
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
    let buscarDeNuevo = confirm("Desea buscar otro producto");
    if (buscarDeNuevo === true) {
      buscarProducto();
    }
  } else {
    console.log(resultado);
  }
}

// Filtrar productos en el Array 'productos' según lo ingresado en el prompt.
function filtrarProductos() {
  let filtro = prompt(
    "Ingrese como desea filtrar los productos: "
  ).toLocaleLowerCase();
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
    console.log("Listado según su filtro", "'", filtro, "'");
    console.table(resultado);
  }
}

buscarProducto();
filtrarProductos();
