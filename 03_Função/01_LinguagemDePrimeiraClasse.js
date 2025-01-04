// função de forma literal

function funk(){
    console.log('tchu tcha tchuu tcha');
}

// função armazenada como veriavel

const fun2 = function () {}

// função em array

const array = [function () {return "LEGAL"}, 10 , pc = {}]

console.log(array[0]())

// dentro de um objero

const car = {
    nome: "gtr-R34",
    cor: function(a){
        return a
    },
}

console.log(car.cor("Vermelho"))

// passando função como parametro de uma função

function f1(f2){

    f2()
}

f1(function (){
    console.log('legal')
})

// Retornando uma função dentro de outra função

function soma(a,b){

    return function (c){
        return function(d){
            return function(e){
                return function (f){

                    console.log(a+b+c+d+e+f)
                }
            }
        }
    }

}

soma(10,10)(10)(10)(10)(10)