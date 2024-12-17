let prod1 = {}

prod1.nome = "maquina de lavar"
prod1.preco = 2500
prod1['deconto legal'] = 200 // não criar atributos com espaço

console.log(prod1);

let produto2 = {
    nome: 'camisa polo',
    preco: 49.90,
    obj:{
        blabla: 2 // podemos ter um objeto dentro de um objeto
    }
}
console.log(produto2.obj)

