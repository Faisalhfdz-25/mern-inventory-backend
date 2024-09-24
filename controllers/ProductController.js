import Product from "../models/ProductModel.js";

export const getProducts = async (req, res) => {
  try {
    const response = await Product.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getProductById = async (req, res) => {
  try {
    const response = await Product.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createProduct = async (req, res) => {
  const product = req.body;
  try {
    await Product.create(product);
    res.status(201).json({ msg: "Product Created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateProduct = async (req, res) => {
  const product = req.body;
  const id = req.params.id;
  try {
    await Product.update(product, {
      where: { id: id },
    });
    res.status(200).json({ msg: "Product Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    await Product.destroy({
      where: { id: id },
    });
    res.status(200).json({ msg: "Product Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
