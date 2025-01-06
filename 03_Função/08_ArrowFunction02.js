function Pessoa(){
    this.idade = 0 

    setInterval(()=>{
         this.idade++
         console.log(self.idade) // this mentem se mantem na função pessoa e não varia 
    }, 1000)
} 

new Pessoa  
