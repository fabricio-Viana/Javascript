//forma literal de cria um objeto

const obj = {};

(()=> console.log(obj))()


// metodo construtor

const obj2 = new Object;

(function autodec(){return console.log(obj2)})()
 
// funções contrutoras 

function produto(nome, preco , desc){
    this.nome = nome

    this.getPrcoComDesconto = ()=>{
        return preco * (1-desc)
    }
}

    const p1 = new produto('caneta',7.99,0.15)
    const p2 = new produto('Notbook',2998.99,0.25)

    console.log(p1.getPrcoComDesconto(),p2.getPrcoComDesconto())
    
 
// funções Factory

    function prod(nome, preco){
        return {
            nome,
            preco, 
        }
    }

    const f1 = prod('PC',2500)
    const f2 = prod('Calular',1800)

    console.log(f1.nome,': R$',f1.preco)
    console.log(f2.nome,': R$',f2.preco)


// OBJECT.CREATE

const filha = Object.create(null)

filha.nome ='Ana'
console.log(filha)

// JSON.PARSE

 const fromJson =  JSON.parse('{"info":"Sou um JSON"}')

 console.log(fromJson.info)