//var nomes = ["jessica","augusto","pretinha", "brisa"]
//for(var i=0; i< nomes.length; i++){
    //console.log(nomes[i])
//}

//var contador = 0;
//while( contador < nomes.length){
//console.log(nomes[contador]);
//contador++;
//}

//var itensFavoritos = [
    //{icone: "google", titulo: "imagem naruto"},
    //{icone: "kahoot", titulo: "kahootit"},
    //{icone: "w3school", titulo: "w3school javascript"},
//]

//for(var i=0; i < itensFavoritos.length; i++){
//console.log(itensFavoritos[i].icone, itensFavoritos[i].titulo);
//}
//var nomes = [] //array vazio

//function apresentar(){

//var nome1 = prompt("digite seu nome")
//nomes.push(nome1)
//var nome2 = prompt("digite seu nome")
//nomes.push(nome2)
//var nome3 = prompt("digite seu nome")
//nomes.push(nome3)
//for(var i=0; i< nomes.length; i++){
    //document.write(nomes[i],"<br>")
//}
//}
// var nome = "";
// function apresentar(){
//   nome = parseInt(prompt("Digite um nome"));
//   console.log(nome);
//   while(typeof nome!= "string"){
//     alert("Você não digitiou um nome válido!")
//     nome = parseInt(prompt("Digite um nome"));
//   }
// }

var nome;
function apresentar(){
   nome = prompt("Digite um nome");
  
   while(nome.length <3){
     alert("Você não digitiou um nome válido!")
    nome = prompt("Digite um nome");
  } alert("Olá " + nome)
 }