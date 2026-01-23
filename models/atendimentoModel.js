const conexao = require("../infraestrutura/conexao");
class AtendimentoModel{
    listar(){
        const sql = "SELECT * FROM atendimentos";
        return new Promise((resolve,reject) =>{
            conexao.query(sql, {}, (error, resposta) => {
                if(error){
                    console.log("Erro ao buscar atendimentos...");
                    reject(error);
                }
                console.log("Busca feita com sucesso!");
                resolve(resposta);
            });
        });
    }
}

module.exports = new AtendimentoModel();