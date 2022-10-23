function contar(){

var ini = window.document.getElementById('txtin')
var fim = window.document.getElementById('txtfi')
var passo = window.document.getElementById('txtpasso')
var res = window.document.getElementById('res')

//length quem dizer tamanho da variavel, quantos caracteres tem
if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0  ){
    window.alert('Erro. Faltam dados')
}else {
    res.innerHTML=`Contando: `
    var i = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    if(p <= 0) {
        window.alert('Passo invalido! Considerando passo 1')
        p = 1
    }
    //contagem crescente 
    if ( i<f){
        for (var c = 1; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449}`
        }
   //contaghem decrescente 
    }else {
        for( var c = i; c >= f; c-=p ){
            res.innerHTML += `${c} \u{1F449}`  
        }
    }
    res.innerHTML += `\u{1F3C1}`
    





}
}