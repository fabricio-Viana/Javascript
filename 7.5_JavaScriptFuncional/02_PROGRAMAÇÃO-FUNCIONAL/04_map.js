const numbers = [1,2,3,4,5,6]

const newNunbers = numbers.map(a => a*2)

console.log(newNunbers)

numbers.map((a,b)=> console.log(`${b}) ${a+=a}`))

const alunos =[
    {nome: 'Fabricio', nota: 8.5},
    {nome: 'Melissa', nota:7.8},
    {nome: 'Gaby', nota:5.8},
    {nome: 'Marcio', nota:9.8},
    {nome: 'Ackila', nota:0.5}

]

const apenasNotas = a => `nota = ${a.nota}`
const lunos2 = alunos.map(apenasNotas)

console.log(lunos2)

