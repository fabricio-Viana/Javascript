const ferrari ={
    modelo: "F40",
    velMax: 324
}

const Volvo  = {
    modelo: "V40",
    velMax: 200
} 


console.log(ferrari.__proto__)
console.log(ferrari.__proto__=== Object.prototype)  
console.log(Volvo.__proto__=== Object.prototype)  

console.log(Object.prototype.__proto__)


function meuobj(){}

console.log(typeof Object, typeof meuobj)
console.log(Object.prototype,meuobj.prototype)