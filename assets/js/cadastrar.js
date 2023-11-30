document.querySelector("#botao-cadastrar").addEventListener("click", () => {
    
    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

    const tarefa = {
        id: Date.now(),
        titulo: document.querySelector("#titulo").value,
        descricao: document.querySelector("#descricao").value,
        dias: document.querySelector("#dias").value,
        concluida: false
    }

    tarefas.push(tarefa)

    localStorage.setItem("tarefas", JSON.stringify( tarefas ))

    window.location.href = "./index.html"
    calcularEstatisticas()
})

