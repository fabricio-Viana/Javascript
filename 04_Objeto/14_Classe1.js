class lancamento{

    constructor(nome ='generico', valor =0){
        this.nome = nome
        this.valor = valor
    }

}

class cicloFinanceiro{

    constructor(mes,ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lançamentos){
        lançamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l=>{
            valorConsolidado += l.valor
        })

        return valorConsolidado
    }

    

}

const salario = new lancamento('salario', 20000)
const contaLuz = new lancamento("luz",-200)

const contas = new cicloFinanceiro(6,2024)
contas.addLancamentos(salario,contaLuz)

console.log(contas.sumario())

