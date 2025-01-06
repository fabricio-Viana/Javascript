function carro(velocidadeMaxima = 200, delta = 5){
   
    // atributo privado
    let velociadeATual=0;

    // metodo publico
    this.acelerar = function (){
        if(velociadeATual + delta <= 200){
            velociadeATual += delta;
        }else{
            velociadeATual = velocidadeMaxima;
        }
    }

    this.getVelocidadeAtul= function (){
        return velociadeATual;
    }
}

let car = new carro;

console.log(car.getVelocidadeAtul())
car.acelerar();
 let acer = [1,2,3,4,5,6,7,8,9,]
 for(i in acer){
    car.acelerar() 
 }
console.log(car.getVelocidadeAtul())

let ferrari = new carro(380,50)

ferrari.acelerar();
console.log(ferrari.getVelocidadeAtul())

let acerFerrarimax = [1,2,3,4,5,6,7,8,9,]
 for(i in acerFerrarimax){
    ferrari.acelerar() 
 }

 console.log(ferrari.getVelocidadeAtul())


