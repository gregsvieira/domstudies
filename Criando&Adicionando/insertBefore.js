// Criando e Adicionando elementos no HTML
    // insertBefore
       // quando queremos adicionar no meio

// creatElement
const div = document.createElement('div');//mesmo não vista está criada em memória e existe
div.innerText = "Olá Devs!"

// só que ainda não é visto em página, precisa ser adicionado:

        //seleciona o local:
    const body = document.querySelector('body'); 

    // e seleciona o local de referencia após
    //const script = body.querySelector('script')

    //insertBefore
        // (elemento que quero adicionar, tag referencia que vem dps)
   // body.insertBefore(div, script) //se adiciona o elemento antes o local

    //está justamente entre um e outro

    // ---------------------------------

    // insertAfter 
    // não existe, mas é possivel gambiarras c/ o próprio insertBefore
    const header = body.querySelector('header')
    body.insertBefore(div, header.nextlementSibling)
    //Assim conseguimos adicionar após o irmão do header e antes desse espaço