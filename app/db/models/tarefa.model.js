const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model',''),'.js');

const Tarefa = sequelize.define(name,{
    descricao: {
        type: DataTypes.STRING(50),
    },
    valor: {
        type: DataTypes.FLOAT(20)
    },
    dtaTermino: {
        type: DataTypes.STRING(50),
        field: 'termina_em'
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
    Tarefa.belongsTo(models.aluno, {
        foreignKey: {
            name: 'id_aluno'
        },
        as: 'tarefa'
    })
}
module.exports = Tarefa;