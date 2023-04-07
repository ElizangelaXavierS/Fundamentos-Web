let nome = document.getElementById('nome');
let email = document.getElementById('email');
let assunto = document.getElementById('assunto');
let mapa = document.getElementById('mapa');

let nomeOk = false;
let emailOk = false;
let assuntoOk = false;


function validaNome () {
    if (nome.value.length < 2){
      let txtNome = document.getElementById('txtNome')  
      txtNome.innerHTML = "Nome Inválido!"
      txtNome.style.color = 'red'
    }else{
        txtNome.innerHTML = "Nome Válido!"
        txtNome.style.color = "green"
        nomeOk = true;
    }
}

function validaEmail () {
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
      let txtEmail = document.getElementById('txtEmail')  
      txtEmail.innerHTML = "Email Inválido!"
      txtEmail.style.color = 'red'
    }else{
        txtEmail.innerHTML = "Email Válido!"
        txtEmail.style.color = "green"
        emailOk = true;
    }
}

function validaAssumto () {
    if (assunto.value.length >= 100){
      let txtAssunto = document.getElementById('txtAssunto')  
      txtAssunto.innerHTML = "Texto muito grande , digite no máximo 100 caracteres!"
      txtAssunto.style.color = 'red'
      txtAssunto.style.display = 'block'
    }else{
        txtAssunto.style.display = 'nome'
        assuntoOk = true;
     
    }
}

function enviar (){
    if(nomeOk == true && email == true && assunto == true){
        alert ('Formulário enviado com sucesso!')

    } else {
        alert('Preencha o formulário corretamente')
    }   
}

function mapaZoon () {
    mapa.style.width = '800px';
    mapa.style.height = '600px'

}

function mapaNormal () {

    mapa.style.width = '400px';
    mapa.style.height = '250px'
}