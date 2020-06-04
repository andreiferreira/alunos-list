class AlunoView{

    constructor(elemento){

        this._elemento = elemento;

    }

    _template(model){

        return `
        
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>NOME</th>
                    <th>NOTA1</th>
                    <th>NOTA2</th>
                    <th>NOTA3</th>
                    <th>DATA</th>
                    <th>MEDIA</th>
                </tr>
            </thead>
            <tbody>
                ${model.alunos.map( a => `

                    <tr>
                        <td>${a.nome}</td>
                        <td>${a.nota1}</td>
                        <td>${a.nota2}</td>
                        <td>${a.nota3}</td>
                        <td>${DateHelper.dataParaTexto(a.data)}</td>
                        <td>${a.media}</td>
                    <tr>
                    `).join("")}
             </tbody>

             <tfoot>
                <td colspan="5"></td>
                <td>${
                    model.alunos.reduce(function(total, a){
                        return total + +a.media;
                    }, 0.0) 
                }
                </td>
             </tfoot>
     </table>
        `}

    update(model){

     return this._elemento.innerHTML = this._template(model);

    }
}