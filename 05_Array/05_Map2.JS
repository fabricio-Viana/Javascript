const carrinho =[ 
    '{"nome": "borracha", "preco": "2.50"}',
    '{"nome": "lapiz", "preco": "0.90"}',
    '{"nome": "estojo", "preco": "10.50"}',
    '{"nome": "caneta", "preco": "1.25"}'
]

const obj = json => JSON.parse(json)
const apreco = produto => produto.preco

const reultado = carrinho.map(obj).map(apreco)

console.log(reultado)