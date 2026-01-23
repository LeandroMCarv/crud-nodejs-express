const { Router } = require('express');
const router = Router();
const atendimentoController = require("../controllers/atendimentoController");

//GET POST PUT DELETE
router.get("/atendimento", (req,res) => {
    const resposta = atendimentoController.buscar();
    res.send(resposta);
    res.send("Bem-vindo à rota atendimento!");
});

router.post("/atendimentos",(req,res) =>{
    const resposta = atendimentoController.criar();
    res.send(resposta);
});

router.put("/atendimentos/:id",(req,res) => {
    const { id } = req.params;
    const resposta = atendimentoController.atualizar(id);
    res.send(resposta);
});

router.delete("/atendimentos/:id",(req,res) => {
    const { id } = req.params;
    const resposta = atendimentoController.deletar(id);
    res.send(resposta);
});

module.exports = router;