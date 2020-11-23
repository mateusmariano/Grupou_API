module.exports = (() => {
    const alunoHardskillController = require("../controllers/aluno_hardskill.controller");

    var router = require("express").Router();

    router.post("/:id", async(req,res) => {
        const hardskill = await alunoHardskillController.store(req.body, req.params.id);
        res.json(hardskill);
    })
   
    router.delete("/:id", async(req,res) => {
        const hardskill = await alunoHardskillController.delete(req.body, req.params.id);
        res.json(hardskill);
    })

    return router;
})()