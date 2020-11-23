const usuario = require('./usuario.routes');
const questao = require('./questao.routes');
const hardskill = require('./hardskill.routes');
const alunoHardSkill = require('./aluno_hardskill.routes');

module.exports = app =>{
    app.use('/api/usuario', usuario);
    app.use('/api/questao', questao);
    app.use('/api/hardskill', hardskill);
    app.use('/api/aluno_hardskill', alunoHardSkill);

    
}