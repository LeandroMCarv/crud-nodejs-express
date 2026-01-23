const atendimentoModel = require("../models/atendimentoModel");

class AtendimentoController{
    buscar(){
        return atendimentoModel.listar();
    }
    criar(){
        return "Criando atendimento...";
    }
    atualizar(id){
        return "Atualizando atendimento número: " + id + "...";
    }
    deletar(id){
        return "Deletando atendimento número: " + id + "...";
    }
}

module.exports = new AtendimentoController();