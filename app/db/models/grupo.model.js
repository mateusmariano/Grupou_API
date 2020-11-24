const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model',''),'.js');

const Grupo = sequelize.define(name,{
    numeroIntegrantes: {
        type: DataTypes.INTEGER(10),
    }
},{
    sequelize,
    tableName: name,
});

Grupo.associate = (models) => {
    Grupo.belongsToMany(models.aluno, {
        through: 'grupo_aluno',
        timestamps: false,
        foreignKey: {
            name: 'id_grupo'
        },
        as: 'aluno'
    })
    Grupo.hasMany(models.avaliacao360, {
        foreignKey: {
            name: 'id_grupo'
        },
        as: 'avaliacao360'
    })
    Grupo.hasMany(models.tarefa, {
        foreignKey: {
            name: 'id_grupo'
        },
        as: 'tarefa'
    })
    Grupo.belongsTo(models.atividadeAvaliativa, {
        foreignKey: {
            name: 'id_atividade_avaliativa'
        },
        as: 'atividade_avaliativa'
    })
    Grupo.belongsTo(models.turma, {
        foreignKey: {
            name: 'id_turma'
        },
        as: 'turma'
    })
}
module.exports = Grupo;