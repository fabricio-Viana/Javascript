const bomDia = function(){
    console.log('Bom dia ')
}

const BoaTarde =()=>{
    console.log('Boa Tarde')
}


function executarQualquerCoisa(fn){
    fn()
}

executarQualquerCoisa(bomDia)
executarQualquerCoisa(BoaTarde)
executarQualquerCoisa(()=>{
    console.log('BOA NOITE')
})