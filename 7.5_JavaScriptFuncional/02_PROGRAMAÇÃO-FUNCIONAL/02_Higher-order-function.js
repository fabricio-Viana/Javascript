 function run(fn){
    fn()
    
    
 }

function ola(){
    console.log('Ola Mundo')
}
 run(ola)

 run(()=> console.log('ola mundo'))

 const result = run(Math.random)

 console.log(result) 