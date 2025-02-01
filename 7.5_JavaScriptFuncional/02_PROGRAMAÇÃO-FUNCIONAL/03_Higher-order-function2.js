function finalPrice(taxa){
    return (price)=>{
        return price * (1+taxa)
    }
}

const BrFinalPrice = finalPrice(1) 

console.log(BrFinalPrice(25.1))
console.log(BrFinalPrice(21.7))
console.log(BrFinalPrice(107.9))
