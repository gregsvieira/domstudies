// Navegando pelos elementos "Filhos"

// primeiro pegamos um elemento
//const el = document.querySelector('body')

// childNodes & children
    //por ser html collection
//console.log(el.childNodes)
    //node list - funções no prototype, não leva em conta espaços vazios
    //as coisas tem que estar em linhas diferentes

//console.log(el.children)
    // html collection - não tem funções de prototype    
    // elimina os espaços vazios informando todos elementos


//  fistChild firstElementChild
    //console.log(el.firstChild)
    // pega em formato de texto
    // tirando espaço ele pega os elementos 

//console.log(el.firstElementChild)
    //mesmo com espaço pega os elementos

// children = somente 2 em formato HTMLColecttion
// console.log(el.childNodes)

//  lastChild lastElementChild (Último filho)
    //console.log(el.lastChild)
    //console.log(el.lastElementChild)

    //aparentemente ambos coletam o último mesmo com espaços vazios