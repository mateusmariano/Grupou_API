const models = require('../db/models');

exports.index = async() =>{
    const resultado = await models.softskill.findAll({
        include: ['aluno']
    });
    return resultado;
}
exports.show = async(id) =>{
    const resultado = await models.softskill.findByPk(id);
    return resultado;
}
exports.store = async () =>{
    const resultado = await models.softskill.create(softskill);
    return resultado;
}
exports.update = async(softskill, id) =>{
    const resultado = await models.softskill.update(softskill, {
        where: {id: id}
    });
    return resultado;
}
exports.delete = async(id) =>{
    const resultado = await models.softskill.destroy({
        where: {id: id}
    });
    return resultado;
}