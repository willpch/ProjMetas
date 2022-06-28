const conexao = require('../infra/connection')

function mostrarSenhaOcultar(){
    var senha=document.getElementById("senha");
    if (senha.type=="password"){
        senha.type="text";
    }else{
        senha.type="password";
    }
}
function mostrarSenhaOcultarConfirm(){
    var senha=document.getElementById("senhaa");
    if (senha.type=="password"){
        senha.type="text";
    }else{
        senha.type="password";
    }
}
function validarSenha(){
    var password = document.getElementById("senha");
    var confirm_password = document.getElementById("senhaa");
  
    if(password.value.length <= 5){
        password.setCustomValidity('Informe uma senha com no mínimo 5 caracteres');
    }else {
        password.setCustomValidity('');
      }
    
    if(password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Senhas diferente da informada!");
      } else {
        confirm_password.setCustomValidity('');
      }
    }
    
    function fazPost(url, body){
        let request = new XMLHttpRequest()
        request.open("POST", url, true)
        request.setRequestHeader("Content-type", "application/json")
        request.send(JSON.stringify(body))
    
        request.onload = function(){
            console.log(this.responseText)
        }
        return request.responseText
    }
    
    function cadastraUsuario(){
        const url = 'http://127.0.0.1:3000/login'
        let senha = document.getElementById('senhaa').value
        let email = document.getElementById('email').value
        body = {
            "email":email,
            "senha":senha
        }
        fazPost(url, body)
    }

    function founduser(){
        const url = 'http://127.0.0.1:3000/auth'
        let senha = document.getElementById('senhaa').value
        let email = document.getElementById('email').value
        body = {
            "email":email,
            "senha":senha
        }
        if(email == email && senha==senha){
        fazPost(url, body)
        }else{
            console.log("EMAIL OU SENHA INCORRETA")
        }
    }

    // buscaLogin(id, res){
    //     let sql = 'SELECT login, senh FROM login WHERE id_login_pk=?'// ? = 1
    //     conexao.query(sql,id,(erro, resultado)=>{
    //         if(erro){
    //             res.status(400).json(erro)
    //         }else{
    //             res.status(200).json(resultado)
    //         }
    //     })
    // }


  password.onchange = validarSenha;
  confirm_password.onkeyup = validarSenha;
