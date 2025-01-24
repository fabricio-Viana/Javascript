function  seyHello(){
    console.log('Hello World')
}

seyHello()

function  seyHello2(nome){
    console.log(`Olá ${nome}`)
}

let nome = 'Fabricio'
seyHello2(nome)

function seyHello3(nome){
    let nomeText = nome
    return `Olá ${nomeText} meu querido amigo`
}

 const ola = seyHello3('Fabricio')

 console.log(ola)