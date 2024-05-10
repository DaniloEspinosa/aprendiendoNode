const http = require('node:http')

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type" : "text/plain"})
    res.end(`Es viernes, que bien!!`)
})

// El primer argumento es el numero de puerto, si ponemos 0 node se encarga de elegir uno
server.listen(0, () => {
    console.log(`Servidor corriendo en http://localhost:${server.address().port}`)
})
