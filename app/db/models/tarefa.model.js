const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model',''),'.js');

const Tarefa = sequelize.define(name,{
    descricao: {
        type: DataTypes.STRING(50),
    },
    createdAt: {
        type: DataTypes.DATE,
        field: 'criado_em'
    },
    updatedAt: {
        type: DataTypes.DATE,
        field: 'atualizado_em'
    }
},{
    sequelize,
    tableName: name,
});

Tarefa.associate = (models) => {
    Tarefa.belongsTo(models.usuario, {
        foreignKey: {
            name: 'id_usuario'
        },
        as: 'tarefa'
    })
}
module.exports = Tarefa;