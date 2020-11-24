const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model',''),'.js');

const AtividadeAvaliativa = sequelize.define(name,{
    descricao: {
        type: DataTypes.STRING(50),
    },
    avaliacao: {
        type: DataTypes.STRING,
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

AtividadeAvaliativa.associate = (models) => {
    AtividadeAvaliativa.belongsToMany(models.hardskill, {
        through: 'atividade_avaliativa_hardskill',
        timestamps: false,
        foreignKey: {
            name: 'id_atividade_avaliativa'
        },
        as: 'atividade_avaliativa'
    })
    AtividadeAvaliativa.hasMany(models.avaliacao360, {
        foreignKey: {
            name: 'id_atividade_avaliativa'
        },
        as: 'avaliacao360'
    })
    AtividadeAvaliativa.hasMany(models.grupo, {
        foreignKey: {
            name: 'id_atividade_avaliativa'
        },
        as: 'grupo'
    })
    AtividadeAvaliativa.belongsTo(models.turma, {
        foreignKey: {
            name: 'id_turma'
        },
        as: 'turma'
    })
}
module.exports = AtividadeAvaliativa;