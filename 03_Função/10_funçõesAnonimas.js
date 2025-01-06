const soma = function(x,y){
    return x+y
}

const imprimeResultado = function(a,b,operação = soma){

    console.log(operação(a,b))
    
}

imprimeResultado(4,5)
imprimeResultado(5,5,function(x,y){return x*y})
imprimeResultado(5,5, (x,y)=> x-y)


const pessoa = {
    falar (){
        console.log("Hello World")
    }
}

pessoa.falar()