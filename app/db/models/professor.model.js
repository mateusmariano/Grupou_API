const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model',''),'.js');

const Professor = sequelize.define(name,{
    nome_completo:{
        type: DataTypes.STRING,
        allowNull: false,   
    },
    email:{
        type: DataTypes.STRING(50),
        allowNull: false,   
    },
    senha:{
        type: DataTypes.STRING(30),
        allowNull: false,   
    },
    matricula:{
        type: DataTypes.STRING(10)
    }
},{
    sequelize,
    tableName: name
});

Professor.associate = (models) => {
    Professor.hasOne(models.usuario, {
        foreignKey: {
            name: 'id_professor'
        },
        as: 'usuario'
    })
    Professor.belongsToMany(models.disciplina, {
        through: 'professor_disciplina',
        timestamps: false,
        foreignKey: {
            name: 'id_professor'
        },
        as: 'disciplina'
    })
    Professor.belongsToMany(models.turma, {
        through: 'professor_turma',
        timestamps: false,
        foreignKey: {
            name: 'id_professor'
        },
        as: 'turma'
    })
}
module.exports = Professor;