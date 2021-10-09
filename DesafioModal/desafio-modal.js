/* Iremos trabalhar com dois Elementos: 1- Click do botão
2- div, para adiconar e remover uma classe. 
*/
// primeiro pego o elemento: click:
const buttonOpenModal = document.getElementById('openModal')

// segundo pego o a classe:
const modalWrapper = document.querySelector('.modal-wrapper')

// adicionar o elemento de click no botão
buttonOpenModal.onclick = function(){
    //essa funcionalidade sera de pegar modalWrapper e da list de classes vou remover a classe chamada invisible
    modalWrapper
    .classList
    .remove('invisible')
}

//terceiro passo adicionar o momento de fechar essa janela
// tecla esc precisará ler na tela inteira
// adiciono o evento keydown(pressionar tecla)
// e coloco comosegundo argumento a função (event) pra verificar se a tecla digitada é a ESC e se sim continuo fazendo a ação
document.addEventListener('keydown', function(event) {
    const isEscKey = event.key === 'Escape'
 if(isEscKey){
     modalWrapper.classList.add('invisible')
 }
})