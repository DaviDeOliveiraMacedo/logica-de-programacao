 function alterarStatus(vl) {
   let botaoEscuro = "dashboard__item__button dashboard__item__button--return";
   let botaoClaro = "dashboard__item__button";
   let imagemClara = "dashboard__item__img";
   let imagemEscura = "dashboard__item__img dashboard__item__img--rented";
   let devolver = 'Devolver';
   let alugar = 'Alugar';

   if(vl == 1){
       let botao1 = document.getElementById('btn_um');  
       let imagem1 = document.getElementById('img_1');
      if(botao1.innerText == devolver){
         botao1.className = botaoClaro;
         botao1.innerText = alugar;
         imagem1.className = imagemClara;
      }else{
         botao1.innerText = devolver;
         imagem1.className = imagemEscura;
         botao1.className = botaoEscuro;

      }


   }else if(vl == 2){
       let botao2 = document.getElementById('btn_dois'); 
       let imagem2 = document.getElementById('img_2');
       if(botao2.innerText == devolver){
         botao2.className = botaoClaro;
         botao2.innerText = alugar;
         imagem2.className = imagemClara;
      }else{
         botao2.innerText = devolver;
         imagem2.className = imagemEscura;
         botao2.className = botaoEscuro;

      }

   }else if(vl == 3){
        let botao3 = document.getElementById('btn_tres');  
        let imagem3 = document.getElementById('img_3');
        if(botao3.innerText == devolver){
         botao3.className = botaoClaro;
         botao3.innerText = alugar;
         imagem3.className = imagemClara;
      }else{
         botao3.innerText = devolver;
         imagem3.className = imagemEscura;
         botao3.className = botaoEscuro;

      }
   }   
}    