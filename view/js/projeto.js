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

function cadastraProjeto(){
    const url = 'http://127.0.0.1:3000/projeto'
    let projeto = document.getElementById('add.projeto').value
    let equipes = document.getElementById('add.equipes').value
    body = {
        "nome_projeto":projeto,
        "nome_equipes":equipes
    }
    fazPost(url, body)
}

function founduser(){

}