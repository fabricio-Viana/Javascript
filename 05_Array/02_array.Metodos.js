const pilotos = ['Vettel','Alonso','Raikkonen','Massa']

pilotos.pop() // remove o ultimo elemento

console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o pirmeiro elemento
console.log(pilotos)

pilotos.unshift("Hamilton") // adiciona no primeiro elemento
console.log(pilotos)

pilotos.splice(3,0,'Bottas','Massa')
console.log(pilotos)

const pilotos2 = pilotos.slice(4) // novo array

console.log(pilotos2)