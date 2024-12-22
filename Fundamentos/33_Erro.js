function tratarErro(erro){
        //throw new Error("erro")
        //throw 10
        //throw true
        //throw "mensagem"
        throw {
            nome: erro.name,
            msg: erro.message,
            date: new Date
        }
}

function ImprimirNomeGritado(obj){
    try{
    console.log(obj.nome.toUpperCase() + '!!!')
    } catch (e){
        tratarErro();
    } finally{
        console.log("Deu erro mano")
    }
}
const obj = {nome: "Fabricio"}
ImprimirNomeGritado(obj) 