const http = require('http')

const getTurma = turma => {
    const url = `http://files.cod3r.com.br/curso-js/turma${turma}.json`
    return new Promise((resolve, rejetc) => {

        http.get(url, resp => {

            let resultado = ""

            resp.on('data', data => {
                resultado += data
            })


            resp.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                }
                catch (e) {
                    rejetc(e)
                }

            })
        })
    })

}

let nomes = []

Promise.all([getTurma('A'),getTurma('B'),getTurma('C')])
           .then(turmas => [].concat(...turmas))
           .then(alunos=> alunos.map(aluno => aluno.nome))
           .then(nome => console.log(nome))
           .catch(e=> console.log(e))

