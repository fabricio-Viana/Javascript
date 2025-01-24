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


const obterAlunos = async ()=>{
     const ta = await getTurma('A')
     const tb = await getTurma('B')
     const tc = await getTurma('C')
    return [].concat(ta,tb,tc)
}
obterAlunos()
        .then(nomes => nomes.map(nomes=>nomes.nome))
        .then(x => console.log(x))