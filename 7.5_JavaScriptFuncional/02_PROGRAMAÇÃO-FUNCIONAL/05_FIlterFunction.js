const notas = [
    {nome: 'CLEITON', nota: 1.5},
    {nome:'JUANZIN' ,nota:2.6},
    {nome:'MARCUS' ,nota:3.8},
    {nome:'JULIA' ,nota:4.3},
    {nome:'MAIKU' ,nota:5.9},
    {nome:'MARIA' ,nota:6.8},
    {nome:'TATI' ,nota:7.2},
    {nome:'BARUCE' ,nota:8.0},
    {nome:'JARED' ,nota:9.6},
    {nome:'DIMY' ,nota:10}
            ]

const aprovados = notas.filter(e => e.nota >= 6)

console.log(`Alunos aprovado`)
aprovados.forEach(e=> console.log(e.nome))
console.log(`----------------`)
const reprovados = notas.filter(e => e.nota <= 5)

console.log(`Alunos reprovados`)
reprovados.forEach(e=> console.log(e.nome))
console.log(`----------------`)
const recuperacao = notas.filter(e => e.nota >= 5.5 && e.nota <= 5.9)

console.log(`Alunos dea recuparação`)
recuperacao.forEach(e=> console.log(e.nome))