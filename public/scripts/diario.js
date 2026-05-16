const localStorageKey = 'to-do-list';

mostrarTarefaFixa()

function novaTarefaFixa(){
    let tarefa = inpNameToDo.value
    if (!tarefa){
        alert("Digite algo")
    } else {
        let valores = JSON.parse(localStorage.getItem(localStorageKey) || "[]")

        valores.push({
            nome:tarefa
        })
        localStorage.setItem(localStorageKey, JSON.stringify(valores))
        mostrarTarefaFixa()
    }

    inpNameToDo.value = ""

    
}

function mostrarTarefaFixa(){
    let valores = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let lista = document.getElementById('to-do-list')

    lista.innerHTML = ''

    for (let i = 0; i < valores.length; i++){
        lista.innerHTML += `<li>  <input type="checkbox" onchange="excluirTarefaFixa('${valores[i]['nome']}')"> </input> ${valores[i]['nome']}  </li>`
    }

}

function excluirTarefaFixa(item){
    let valores = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let index = valores.findIndex(x => x.nome == item)

    valores.splice(index, 1)

    localStorage.setItem(localStorageKey, JSON.stringify(valores))

    mostrarTarefaFixa()

}


