const express = require("express");
const app = express();
const db = require('./app/db/models')
const bodyParser = require('body-parser');

db.sequelize.sync({force: true}).then(() => {
    console.log("Tabelas sincronizadas");
});

app.get(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.get("/api", (req, res) =>{
    res.json({
        message: "jfreire"
    })
});

require("./app/routes")(app);

app.listen(3000, () => {
    console.log("O server está rodando");
})
