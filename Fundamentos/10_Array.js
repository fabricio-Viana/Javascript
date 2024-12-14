const nomes = ['fabricio', 'melissa', 'aurora', 'levi']

console.log(nomes[3])

nomes[3] ='aurora'
nomes[2] = 'levi'

const idades = [22,20,10,7]

console.log(idades)

idades[4] = 40

console.log(idades)

console.log(idades.length)

idades.push(null, 345, 'fabrici', false, true )

console.log(idades.length)
console.log(idades)

console.log(idades.pop())
delete idades[2]
console.log(idades)