function aula(nome,videoID){
    this.nome = nome;
    this.videoID = videoID;
}

const aula1 = new aula('Bem vindo',123)
const aula2 = new aula('Ate breve',456)

console.log(aula1,aula2)

// simulando o new
function novo(f,...parans){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj,parans)
    return obj;

}

const aula3 = novo(aula,'Bem Vindo',123)
const aula4 = novo(aula,'Até Breve',456)

console.log(aula3,aula4)
