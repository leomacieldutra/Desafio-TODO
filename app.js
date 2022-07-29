let inputNewTarefa = document.getElementById('inputNewTarefa');
let btnAddTarefa = document.getElementById('btnAddTarefa');
let listarTarefa = document.getElementById('listarTarefa');

const getBD = () => JSON.parse(localStorage.getItem('todoList')) ?? [];
const setBD = (BD) => localStorage.setItem('todoList', JSON.stringify(BD));

const atualizaBD = (texto) =>{
    const BD = getBD();
    BD.push({'tarefa': texto, 'status': ''})
    setBD(BD);
    render();
}

const criarTarefa = (text, status, indice) =>{
    let tarefa = document.createElement('li');
    tarefa.innerHTML= `
    <div class="divdados">
        <input class="checkbox" type="checkbox" ${status}  data-indice = ${indice} data-acao = 'checkbox'>
        <span class="textoTarefa">${text}</span>
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
        atualizaBD(texto);
        inputNewTarefa.value = null;
    }
    
});
btnAddTarefa.addEventListener('click', (e) =>{
    let texto = inputNewTarefa.value
    if(texto != ''){
        atualizaBD(texto);
        inputNewTarefa.value = null;
    }
});

listarTarefa.addEventListener('click', (e) =>{
    let elemento = e.target.dataset;
    //console.log(elemento.indice);
    //console.log(elemento.acao);
    switch (elemento.acao) {
        case 'excluir':
            excluirBD(elemento.indice);
            break;
        case 'editar':

            editarBD( elemento.indice);
            break;
    
        case 'checkbox':
            verificaCheck( elemento.indice);          
            break;
        
        default:
            break;
    }
    
})
const verificaCheck = ( indice) => {
    const BD = getBD();
    BD[indice].status = BD[indice].status == '' ? 'checked' : '';
    setBD(BD);
    render();
}
const editarBD = ( indice) => {
    let i = prompt('digite');
    const BD = getBD();
    BD[indice].tarefa = i;
    setBD(BD);
    render();
    
}
const excluirBD = (indice) => {
    let confirma = window.confirm('confirma que deseja excluir?');
    if(confirma){
        const BD = getBD();
        BD.splice(indice, 1);
        setBD(BD);
        render();
    }
    
}
const clear = () =>{
    let ul = document.getElementById('listarTarefa');
    while(ul.firstChild){ ul.removeChild(ul.lastChild); }
 }

const render = () => {
    clear();
    const BD = getBD();
    BD.forEach( (item, indice )=> criarTarefa(item.tarefa, item.status, indice));
}
render();