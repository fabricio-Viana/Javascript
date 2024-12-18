var numero =1 // escopo global

{
    let numero =2
    console.log("dentro =", numero) // escopo global
}

console.log('fora =',numero)