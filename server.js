const express = require("express");
const app = express();
const db = require('./app/db/models')

db.sequelize.sync({force: true}).then(() => {
    console.log("Tabelas sincronizadas");
});

app.get("/api", (req, res) =>{
    res.json({
        message: "jfreire"
    })
});

app.listen(3000, () => {
    console.log("O server está rodando");
})
