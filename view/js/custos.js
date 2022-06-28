function fazPost(url, body){
  let request = new XMLHttpRequest()
  request.open("POST", url, true)
  request.setRequestHeader("Content-type", "application/json")
  request.send(JSON.stringify(body))

  request.onload = function(){
    location.reload(true)
  }
  return request.responseText
}

function cadastraCusto(){
  const url = 'http://127.0.0.1:3000/custos'
  let descricao = document.getElementById('descricao').value
  let valor = document.getElementById('valor').value
  let data = document.getElementById('data').value
  let dataConvert = data.split('-').reverse().join('/')
  let projeto = document.getElementById('projeto').value

  body = {
    "descricao":descricao,
    "valor":valor,
    "data":dataConvert,
    "projeto":projeto
  }
  fazPost(url, body)

}

function fazGet(url){
  let request = new XMLHttpRequest()
  request.open("GET", url, false)
  request.send()
  return request.responseText
}

function criaLinha(dados){
  let linha = document.createElement("tr")
  let colId = document.createElement("td")
  let colDesc = document.createElement("td")
  let colValor = document.createElement("td")
  let colData = document.createElement("td")
  let colProj = document.createElement("td")
  colId.innerHTML = dados.id_custo_pk
  colDesc.innerHTML = dados.descricao
  colValor.innerHTML = "R$ " + dados.valor
  colData.innerHTML = dados.data
  colProj.innerHTML = dados.projeto

  linha.appendChild(colId)
  linha.appendChild(colDesc)
  linha.appendChild(colValor)
  linha.appendChild(colData)
  linha.appendChild(colProj)
  return linha
  
}

function main(){
  let dados = fazGet("http://127.0.0.1:3000/custos")
  let tabela = document.getElementById('table')
  let custos = JSON.parse(dados)
  
  custos.forEach(element => {
      let linha = criaLinha(element)
      tabela.appendChild(linha)
  });
}

main()

//

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

function alteraCusto(){
  let id = document.getElementById('id').value
  const url = 'http://127.0.0.1:3000/custos/' + id
  let descricao = document.getElementById('descricao2').value
  let valor = document.getElementById('valor2').value
  let projeto = document.getElementById('projeto2').value

  body = {
    "descricao":descricao,
    "valor":valor,
    "projeto":projeto
  }
  fazPatch(url, body)

}
//

function fazGet2(url){
  let request = new XMLHttpRequest()
  request.open("GET", url, false)
  request.send()
  return request.responseText
}

function criaLinha(dados){
  let linha = document.createElement("tr")
  let colId = document.createElement("td")
  let colDesc = document.createElement("td")
  let colValor = document.createElement("td")
  let colData = document.createElement("td")
  let colProj = document.createElement("td")
  colId.innerHTML = dados.id_custo_pk
  colDesc.innerHTML = dados.descricao
  colValor.innerHTML = "R$ " + dados.valor
  colData.innerHTML = dados.data
  colProj.innerHTML = dados.projeto

  linha.appendChild(colId)
  linha.appendChild(colDesc)
  linha.appendChild(colValor)
  linha.appendChild(colData)
  linha.appendChild(colProj)
  return linha
  
}

function main2(){
  let idBusca = document.getElementById('idBusca').value
  let dados = fazGet2("http://127.0.0.1:3000/custos" + idBusca)
  let tabela = document.getElementById('table2')
  let custos = JSON.parse(dados)
  
  console.log(custos)
  custos.forEach(element => {
      let linha = criaLinha(element)
      tabela.appendChild(linha)
  });
}

//
String.prototype.reverse = function(){
  return this.split('').reverse().join(''); 
};

function mascaraMoeda(campo,evento){
  var tecla = (!evento) ? window.event.keyCode : evento.which;
  var valor  =  campo.value.replace(/[^\d]+/gi,'').reverse();
  var resultado  = "";
  var mascara = "##.###.###,##".reverse();
  for (var x=0, y=0; x<mascara.length && y<valor.length;) {
    if (mascara.charAt(x) != '#') {
      resultado += mascara.charAt(x);
      x++;
    } else {
      resultado += valor.charAt(y);
      y++;
      x++;
    }
  }
  campo.value = resultado.reverse();
}