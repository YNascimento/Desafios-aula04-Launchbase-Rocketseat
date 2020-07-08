const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')

const server = express()


//puxa arquivos css e js para pags
server.use(express.static('public'))
server.use(routes)

server.set("view engine","njk")

//views = pasta ou caminho, opntions = usar o express como server
nunjucks.configure("views",{
    express:server,
    autoescape:false, //permite que cod html dentro de texto seja interpretado
    noCache: true //não guarda versões dos dados então sempre puxa do servidor
})

//ativa servidor para ouvir
server.listen(5000,function(){
    console.log('server running')
})