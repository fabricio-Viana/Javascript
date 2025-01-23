for(let letra of "FABRICIO AMA MELISSA"){
    console.log(letra)
}

const nome = ['fabrico'.toUpperCase(), 'ama'.toUpperCase(),'melissa'.toUpperCase()]

console.log('----------for in percorre indices ----------')

for(let i in nome){
    console.log(i)
}
console.log('----------for of percorre valores ----------')

for(let i of nome){
    console.log(i)
}

const n = new Set(['fabrico'.toUpperCase(), 'ama'.toUpperCase(),'melissa'.toUpperCase()])

for(let i of n){
    console.log(i)
}