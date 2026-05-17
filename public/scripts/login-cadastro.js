
let senhaTamanho = false
let senhaCaracter = false
let senhaMaiuscula = false
let senhaMinuscula = false

let emailPosicao = false

let senhaIgual = false

function cadConfirmaEmail(email){
  
    emailPosicao = false

    if (email.includes('@')){
        if (email.indexOf('@') < email.indexOf('.')){
            erroEmail.innerHTML = ''
            emailPosicao = true
        } 
    } 

    if (!emailPosicao){
        erroEmail.innerHTML = "Digite um email valido"
    }

}


function cadConfirmaSenha(senha){
    senhaTamanho = false
    senhaCaracter = false
    senhaMaiuscula = false
    senhaMinuscula = false
    
    let tamanho = senha.length
    
    // TEM CARACTER ESPECIAL
    let caracterer = ['!', '@', '#', '$', '%', '&', '*', '+', '=']
    
    for (let i = 0; i < tamanho; i++){
        for (let j = 0; j < caracterer.length; j++){
            if (senha[i] == caracterer[j]){
                senhaCaracter = true
            }
        }
    }

    let senhaMin = senha.toLowerCase()
    let senhaMax = senha.toUpperCase()

    // TEM MAIUSCULA
    if (senha != senhaMin){
        senhaMaiuscula = true
    }

    // TEM MINUSCULA
    if (senha != senhaMax){
        senhaMinuscula = true
    }

    // TEM 8 CARACTERES 
    if (tamanho > 8){
        senhaTamanho = true
    }

    if (senhaMinuscula == false) {
        erroSenha.innerHTML = "Digite uma letra minuscula"
    } else if (senhaMaiuscula == false) {
        erroSenha.innerHTML = "Digite uma letra maiuscula"
    } else if (senhaCaracter == false) {
        erroSenha.innerHTML = "Digite um caracter especial"
    } else if (senhaTamanho == false) {
        erroSenha.innerHTML = "Insira 8 caracteres"
    } else {
        erroSenha.innerHTML = "tudo pronto"
    }
    
    // console.log(`Tem minuscula ${senhaMinuscula}`)
    // console.log(`Tem maiuscula ${senhaMaiuscula}`)
    // console.log(`Tem caracter ${senhaCaracter}`)
    // console.log(`Tem 8 ${senhaTamanho}`)
 
}

function cadConfirmaSenhaIgual(senhaConf, senha){
    console.log("entrei no senha igual")

    senhaIgual = false

    if (senhaConf == senha){
        senhaIgual = true
        erroConfirmeSenha.innerHTML = ''
    } else {
        erroConfirmeSenha.innerHTML = 'As senhas devem ser iguais '
    }

}

function cadastrar(){

    let nome =  inpCadNome.value

    if (nome != ''){
        if (senhaTamanho && senhaCaracter && senhaMaiuscula && senhaMinuscula && emailPosicao && senhaIgual){
            alert('Usuario cadastrado com sucesso')
        }
    } else {
        alert("Preencha com algum nome")
    }

}