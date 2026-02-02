import Product from "../models/product.model.js";
export const createProduct = async (req, res) => {
    try {
        const productData = req.body;
        if (req.file) {
            productData.imageUrl = req.file.path;
        }
        const product = new Product(productData);
        await product.save();
        res.status(201).json(product);
    }
    catch (error) {
        res.status(500).json({ message: "Error creating product", error });
    }
};
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find()
            .populate("category")
            .sort({ createdAt: -1 });
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching products", error });
    }
};
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).populate("category");
        if (!product) {
            res.status(400).json({ message: "Product not found" });
            return;
        }
        res.status(200).json(product);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching product", error });
    }
};
export const updateProduct = async (req, res) => {
    try {
        const productData = req.body;
        if (req.file) {
            productData.imageUrl = req.file.path;
        }
        const product = await Product.findByIdAndUpdate(req.params.id, productData, { new: true });
        if (!product) {
            res.status(400).json({ message: "Product not found" });
            return;
        }
        res.status(200).json(product);
    }
    catch (error) {
        res.status(500).json({ message: "Error updating product", error });
    }
};
export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            res.status(400).json({ message: "Product not found" });
            return;
        }
        res.status(200).json({ message: "Product deleted succesfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Error deleting product", error });
    }
};
