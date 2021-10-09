/* Eventos

 ## argumento event ##
 Existe nas funcionalidades que disparamos em cada evento

primeiro seleciono o elemento que quero mexer*/
//const input = document.querySelector('input')

//depois falo o que quero fazer com ele:
// nesse caso ele pega o evento que é "keypress" e fala que é um "keyboard event"
//input.onkeypress = function(event) {
//        console.log(event)};

// aqui fala que é um evento "MouseEvent"
//input.onclcik = function(event) {
//    console.log(event)};

//## Assim podemos realizar coisas como:


// Com isso podemos pegar o código digitado:
//input.onkeydown = function(event) {
 //       console.log(event.code)};

// Qual é a tecla digitada:
//input.onkeydown = function(event) {
  //  console.log(event.key)};

// Qual é a tecla digitada:
//input.onkeydown = function(event) {
  //  console.log(event.key)};

// Posso perguntar quem é o target(alvo):
//input.onkeydown = function(event) {
  //  console.log(event.currentTarget)};
  // que nesse caso é o input

// Posso pegar com isso o valor do target:
//input.onkeydown = function(event){
//    console.log(event.currentTarget.value)};  