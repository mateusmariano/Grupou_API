module.exports = (() => {
    const softskillController = require("../controllers/softskill.controller");

    var router = require("express").Router();

    router.post("/", async(req,res) => {
        const softskill = await softskillController.store(req.body);
        res.json(softskill);
    })
    router.get("/", async(res) => {
        const softskill = await softskillController.index();
        res.json(softskill);
    })
    router.get("/:id", async(req,res) => {
        const softskill = await softskillController.show(req.params.id);
        res.json(softskill);
    })
    router.put("/:id", async(req,res) => {
        const softskill = await softskillController.update(req.body, req.params.id);
        res.json(softskill);
    })
    router.delete("/:id", async(req,res) => {
        const softskill = await softskillController.delete(req.params.id);
        res.json(softskill);
    })

    return router;
})()