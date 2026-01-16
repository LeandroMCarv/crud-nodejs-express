const { Router } = require('express');
const router = Router();

//GET POST PUT DELETE
router.get("/atendimento", (req,res) => {
    res.send("Bem-vindo à rota atendimento!");
});

router.post("/atendimentos",(req,res) =>{
    res.send("Está sendo criado seu atendimento");
});

router.put("/atendimentos/:id",(req,res) => {
    const { id } = req.params;
    res.send("Estamos atualizando o seu atendimento!");
});

router.delete("/atendimentos/:id",(req,res) => {
    const { id } = req.params;
    res.send("Deletando o atendimento!" + id + "...");
});

module.exports = router;