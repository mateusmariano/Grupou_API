const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model',''),'.js');

const Aluno = sequelize.define(name,{
    matricula:{
        type: DataTypes.STRING(10)
    }
},{
    sequelize,
    tableName: name
});

Aluno.associate = (models) => {
    Aluno.belongsTo(models.usuario, {
        foreignKey: {
            name: 'id_usuario'
        },
        as: 'usuario'
    })
    Aluno.belongsToMany(models.hardskill, {
        through: 'aluno_hardskill',
        timestamps: false,
        foreignKey: {
            name: 'id_aluno'
        },
        as: 'hardskills'
    })
    Aluno.belongsToMany(models.softskill, {
        through: 'aluno_softskilll',
        timestamps: false,
        foreignKey: {
            name: 'id_aluno'
        },
        as: 'softskills'
    })
    Aluno.belongsToMany(models.grupo, {
        through: 'aluno_grupo',
        timestamps: false,
        foreignKey: {
            name: 'id_aluno'
        },
        as: 'grupo'
    })
    Aluno.hasMany(models.questaoDia, {
        foreignKey: {
            name: 'id_aluno'
        },
        as: 'questoes_dia'
    })
    Aluno.hasMany(models.tarefa, {
        foreignKey: {
            name: 'id_aluno'
        },
        as: 'tarefa'
    })
    Aluno.hasMany(models.avaliacao360, {
        foreignKey: {
            name: 'id_aluno'
        },
        as: 'avaliacao360'
    })
    Aluno.belongsTo(models.curso, {
        foreignKey: {
            name: 'id_curso'
        },
        as: 'aluno'
    })
    Aluno.belongsToMany(models.turma, {
        through: 'aluno_turma',
        timestamps: false,
        foreignKey: {
            name: 'id_aluno'
        },
        as: 'turma'
    })
}

module.exports = Aluno;