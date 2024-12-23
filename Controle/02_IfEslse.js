function ImprimeResultado(nota){
        if(nota > 6){
            console.log('Aprovado')
        }
        else{
            console.log('Reprovado')
        }
}
ImprimeResultado(4)
ImprimeResultado(10)
console.log('--------------------')

// metodo com ternario

let nota = 8
let result = nota > 6 ? 'Aprovado':'Reprovado'
    
console.log(result)
