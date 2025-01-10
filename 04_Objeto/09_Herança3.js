const pai = { nome:'Pedro', corCabelo:'preto'}

const filha1 = Object.create(pai) // criou um objeto novo tendo como parametro o objeto pai

filha1.nome ='Ana'
console.log(filha1)
for(a in filha1){console.log(a)}

console.log(filha1.corCabelo)

const filha2 = Object.create(pai,{
    nome:{ value: 'Bea', writable:false, enumerable: true}
})
console.log(filha2.nome)
filha2.nome = "Carla"
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2){
     filha2.hasOwnProperty(key) ?
     console.log(key) :console.log(`por herança: ${key}`)
}