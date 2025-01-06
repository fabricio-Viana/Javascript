// sem callback

const notas =[7.1, 5.6, 3.5, 8,10]

let notasBaixas = []

for(let i in notas){
    if(notas[i] < 7.0){
        notasBaixas.push(notas[i])
    }

}
console.log(notasBaixas)

// com callback
notas2 = [3.8, 6, 3.0, 8, 6.0, 3, 8.6, 3.0, 8]
notasBaixas = notas2.filter(nota => nota < 7)

console.log(notasBaixas)