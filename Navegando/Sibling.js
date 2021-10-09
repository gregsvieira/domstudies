// Navegando pelos elementos "Irmãos"

// primeiro pegamos um elemento
//const el = document.querySelector('header')

// nextSibling nextElementSibling
    //pegam o próximo elemento irmão(que está dentro do mesmo elemento pai)
    //console.log(el.nextSibling) // leva em consideração espaço vazio
    //console.log(el.nextElementSibling) // não leva em consideração espaço vazio

    //--------------------------------------------------

        // vai pegar o primeiro elemento que achar 
    // primeiro pegamos um elemento, queremos o script do body como exemplo
const el = document.querySelector('body script')

    // previousSibling previousElementSibling
          console.log(el.previousSibling) // leva em consideração espaço vazio
          console.log(el.previousElementSibling) // não leva em consideração espaço vazio