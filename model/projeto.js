const conexao = require('../infra/connection')

class Projeto{

    adiciona(projeto, res){
        let sql = 'INSERT INTO projeto SET ?'
        conexao.query(sql,projeto,(erro, resultado)=> {
            if(erro){
                res.status(400).json(resultado)
            }else{
                res.status(200).json(resultado)
            }
        })
    }

    lista(res){
        const sql = 'SELECT * FROM projeto'
        conexao.query(sql, (erro, resultado) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }

    buscaPorId(id, res){
        let sql = 'SELECT * FROM projeto WHERE id_projeto_pk=?'// ? = 1
        conexao.query(sql,id,(erro, resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }

    altera(id, res){
        let sql = 'UPDATE projeto SET ? WHERE id_projeto_pk = ?'
        conexao.query(sql,[id],(erro, resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }

}
module.exports = new Projeto