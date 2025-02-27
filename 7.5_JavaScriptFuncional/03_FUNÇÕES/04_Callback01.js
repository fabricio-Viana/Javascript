 const exec = (fn, a ,b)=>{
    fn(a,b)
 }
 
 const somaNoTerminal = (x,y)=> console.log(x+y)

 const subtraiNoTerminal = (x,y)=> console.log(x-y)

 exec(somaNoTerminal, 56,38)
 exec(subtraiNoTerminal, 182,27)
n = 1
 const Callback = ()=>{
    console.log(`executando pela ${n}ª vez`)
     n++
 }
setInterval(Callback, 1000)