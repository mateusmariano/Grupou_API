const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model',''),'.js');

const Turma = sequelize.define(name,{
    codigo:{
        type: DataTypes.STRING(3),
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING(50),
    },
    numeroDeAlunos: {
        type: DataTypes.INTEGER(10),
    }
},{
    sequelize,
    tableName: name
});

Turma.associate = (models) => {
    Turma.belongsToMany(models.professor, {
        through: 'turma_professor',
        timestamps: false,
        foreignKey: {
            name: 'id_turma'
        },
        as: 'professor'
    })
    Turma.belongsToMany(models.aluno, {
        through: 'turma_aluno',
        timestamps: false,
        foreignKey: {
            name: 'id_turma'
        },
        as: 'aluno'
    })
    Turma.belongsToMany(models.curso, {
        through: 'turma_curso',
        timestamps: false,
        foreignKey: {
            name: 'id_turma'
        },
        as: 'curso'
    })
    Turma.belongsTo(models.disciplina, {
        foreignKey: {
            name: 'id_disciplina'
        },
        as: 'disciplina'
    })
    Turma.belongsToMany(models.hardskill, {
        through: 'turma_hardskill',
        timestamps: false,
        foreignKey: {
            name: 'id_turma'
        },
        as: 'hardskills'
    })
}
module.exports = Turma;