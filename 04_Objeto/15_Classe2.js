class avo{
    constructor(sobrenome){
        this.sobrenome =sobrenome
    }
}

class  pai extends avo{
    constructor(sobrenome,profissao = 'professor'){
        super(sobrenome)
        this.profissao = profissao
    }
}

class filho extends pai{
    constructor(){
        super('Viana',"progrador")
        
    }
}

const pessoa = new filho()
console.log(pessoa)