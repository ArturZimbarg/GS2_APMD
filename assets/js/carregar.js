window.addEventListener("load", atualizar )

function atualizar(){
    document.querySelector("#lista-tarefas").innerHTML = ""
    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    tarefas.forEach(tarefa => criarCard(tarefa))
}

function criarCard(tarefa){
    const card = document.createElement("div")
    card.classList.add("col", "s12", "m6", "l4")

    card.innerHTML = `
        <div class="card ${tarefa.concluida ? 'grey': ''}">
            <div class="card-content">
            <span class="card-title">${tarefa.titulo}</span>
            <p>${tarefa.descricao}</p>
            <span data-badge-caption="dias" class="badge blue white-text">
                ${tarefa.dias}
            </span>
            </div>
            <div class="card-action">
            <a href="#" class="btn red" onClick="apagar(${tarefa.id})">
                <i class="material-icons">delete</i>
                </a>
                <a href="#" class="btn green" onClick="concluir(${tarefa.id})">
                    <i class="material-icons">check</i>
                </a>
            </div>
        </div>
    `

    document.querySelector("#lista-tarefas").appendChild(card)

}