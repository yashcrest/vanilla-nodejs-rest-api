const http = require('http')
const {getProducts, getProduct } = require('./controllers/productController');
const PORT =  process.env.PORT || 3000 
//creating an instance of http
const server = http.createServer((req, res) => {

    //condtion to check what endpoint 
    if(req.url === '/api/products' && req.method === "GET") {
        getProducts(req, res);
    } else if (req.url.match(/\/api\/products\/([0-9]+)/) && req.method === 'GET') {
        const id = req.url.split('/')[2]
        getProduct(req,res,id)

    }
    
    else {
        res.writeHead(404, {'Content-Type' : 'application/json'})
        res.end(JSON.stringify({message : 'Route not found'}));
    }
})



server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));