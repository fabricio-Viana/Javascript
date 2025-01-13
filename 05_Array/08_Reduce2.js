const alunos = [

    {nome:'João',nota: 7.3 ,bolsista: false},
    {nome:'Maria',nota: 9.2 ,bolsista: true},
    {nome:'Pedro',nota: 9.8 ,bolsista: false},
    {nome:'Ana',nota: 8.7 ,bolsista: true}

]

const todossão = function(resultado,bolsista){return resultado && bolsista}
console.log(alunos.map(a => a.bolsista).reduce(todossão))

const  algumbolsistaa = function(resultado,bolsista){return resultado || bolsista}
console.log(alunos.map(a => a.bolsista).reduce(algumbolsistaa))