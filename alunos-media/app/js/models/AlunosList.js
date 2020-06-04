class AlunosList{
    
    constructor(){

        this._alunos = [];

    }

    adicionaAluno(aluno){

        this._alunos.push(aluno);
    }

    get alunos(){

        return [].concat(this._alunos);
    }

}