const Product = require('../models/produtModel');

// @desc Gets all products
// @route GET /api/product/:id
async function getProducts(req, res) {
    try {
        const products = await Product.findAll()
        res.writeHead(200, {'Content-Type' : 'application/json'})
        res.end(JSON.stringify(products));
    }
    catch(error){
        console.log(error);
    }
}

// @desc Gets single product
// @route GET /api/product/:id
async function getProduct(req, res, id) {
    try {
        const product = await Product.findById(id)
        if(!product){
            res.writeHead(404, {'Content-Type' : 'application/json'})
            res.end(JSON.stringify({message: 'Product not found'}));
        } else {
            res.writeHead(200, {'Content-Type' : 'application/json'})
            res.end(JSON.stringify(product));
        }
        
    }
    catch(error){
        console.log(error);
    }
}

module.exports = {
    getProducts,
    getProduct
}