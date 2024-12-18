console.log(Math.ceil(7.8));

let l = {}

l.nome = 'bola'

console.log(l.nome)

function obj(nome){
    this.nome = nome;
}

const obj2 = new obj('celular')
const obj3 = new obj('PC')
console.log(obj2.nome)
console.log(obj3.nome)