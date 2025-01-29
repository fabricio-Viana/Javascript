const range = (n,x ,p)=>{

    numeros = []

    if(n != undefined && x == undefined && p == undefined){
        for(let i = 0 ; i <= n ; i++){
        numeros.push(i)
        }
    }  

    if(n != undefined && x != undefined && x > n && p == undefined){
        for(let i = n ; i <= x ; i++){
                numeros.push(i)
            }
    } 

    if(n != undefined && x != undefined && x > n && p != undefined){
        for(let i = n ; i <= x ; i = i + p){
                numeros.push(i)
            }
    } 

    if(n != undefined && x != undefined && x < n && p == undefined){
        for(let i = n ; x < i ; i = i - 1){
            numeros.push(i)
            }
    } 

    if(n != undefined && x != undefined && p < n && p != undefined){
        for(let i = n ; p <= i ; i = i - p){
            numeros.push(i)
            }
    } 


    console.log(numeros)
    
}


range(8,-3,4)


