// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica 
// para resolver el problema.

/*Fucionalidades:

1- Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en 
"Adicionar".

2- Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

3- Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

4- Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la 
página.*/

//Funcionalidad 1
let amigos = [];

function agregarAmigo(){
    let input = document.getElementById("amigo");
    let nombre = input.value;
    if (nombre == ""){
        alert("Ingrese un nombre valido");

    }
    amigos.push(nombre)
    let listaAmigos = document.getElementById("listaAmigos");
    let listaInnerAmigos=[];
    for (let i = 0; i<amigos.length; i++){
        listaInnerAmigos = listaInnerAmigos + `<li>${amigos[i]}</li>`;
    }
    input.value = "";
    listaAmigos.innerHTML=listaInnerAmigos;
}

function sortearAmigo(){
    let longitudAmigos = amigos.length;
    let numeroSorteado = Math.floor(Math.random()*longitudAmigos);
    console.log(numeroSorteado);
    let resultado = amigos[numeroSorteado];
    console.log(resultado);
    let NombreSorteado = document.getElementById("resultado");
    NombreSorteado.innerHTML=resultado;
}


