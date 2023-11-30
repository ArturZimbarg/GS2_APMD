
function calcularEstatisticas(){
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    const pendentes = tarefas.filter(t => t.concluida == false)
    const qtdePendente = pendentes.length
    document.querySelector("#qtde-pendente").innerHTML = qtdePendente
    
    const concluidas = tarefas.filter(t => t.concluida == true)
    const qtdeConcluida = concluidas.length
    document.querySelector("#qtde-concluida").innerHTML = qtdeConcluida
    
    const totalPontos = tarefas.reduce((total, t) => total += +t.dias, 0)
    document.querySelector("#total-dias").innerHTML = totalPontos
    
    const meusPontos = concluidas.reduce((total, t) => total += +t.dias, 0)
    document.querySelector("#meus-dias").innerHTML = meusPontos


}

calcularEstatisticas()
