
const contain = document.querySelector('.contain');

const p = document.createElement('p');
const texto = document.createTextNode('texte do ex');

p.appendChild(texto)
console.log (p)
contain.appendChild(p)