const notas = [7.5, 8.4, 5.5, 8.0 ,10.0]

for(let i in notas){
    console.log(`Notas = ${notas[i]}`)
}

const pessoa ={
    nome: 'Fabricio',
    Sobrenome: 'Viana',
    Profissão: 'Programador',
    falar: `Ola meu nome é Farbricio eu sou programador e sou feliz `
}

for(let i in pessoa){
    console.log(`${i} = ${pessoa[i]}`)
}