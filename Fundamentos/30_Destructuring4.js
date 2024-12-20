function rand ([min = 0,max = 1000]){
    if(max > min)   [max , min] = [min,max]
    const valor = Math.random() * (max-min) + max
    return Math.floor(valor)
}

console.log(rand([50,40]))