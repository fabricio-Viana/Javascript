function soma(){
    let soma = 0
    for (i in arguments){
        soma += arguments[i]
    }
    return console.log(soma)

}

soma(3)
soma(3.3,3.3,5.5)
soma(2,2," basico")
soma("a" ,"b" ,"c")