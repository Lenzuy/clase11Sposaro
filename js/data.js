// ! Class contructor de los productos.
class Producto {
  constructor(
    id,
    producto,
    nombre,
    precio,
    stock,
    descripcion,
    imagen,
    imagenOver
  ) {
    this.id = id;
    this.producto = producto;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.imagenOver = imagenOver;
  }
}

// !Se crea el Objeto con todos los productos.
const productos = [];
productos.push(
  new Producto(
    "yerbaId1",
    "yerba",
    "Yerba",
    150,
    50,
    "yerba con palos",
    "/images/yerbaConPalos.jpeg",
    "/images/yerbaConPalosOVER.jpeg"
  )
);
productos.push(
  new Producto(
    "yerbaId2",
    "yerba",
    "Yerba",
    180,
    50,
    "yerba sin palos",
    "/images/yerbaSinPalos.jpg",
    "/images/yerbaSinPalosOVER.jpg"
  )
);
productos.push(
  new Producto(
    "mateId",
    "mate",
    "Mate",
    240,
    100,
    "mate calabaza",
    "/images/mate.jpg",
    "/images/mateCalabazaOVER.jpg"
  )
);
productos.push(
  new Producto(
    "bombillaId",
    "bombilla",
    "Bombilla",
    1560,
    25,
    "bombilla de plata",
    "/images/bombilla-plata-y-oro-antigua.jpg",
    "/images/BombillaPlatayoroOVER.jpg"
  )
);
productos.push(
  new Producto(
    "cuchilloId",
    "cuchillo",
    "Cuchillo",
    4560,
    15,
    "cuchillo acero damasco",
    "/images/R0501138-5_M.jpg",
    "/images/cuchilloDamascoOVER.jpg"
  )
);
productos.push(
  new Producto(
    "termoId",
    "termo",
    "Termo",
    3000,
    30,
    "termo stanley verde",
    "/images/termoStanley.jpg",
    "/images/termoStanleyOVER.jpg"
  )
);
productos.push(
  new Producto(
    "yerberaId",
    "yerbera",
    "Yerbera",
    250,
    150,
    "yerbera",
    "/images/Yerbera-2.png",
    "/images/yerberaOVER.webp"
  )
);
productos.push(
  new Producto(
    "materaId",
    "matera",
    "Matera",
    1750,
    10,
    "matera de cuero",
    "/images/matera3.jpg",
    "/images/materaOVER.webp"
  )
);
