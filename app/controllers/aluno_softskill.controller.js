const models = require('../db/models');

let new_aluno_softskill = [];
exports.store = async (obj, id_aluno) => {
    const aluno = await models.aluno.findOne({
        where: { id: id_aluno}
    })

    for(let h in obj.softskills){
        let softskill = obj.softskills[h];

        const [resultado] = await models.softskill.findOrCreate({
            where: softskill
        })
        new_aluno_softskill.push(resultado.id);
    }
    aluno.addsoftskill(new_aluno_softskill);
    return true;
}

exports.destroy = async (obj, id_aluno) => {
    const aluno = await models.aluno.findOne({
        where: { id: id_aluno}
    })

    for(let h in obj.softskills){
        let softskill = obj.softskills[h];

        const [resultado] = await models.softskill.findOrCreate({
            where: softskill
        })
        new_aluno_softskill.push(resultado.id);
    }
    aluno.removesoftskill(new_aluno_softskill);
    return true;
}