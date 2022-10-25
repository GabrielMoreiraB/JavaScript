
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
}}

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

function finalizar (){

    
}
