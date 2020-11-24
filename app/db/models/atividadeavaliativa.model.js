const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model',''),'.js');

const Atividadeavaliativa = sequelize.define(name,{
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

Atividadeavaliativa.associate = (models) => {
    Atividadeavaliativa.belongsToMany(models.hardskill, {
        through: 'atividadeavaliativa_hardskill',
        timestamps: false,
        foreignKey: {
            name: 'id_atividadeavaliativa'
        },
        as: 'hardskill'
    })
    Atividadeavaliativa.hasMany(models.avaliacao360, {
        foreignKey: {
            name: 'id_atividadeavaliativa'
        },
        as: 'avaliacao360'
    })
    Atividadeavaliativa.hasMany(models.grupo, {
        foreignKey: {
            name: 'id_atividadeavaliativa'
        },
        as: 'grupo'
    })
    Atividadeavaliativa.hasOne(models.turma, {
        foreignKey: {
            name: 'id_atividadeavaliativa'
        },
        as: 'turma'
    })
}
module.exports = Atividadeavaliativa;