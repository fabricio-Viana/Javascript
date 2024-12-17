 // Função sem retorno

 function imprimaSoma(a,b){
    console.log(a+b)
 } 

 imprimaSoma(20,20)
 imprimaSoma(29, !20 || 9 )
 imprimaSoma()

 function soma(a,b=10){
   return a + b
 }

console.log(soma(2,6));
console.log(soma(3))