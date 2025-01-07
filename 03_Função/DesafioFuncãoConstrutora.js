function pessoa(nome, idade){

    this.nome = nome
    this.idade = idade

    this.falar = function() { console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`)}


}
const p1 = new pessoa('FABRICIO',23)

p1.falar()