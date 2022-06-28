const conexao = require('../infra/connection')

class Contatos{

    adicionarContato(contatos, res){
        let sql = 'INSERT INTO contatos SET ?'
        conexao.query(sql,contatos,(erro, resultado)=> {
            if(erro){
                res.status(400).json(400)
            }else{
                res.status(200).json(resultado)
            }
        })
    }

    listarContato(res){
        const sql = 'SELECT * FROM contatos'
        conexao.query(sql, (erro, resultado) => {
            if(erro){res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)}})
    }
    
    alterarContato(id, valores, res){
        let sql = 'UPDATE contatos SET ? WHERE id_contato_pk = ?'
        conexao.query(sql,[valores, id],(erro, resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }
    
    buscarPorId(id, res){
        let sql = 'SELECT * FROM contatos WHERE id_contato_pk = ?'
        conexao.query(sql,id,(erro, resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }

    // deletarContato(contatos, res){
    //     let sql = 'DELETE * FROM contatos WHERE id_contato_pk = ?'
    //     conexao.query(sql,contatos,(erro, resultado)=> {
    //         if(erro){
    //             res.status(400).json(400)
    //         }else{
    //             res.status(200).json(resultado)
    //         }
    //     })
    // }


}

module.exports = new Contatos