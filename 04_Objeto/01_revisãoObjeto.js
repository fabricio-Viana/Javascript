// coleção dinamica de  pares chave/valor

//--------------------------------------------------------

// instaciando um objeto vazio e adicionamos e retiramos os atributos 
const produto = new Object

produto.nome = 'cadeira'
produto ['marca do produto'] = 'generica'
produto.preco = 220 

console.log(produto)

delete produto.nome
delete produto['marca do produto']

console.log(produto)

//--------------------------------------------------------

// criando um objto 

const carro = {

    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'raul',
        idade: 56,
        endereco: {
            lougradoura: 'rua abc',
            nuemro: 8,
        },

    },

    condutores:[{
        nome:'junior'
        ,idade:19
    } , {
        nome:'Ana',
        idade:42},],

        calcularValorSeguro: function(){
           //...
        }
}

carro.proprietario.endereco.nuemro = 1000

console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro

console.log(carro)
console.log(carro.condutores)

// console.log(carro.portaMalas.tamanho) erro pois não da para acessar algo dentro de algo que não existe
