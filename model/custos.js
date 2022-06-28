const conexao = require('../infra/connection')

class Custos{

  adiciona(login, res){
    let sql = 'INSERT INTO custos SET ?'
    conexao.query(sql,login,(erro, resultado)=> {
      if(erro){
          res.status(400).json(resultado)
      }else{
          res.status(200).json(resultado)
      }
    })
  }

  lista(res){
    const sql = 'SELECT * FROM custos'
    conexao.query(sql, (erro, resultado) => {
      if(erro){
          res.status(400).json(erro)
      }else{
          res.status(200).json(resultado)
      }
    })
  }

  altera(id, valores, res){
    let sql = 'UPDATE custos SET ? WHERE id_custo_pk = ?'
    conexao.query(sql,[valores, id],(erro, resultado)=>{
      if(erro){
          res.status(400).json(erro)
      }else{
          res.status(200).json(resultado)
      }
    })
  }

  buscaPorId(id, res){
    let sql = 'SELECT * FROM custos WHERE id_custo_pk=?'// ? = 1
    conexao.query(sql,id,(erro, resultado)=>{
      if(erro){
          res.status(400).json(erro)
      }else{
          res.status(200).json(resultado)
      }
    })
  }

  delete(id, res) {
    let sql = "DELETE FROM custos WHERE id_custo_pk=?";
    conexao.query(sql, id, (erro, resultado) => {
      if (erro) {
        res.status(400).json(resultado);
      } else {
        res.status(200).json(resultado);
      }
    });
  }

}
module.exports = new Custos