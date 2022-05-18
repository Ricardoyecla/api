"use static";

const res = require("express/lib/response");
const Product = require("../models/product");

// Devuelve un producto según su id
function getProduct(req, res) {
  let productId = req.params.productId;

  Product.findById(productId, (err, product) => {
    if (err)
      return res
        .status(500)
        .send({ message: `Error al realizar la petición ${err}` });
    if (!product) return res.status(404).send({ message:'No existe el producto' });

    res.send(200, { product });
  });
}
// Devuelve todos los productos
function getProducts(req, res) {
  Product.find({}, (err, products) => {
    if (err)
      return res
        .status(500)
        .send({ message: `error al realizara la patiión de productos ` });
    if (!products)
      return res
        .status(404)
        .send({ message: "No hay productos en la base de datos" });

    res.send(200, { products });
  });
}
// Guarda un producto nuevo
function saveProduct(req, res) {
  console.log("POST /api/product");
  console.log(req.body);

  let product = new Product();
  product.name = req.body.name;
  product.picture = req.body.picture;
  product.price = req.body.price;
  product.category = req.body.category;
  product.description = req.body.description;

  product.save((err, productoStrored) => {
    if (err)
      res
        .status(500)
        .send({ message: `Error al salvar en la base de datos: ${err}` });

    res.status(200).send({ product: productoStrored });
  });
}

// Actuliza un producto
function updateProduct(req, res) {
  let productId = req.params.productId;
  let update = req.body;

  Product.findByIdAndUpdate(productId, update, (err, productUpdate) => {
    if (err)
      res
        .status(500)
        .send({ message: `Error al actualizar el producto ${err}` });

    res.status(200).send({ product: productUpdate });
  });
}

// Borra un producto
function deleteProdroduct(req, res) {
  let productId = req.params.productId;

  Product.findById(productId, (err, product) => {
    if (err)
      res.status(500).send({ message: `Error al borrar el producto: ${err}` });

    product.remove((err) => {
      if (err)
        res
          .status(500)
          .send({ message: `Error al borrr el prodducto: ${err}` });
      res.status(200).send({ message: "El producto ha sido eliminado" });
    });
  });
}

module.exports = {
  getProduct,
  getProducts,
  saveProduct,
  updateProduct,
  deleteProdroduct,
};
