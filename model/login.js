const conexao = require('../infra/connection')

class Login{

    adiciona(login, res){
        let sql = 'INSERT INTO login SET ?'
        conexao.query(sql,login,(erro, resultado)=> {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }

    procuraUser(res){
        const sql = 'SELECT * FROM login'
        conexao.query(sql, (erro, resultado) => {
            if(erro){res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)}})
    }
}

module.exports = new Login