const fs = require('fs')

// sincrono
const caminho = '/home/fabricio/Documentos/JavaScript/06_Node/09_arquivo.json'
const conteudo = fs.readFileSync(caminho, 'utf-8')

console.log(conteudo)

//assincrono

fs.readFile(caminho,'utf-8',(erro , conteudo)=>{
    const config  = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.password}`)

})
// forma mais simples
const config = require('./09_arquivo.json')
console.log(`${config.db.host}:${config.db.password}`)

// aquivos de ler pasta
fs.readdir('/home/fabricio/Documentos/JavaScript/06_Node', (err ,arquivos)=>{
    console.log('conteudos da pasta')
    console.log(arquivos)

})

//__dirname é uma constate que representa o caminho atual


