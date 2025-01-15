const modulaA = require("../../01_ModulosA")

console.log(modulaA.ainda)

const saudacao = require('saudacao')

console.log(saudacao.olaMundo())

const http = require('http')

/*http.createServer((req,res)=>{
    res.write("Bom dia")
    res.end()
}).listen(8080)**/

const deaMaisDez = require("./PastaC")

console.log(deaMaisDez.soma)