const title = document.querySelector('h1');

const p = document.createElement('h2');
const texto = document.createTextNode('Gabriel Moreira');

p.appendChild(texto)

const pai = title.parentNode;

pai.replaceChild(p, title)


