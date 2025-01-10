Object.prototype.atributo0 = 'Z' // não faça isto
 
 const avo = { atributo1: 'A'}

 const pai = {  __proto__ : avo,  atributo2: 'B'}

 const filho = {__proto__: pai,  atributo3: 'C'} 

 console.log(filho.atributo0, filho.atributo1, filho.atributo2,filho.atributo3)


 const carro = {
    velAtual:0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual+delta <= this.velMax){
            this.velAtual += delta
        }
        else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}KM/h de ${this.velMax}KM/h`
    }
 }

 const ferrari = {
    modelo:'F40',
    velMax: 324, //shodowing sonbreamento
    __proto__: carro
 }
 

console.log(ferrari.status())
ferrari.acelerarMais(50)
console.log(ferrari.status())

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}:${super.status()}`
    }
}

Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())