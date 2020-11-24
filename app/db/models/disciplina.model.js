const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model',''),'.js');

const Disciplina = sequelize.define(name,{
    nome:{
        type: DataTypes.STRING,
        allowNull: false,   
    },
    codigo:{
        type: DataTypes.STRING(3)
    }
},{
    sequelize,
    tableName: name
});

Disciplina.associate = (models) => {
    Disciplina.belongsToMany(models.professor, {
        through: 'disciplina_professor',
        timestamps: false,
        foreignKey: {
            name: 'id_disciplina'
        },
        as: 'professor'
    })
    Disciplina.hasMany(models.turma, {
        foreignKey: {
            name: 'id_disciplina'
        },
        as: 'turma'
    })
    Disciplina.belongsToMany(models.hardskill, {
        foreignKey: {
            name: 'id_disciplina'
        },
        as: 'hardskills'
    })
}
module.exports = Disciplina;