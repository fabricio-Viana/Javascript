const numb = [1,2,3,4,5]

const result = numb.map((e)=>{
    return e * 2
})

console.log(result)

const soma10 = e => e+10
const triplo = e => e*3
const real = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`


resultado = numb.map(soma10).map(triplo).map(real)
console.log(resultado)