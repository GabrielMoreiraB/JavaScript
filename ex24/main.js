const lista = ['laranja', 'maçã', 'banana', 'pera', 'jaca', 'limao'];

const listaul = document.createElement('ul');
const body = document.getElementsByTagName('body');

body[0].appendChild(listaul);

const listaNoBody= document.getElementsByTagName('ul');
console.log(listaNoBody[0]);

for(let i=0; i<lista.length;i++){
    const li = document.createElement('li');
    const textoLi = document.createTextNode(lista[i]);

    li.appendChild(textoLi);
    listaNoBody[0].appendChild(li);


    console.log(lista[i]);
}