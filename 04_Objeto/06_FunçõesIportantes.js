const pessoa ={
    nome: 'Rebeca',
    idade: 2,
    peso: 13, 
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave,valor])=>{
    console.log(`${chave} ${valor} `)
})

Object.defineProperty(pessoa, "data",{
    enumerable:true,
    writable: false,
    value: "12/12/2012"
})

pessoa.data = "25-08-2025"

console.log(pessoa.data)
console.log(pessoa)

const desc = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}

Object.assign(desc,o1,o2)

console.log(desc)

Object.freeze(desc)

desc.a =1939
desc.b ='dnsojno'
desc.c = [12,34,2,53,9]

console.log(desc)

