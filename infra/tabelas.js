class Tabelas{
    // construtor de Tabela
    init(conexao){
        this.conexao = conexao
        this.criarLogin()
        this.criarCustos()
        this.criarContatos()
        this.criarProjetos()
        //this.criarEquipes()
    }


    criarLogin(){
        let sql = 'CREATE TABLE IF NOT EXISTS login '+
        '(id_login_pk INT NOT NULL AUTO_INCREMENT PRIMARY KEY,'+
        'email VARCHAR(255) UNIQUE NOT NULL,'+
        "senha VARCHAR(100) DEFAULT 'senha12345')"
        this.conexao.query(sql, erro => {
            if(erro){
                console.log(erro)
            }else{
                console.log('Tabela LOGIN criada com sucesso!')
            }
        })
    }

    criarCustos(){
        let sql = 'CREATE TABLE IF NOT EXISTS custos '+
        '(id_custo_pk INT NOT NULL AUTO_INCREMENT PRIMARY KEY,'+
        'descricao VARCHAR(255) NOT NULL,'+
        'valor varchar(20) NOT NULL,'+
        'data varchar(10) NOT NULL,'+
        'projeto VARCHAR(150) NOT NULL)'
        this.conexao.query(sql, erro => {
            if(erro){
                console.log("Erro 400: " + erro)
            }else{
                console.log('Sucesso em criar tabela CUSTO.')
            }
        })
    }

    criarContatos(){
        let sql = 'CREATE TABLE IF NOT EXISTS contatos '+
        '(id_contatos_pk INT NOT NULL AUTO_INCREMENT PRIMARY KEY,'+
        'nome VARCHAR(100) NOT NULL,'+
        'email VARCHAR(255) UNIQUE NOT NULL,'+
        'telefone VARCHAR(100) NOT NULL,'+
        'logradouro VARCHAR(255) NOT NULL)'
        this.conexao.query(sql, erro => {
            if(erro){
                console.log(erro)
            }else{
                console.log('Tabela LOGIN criada com sucesso!')
            }
        })
    }

     criarProjetos(){
         let sql = 'CREATE TABLE IF NOT EXISTS projeto' +
        '(id_projeto_pk INT NOT NULL AUTO_INCREMENT PRIMARY KEY,'+
        'nome_projeto VARCHAR(150) NOT NULL,'+
        'nome_equipe VARCHAR(150))' 
         this.conexao.query(sql, erro => {
             if(erro){
                 console.log(erro)
             }else{
                 console.log('Tabela projeto criada con sucesso!')
             }
         })
     }

    // criarEquipes(){
    //     let sql = 'CREATE TABLE IF NOT EXISTS despesa '+
    //     '(id_despesa_pk INT NOT NULL AUTO_INCREMENT PRIMARY KEY,'+
    //     'valor double NOT NULL,'+
    //     'descricao VARCHAR(150),'+
    //     "tipo CHAR NOT NULL DEFAULT 'D',"+
    //     'data DATE NOT NULL,'+
    //     'id_categoria_fk INT,'+
    //     'id_carteira_fk INT,'+
    //     'FOREIGN KEY (id_categoria_fk) REFERENCES categoria(id_categoria_pk),'+
    //     'FOREIGN KEY (id_carteira_fk) REFERENCES carteira(id_carteira_pk))'
    //     this.conexao.query(sql, erro => {
    //         if(erro){
    //             console.log(erro)
    //         }else{
    //             console.log('Tabela despesa criada con sucesso!')
    //         }
    //     })
    // }

   
}
module.exports = new Tabelas