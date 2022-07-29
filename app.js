const criarTarefa = (text, status, indice) =>{
    let tarefa = document.createElement('li');
    tarefa.innerHTML= `
    <input class="checkbox" type="checkbox" ${status}  data-indice = ${indice} data-acao = 'checkbox'>
    <span class="textoTarefa">${text}</span>
    <div>
        <button class ="btnEditar" data-indice = ${indice} data-acao = 'editar'>
        <i class="fa fa-pencil" data-indice = ${indice} data-acao = 'editar'></i></button>

        <button class ="btnAcao" data-indice = ${indice} data-acao = 'excluir'>
        <i class="fa fa-trash" data-indice = ${indice} data-acao = 'excluir'></i></button>
    </div>
    `
    document.getElementById('listarTarefa').appendChild(tarefa);
}
inputNewTarefa.addEventListener('keypress', (e) => {
    let texto = inputNewTarefa.value
    if(e.keyCode == 13 && texto != ''){
        alert('apertou enter');
    }
    
});
btnAddTarefa.addEventListener('click', (e) =>{
    let texto = inputNewTarefa.value
    if(texto != ''){
        alert('clicouu');
    }
});