/* 1-
 getElementById()
    pega o elemento pelo id, por isso o elemento tem que estar com id */
//const element = document
  //              .getElementById('blog-title')


/* 2-
getElementsByClassName()
    pega os elementos pelo nome da classe*/

//const element = document.getElementsByClassName('one');



/* 3-
    getElementsByTagName()
Pega elementos pelo nome da tag, então pode-se pegar qualquer elemento como por ex: head, body, div, meta... 
*/
//const element = document.getElementsByTagName('meta');
//console.log(element)


/* 4-
    querySelector()
        Faz uma pesquisa pelo seletor css(que permite pegar elementos do html para css) e trás para nós. Muito versátil.
        Porém traz um só porque pega o primeiro que achar. Tem que ser digitado igual css. Para pegar elementos  como por ex a class "one" tem que usar ".one". E id "one" tem que usar o #one. Para pegar atributos como por exemplo "src" tem que usar "[src]"
*/
//const element = document.querySelector('.one');
//console.log(element)



/* 4-
    querySelectorAll()
        Faz o mesmo que o querySelector porém traz também todos os elementos que tem o mesmo atributo
        tráz coleção de nós, nodelist.
        Consegue-se usar o forEach em classes.
        */
//const elements = document.querySelectorAll('[src]');
//console.log(element)
const elements = document.querySelectorAll('[src]');
elements.forEach(el => console.log(el))

/*
    QUAL USAR?
        getElementById (element)
        getElementsByClassName (HTMLCollection)
        getElementsByTagName (HTMLCollection)
        querySelector (element)
        querySelectorAll (Nodelist)

No nodelist dá pra fazer "forEach" enquanto no HTMLCollection não.

Depende da sua necessidade:
Se precisa fazer forEach = querySelectorAll
Se precisa só uma lista = getElementsByClassName / getElementsByTagName
Se quero só o elemento = querySelector* / getElementById*
                        *Especialistas dizem getElementsById é minimamente mais rápido
                            podendo ser priorizado em aplicações muito carregadas
Na prática:
Primariamente se usa querySelector e querySelectorAll, 
usando o getElementbyId quando já se sabe que quer pegar o id

*/