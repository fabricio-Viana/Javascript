class pessoa{
    constructor(nome) {
        this.nome = nome
    }

    falar(){
        console.log(`meu nome é ${this.nome}`)
    }
}

let p = new pessoa('Fabricio')
p.falar()

const criarPessoa = nome =>{
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Fabricio')

p2.falar()