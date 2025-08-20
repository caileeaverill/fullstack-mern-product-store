import Product from "../models/Product.js";

export async function getAllProducts(_, res) {
    try {
        const products = await Product.find({});
        res.status(200).send(products);
    } catch (error) {
        console.error(`Error in getAllProducts controller: ${error}`);
        res.status(500).send({ message: 'Error in fetching all products' });
    }
}

export async function getProductById(req, res) {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            res.status(404).send({ message: 'Product not found' });
        }
        res.status(200).send(product);
    } catch (error) {
        console.error(`Error in getProductById controller: ${error}`);
        res.status(500).send({ message: 'Error in fetching product by id' });
    }
}

export async function createProduct(req, res) {
    try {
        const { name, price, image } = req.body;
        const product = new Product({ name, price, image });
        const newProduct = await product.save();
        res.status(201).send(newProduct);
    } catch (error) {
        console.error(`Error in createProduct controller: ${error}`);
        res.status(500).send({ message: 'Error in creating product' });
    }
}

export async function updateProduct(req, res) {
    try {
        const { name, price, image } = req.body;
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, { name, price, image }, { new: true });

        if (!updatedProduct) {
            return res.status(404).send({ message: 'Product not found' });
        }
        res.status(200).send({ message: 'Product updated successfully' });
    } catch (error) {
        console.error(`Error in updateProduct controller: ${error}`);
        res.status(500).send({ message: 'Error in updating product' });
    }
}

export async function deleteProduct(req, res) {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).send({ message: 'Product not found' });
        }
        res.status(200).send({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error(`Error in deleteProduct controller: ${error}`);
        res.status(500).send({ message: 'Error in deleting product' });
    }

}