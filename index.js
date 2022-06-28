// npm install express
// npm --save-dev install nodemon
// npm install consign
// npm install body-parser
// npm install mysql
// npm install cors
// Comando para iniciar a aplicação: npm start

const express = require('express')
const customExpress = require('./config/customExpress')
const conexao = require('./infra/connection')
const Tabelas = require('./infra/tabelas')
const app = express()
const path = require('path')
const custos = require('./controller/custos')

console.log(path.join(__dirname, '/view/css'))

conexao.connect(erro => {
    if(erro){
        console.log(erro)
    }else{
        console.log('Concetado ao banco de dados!')

        Tabelas.init(conexao)
        const app = customExpress()
        
        app.listen(3000,() => console.log('servidor rodando na porta 3000'))
    }
})


