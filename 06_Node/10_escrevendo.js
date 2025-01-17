const fs  = require('fs')

let produto = {
    nome:'Fabricio',
    trabalho: {
        cargo:"programador",
        senioriadade: "junior",
        tempoDeAprendizado: 2 +" anos"

    }
}

fs.writeFile('/home/fabricio/Documentos/JavaScript/06_Node/10_arquivo.json',JSON.stringify(produto), err => {
    console.log(err|| 'arquivo salvo')
})

fs.readFile('/home/fabricio/Documentos/JavaScript/06_Node/10_arquivo.json','utf-8',(err, conteudo)=>{
    console.log(JSON.parse(conteudo))
})

