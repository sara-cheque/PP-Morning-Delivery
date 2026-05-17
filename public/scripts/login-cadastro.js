function entrar(){

}

function cadConfirmaEmail(){
    console.log("entrei no confirma email")
}

function cadConfirmaSenha(senha){
    console.log(senha)
    if (senha.lenght < 8){
        erroSenha.innerHTML = 'teste'
    }
}

function cadConfirmaSenhaIgual(){
    console.log("entrei no senha igual")
}