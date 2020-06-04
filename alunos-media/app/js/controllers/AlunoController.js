class AlunoController{


    constructor(){

        let $ = document.querySelector.bind(document);
        this._inputNome = $("#nome");
        this._inputNota1 = $("#nota1");
        this._inputNota2 = $("#nota2");
        this._inputNota3 = $("#nota3");

        this._inputData = $("#data");

        this._listaAlunos = new AlunosList();
        this._alunoView = new AlunoView($("#tabela"));
        this._alunoView.update(this._listaAlunos);
        
    }

    adiciona(event){
        
        event.preventDefault();
                
        this._listaAlunos.adicionaAluno(this._criaAluno());
        this._alunoView.update(this._listaAlunos);
        this._limpaFormulario();
        console.log(this._listaAlunos.alunos);
    }

    _criaAluno(){

        return new Aluno(      
            this._inputNome.value,
            this._inputNota1.value,
            this._inputNota2.value,
            this._inputNota3.value,
            DateHelper.textoParaData(this._inputData.value))
    }

    _limpaFormulario(){

        this._inputNome.value = "";
        this._inputNota1.value = 0;
        this._inputNota2.value = 0;
        this._inputNota3.value = 0;
        this._inputData.value = "";

        this._inputNome.focus();

    }
}