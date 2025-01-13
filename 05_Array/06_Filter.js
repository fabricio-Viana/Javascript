const produtos = [

    {nome: 'notebook', preco: 4000, fragil: true},
    {nome: 'ipad', preco: 2500, fragil: true},
    {nome: 'copo de virdro', preco: 10, fragil: true},
    {nome: 'copo de plastico', preco: 6.50, fragil: false},

]

const caro = produtos => produtos.preco >= 500

console.log(produtos.filter(caro))

const fragil = produto => produto.fragil

console.log(produtos.filter(fragil))