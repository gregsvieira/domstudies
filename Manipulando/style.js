// Alterando estilos
const element = document.querySelector('body')
//permite que acrescente css na linha direta do html mexendo diretamente aqui
//ao invés de colocar com "-", se usa CamelCase
//ex: CSS:background-color DOM: backgroundColor
    //element.style.backgroundColor= "#f9f3D2"
    //console.log(element.style.backgroundColor)

//ClassList
//consigo pegar um método do prototype:
// add
// vai pegar o active e green lá do head em html e usar
element.classList.add('active', 'green')

// remove
// removendo só o active como exemplo
element.classList.remove('active')

// toggle
// funciona como interruptor
// se a classe está ativo ele desativa, se está desativo ele ativa
element.classList.toggle('active')
console.log(element.classList)