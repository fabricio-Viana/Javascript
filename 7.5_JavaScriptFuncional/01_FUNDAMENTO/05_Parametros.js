function logParans(a,b,c){
    console.log(a,b,c)
}


logParans(1,2,3)
logParans(1,2,3,4,5)
logParans()
logParans(1)


function parans (a=0,b=0,c=0){
    console.log(a,b,c)
}

parans()


function parray(numeros){
     for(let i of numeros){
        console.log(i)
     }
}

parray([1,2,3,4,5,6,7,8,9,10])


function sumAll(...nums){
    let total = 0
    for(let i of nums){
        total += i
    }
    return total
}

console.log(sumAll(1,2,3,4,5))