
    let num = window.document.getElementById('fnum')
    let lista = document.getElementById('flista')
    let res = document.querySelector('div#res')
    let valores = []
    
function isNumero (n) {
    if (Number(n) > 0 && Number(n) <= 100){
    return true
}else {
    return false
}}
function inLista(n, l){
    if(l.indexOf(n) != -1) {
        return false
    }else {
    return true
<<<<<<< HEAD
}
}
=======
}}
>>>>>>> 659933306706c9c41aa50b2ef52eb98b3f115aee

function adicionar () {
    
    if (isNumero(num.value) && inLista(Number(num.value), valores))
    {
    valores.push(Number(num.value)) 
    let item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado.`
    lista.appendChild(item)
    } else {
        window.alert('Valor invalido ou ja encontrado na lista')
    }
    num.value = ''
    num.focus()
}
<<<<<<< HEAD
console.log(valores)
=======

function finalizar (){
    valores.sort()
    let t = valores.length
    let soma = 0
    res.innerHTML = `Ao todo, temos ${t} números cadastrados <br>`
    res.innerHTML += `O maior valor informado foi ${valores[t-1]}<br>`
    res.innerHTML += `O menor valor informado foi ${valores[0]}<br>`
    for(let c =0; c < t; c++){
        soma = soma + valores[c]
    }
    res.innerHTML += `Somando todos os valores temos ${soma}<br>`
    res.innerHTML += `A media dos valores digitados é ${soma/t}<br>`
}
>>>>>>> 659933306706c9c41aa50b2ef52eb98b3f115aee
