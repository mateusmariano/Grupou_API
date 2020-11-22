const models = require('../db/models');

exports.index = async() =>{
    const resultado = await models.usuario.findAll();
    return resultado;
}
exports.show = async(id) =>{
    const resultado = await models.usuario.findByPk(id);
    return resultado;
}
exports.store = async () =>{
    const resultado = await models.usuario.create(usuario);
    return resultado;
}
exports.update = async(usuario, id) =>{
    const resultado = await models.usuario.update(usuario, {
        where: {id: id}
    });
    return resultado;
}
exports.delete = async(id) =>{
    const resultado = await models.usuario.destro({
        where: {id: id}
    });
    return resultado;
}