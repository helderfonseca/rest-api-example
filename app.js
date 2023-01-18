const http = require('http')
const { getProducts, getProduct, createProduct } = require('./controllers/productController.js')
const PORT = process.env.PORT || 5000

 
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end('/home')
  } else if (req.url === 'api/products' && req.method === 'GET') {
    getProducts(req, res)
  } else if (req.url.match(/\/api\/products\/([0-9]+)/) && req.method === 'GET') {
    const id = req.url.split('/')[3]
    console.log(id)
    getProduct(req, res, id)
  } else if (req.url === 'api/products' && req.method == 'POST') {
    createProduct(req, res)
  } else {
    res.writeHead(404, {'Content-Type': 'application/json'})
    res.end(JSON.stringify({ message: 'Route not Found!' }))
  }
})  

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))