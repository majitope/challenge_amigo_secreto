// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const inputAmigo = document.getElementById("amigo");
const listaAmigos=[];
const ulListaAmigos = document. getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");
function agregarAmigo() {
listaAmigos.push(inputAmigo.value);

ulListaAmigos.innerHTML +=`<li> ${inputAmigo.value} </li>`;
}


function sortearAmigo() {
const random = Math.floor (Math.random ()*listaAmigos.lenght);
const amigoSecreto = listaAmigos [random];
ulResultado.innerHTML = `<li> El amigo secreto es:${amigoSecreto}</li>` ;
}
