let valores = [8, 1, 7, 4, 2, 9]


/*
for(let i = 0; i < valores.length; i++) {
    console.log(`A psoição ${i} tem valor ${valores[i]}`)
}
*/

for(let i in valores) {
    console.log(`A psoição ${i} tem valor ${valores[i]}`)
}


let pos = valores.indexOf(8)
console.log(`o valor 8 esta na posição ${pos}`)
console.log(valores)