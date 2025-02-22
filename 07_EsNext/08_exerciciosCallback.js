const http = require('http')

const getTurma = (turma, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${turma}.json`

    http.get(url, resp => {

        let resultado = ""

        resp.on('data', data => {
            resultado += data
        })


        resp.on('end', () => {
            callback(JSON.parse(resultado))
        })
    })
}

let nomes = []

getTurma("A", alunos => {
    nomes = nomes.concat(alunos.map(a => `A:${a.nome}`))
    console.log(nomes)

    getTurma("B", alunos => {
        nomes = nomes.concat(alunos.map(a => `B:${a.nome}`))
        console.log(nomes)
    })

        getTurma("C", alunos => {
            nomes = nomes.concat(alunos.map(a => `C:${a.nome}`))
            console.log(nomes)
        })
})