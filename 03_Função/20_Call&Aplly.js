function getPreco(imposto = 0,moeda= 'R$'){
    return `${moeda} ${this.preco *(1- this.desc) * (1-imposto)} `

}

const produto = {
    nome: 'notebook',
    preco: 3.500,
    desc: 0.15,
    getPreco
}

global.preco =20
global.desc = 0.5
console.log(getPreco())
console.log(produto.getPreco())


const carro = {preco:50000,desc:0.20}
const bicicleta = {preco:2000,desc:0.15} 

console.log(getPreco.apply(carro))
console.log(getPreco.call(bicicleta))

console.log(getPreco.call(carro,0.15,"$"))
console.log(getPreco.apply(carro, [0.10,'#']))
