let produtosSelecionados = [];

function adicionar() {
     let inputQtd = document.getElementById('quantidade');
     let qtd = parseInt(inputQtd.value); 

    // Seleciona o elemento pelo ID
     const select = document.getElementById('produto');
    
    // Captura o valor do atributo 'value'
    const optionSelecionado = select.value;
    let vetorDescricaoValor = optionSelecionado.split('-');

    let desc = vetorDescricaoValor[0]
    let vl = vetorDescricaoValor[1]

    (optionSelecionado.split('-'))
    

  //alert(valorSelecionado);

  let iten1 = {descricao: desc, 
                   valor: vl, 
              quantidade: qtd};
  produtosSelecionados.push(iten1);


}



function limpar(){
    
    let tirar = document.getElementById('delete')
    

}