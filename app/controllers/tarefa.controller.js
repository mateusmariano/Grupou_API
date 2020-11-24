const models = require('../db/models');

exports.index = async() =>{
    const resultado = await models.tarefa.findAll({
        include: ['aluno']
    });
    return resultado;
}
exports.show = async(id) =>{
    const resultado = await models.tarefa.findByPk(id);
    return resultado;
}
exports.store = async () =>{
    const resultado = await models.tarefa.create(tarefa);
    return resultado;
}
exports.update = async(tarefa, id) =>{
    const resultado = await models.tarefa.update(tarefa, {
        where: {id: id}
    });
    return resultado;
}
exports.delete = async(id) =>{
    const resultado = await models.tarefa.destroy({
        where: {id: id}
    });
    return resultado;
}