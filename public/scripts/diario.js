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

const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(function time(){
    let dateHoje = new Date();
    let hr = dateHoje.getHours()
    let min = dateHoje.getMinutes()
    let sec = dateHoje.getSeconds()

    if (hr < 10) {hr = '0' + hr}
    if (min < 10) {min = '0' + min}
    if (sec < 10) {sec = '0' + sec}

    horas.innerHTML = hr
    minutos.innerHTML = min
    segundos.innerHTML = sec

})

