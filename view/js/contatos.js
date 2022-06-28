
function fazPost(url, body){
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))
  
    request.onload = function(){
      console.log(this.responseText)
      location.reload(true)
    }
    return request.responseText
}

function cadastrarContato(){
    const url = 'http://127.0.0.1:3000/contatos'
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let telefone = document.getElementById('telefone').value
    let logradouro = document.getElementById('logradouro').value
  
    body = {
      "nome":nome,
      "email":email,
      "telefone":telefone,
      "logradouro":logradouro
    }
    fazPost(url, body)
  
}

function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function fazPatch(url, body){
    let request = new XMLHttpRequest()
    request.open("PATCH", url)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))
  
    request.onload = function(){
      location.reload(true)
    }
    return request.responseText
}

function alterarContato(){
    let id = document.getElementById('id').value
    const url = 'http://127.0.0.1:3000/contatos/' + id
    let descricao = document.getElementById('nome2').value
    let email = document.getElementById('email2').value
    let telefone = document.getElementById('telefone2').value
    let logradouro = document.getElementById('logradouro2').value
    
    body = {
    "nome":nome,
    "email":email,
    "telefone":telefone,
    "logradouro":logradouro
    }
    fazPatch(url, body)

}

function criaLinha(dados){
    let linha = document.createElement("tr")
    let colId = document.createElement("td")
    let colNome = document.createElement("td")
    let colEmail = document.createElement("td")
    let colTelefone = document.createElement("td")
    let colLogradouro = document.createElement("td")
    colId.innerHTML = dados.id_contato_pk
    colNome.innerHTML = dados.nome
    colEmail.innerHTML = dados.email
    colTelefone.innerHTML = dados.telefone
    colLogradouro.innerHTML = dados.logradouro
    
    linha.appendChild(colId)
    linha.appendChild(colNome)
    linha.appendChild(colEmail)
    linha.appendChild(colTelefone)
    linha.appendChild(colLogradouro)

    return linha
}


function main(){
    let dados = fazGet("http://127.0.0.1:3000/contatos")
    let tabela = document.getElementById('table')
    let contatos = JSON.parse(dados)

    contatos.forEach(element => {
        let linha = criaLinha(element)
        tabela.appendChild(linha)
    });
}

main()
