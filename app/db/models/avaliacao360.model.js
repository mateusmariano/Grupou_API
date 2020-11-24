const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model',''),'.js');

const Avaliacao360 = sequelize.define(name,{
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

Avaliacao360.associate = (models) => {
    Avaliacao360.belongsToMany(models.softskill, {
        through: 'avaliacao360_softskill',
        timestamps: false,
        foreignKey: {
            name: 'id_softskill'
        },
        as: 'softskill'
    })
    Avaliacao360.belongsTo(models.grupo, {
        foreignKey: {
            name: 'id_grupo'
        },
        as: 'grupo'
    })
    Avaliacao360.belongsTo(models.atividadeAvaliativa, {
        foreignKey: {
            name: 'id_atividade_avaliativa'
        },
        as: 'atividade_avaliativa'
    })
    Avaliacao360.belongsTo(models.aluno, {
        foreignKey: {
            name: 'id_aluno'
        },
        as: 'aluno'
    })
}
module.exports = Avaliacao360;