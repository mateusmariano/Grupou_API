const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model',''),'.js');

const Usuario = sequelize.define(name,{
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
    ativo:{
        type: DataTypes.BOOLEAN,
        defaultValue: true   
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
    tableName: name
});

Usuario.associate = (models) => {
    Usuario.hasOne(models.aluno, {
        foreignKey: {
            name: 'id_usuario'
        },
        as: 'aluno'
    })
    Usuario.hasOne(models.professo, {
        foreignKey: {
            name: 'id_professor'
        },
        as: 'aluno'
    })
    Usuario.hasMany(models.questao, {
        foreignKey: {
            name: 'id_usuario'
        },
        as: 'questoes'
    })
}
module.exports = Usuario;