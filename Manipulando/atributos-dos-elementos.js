// Manipulando elementos - 
// atributos dos elementos
//seleciona-se o elemento:
const header = document.querySelector('header')

// se atribui ao header que não tem nada, um atributo id
//1º tipo de atributo:'id'; 2º: nome do atributo:'header'
header.setAttribute('id', 'header');

//conferindo se teve o atributo adicionado:
const headerID = document.querySelector('#header')

//assim retorna traz todo elemento:
//console.log(headerID)

//para retornar somente o atributo:
console.log(headerID.getAttribute('id'))
console.log(headerID.getAttribute('class'))

//para remover o atributo:
0,
header.removeAttribute('id');
header.removeAttribute('class');
