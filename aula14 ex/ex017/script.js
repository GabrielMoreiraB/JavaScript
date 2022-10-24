function calcular (){

    var num = window.document.getElementById('txtn')
    var tab = window.document.getElementById('seltab')
    if (num.value.length ==0){
        window.alert('Por favor, digite um numero')
    }else{
        var n = Number(num.value)
        var i = 0
        tab.innerHTML =''
        for (i = 0; i < 10; i++) {
            var item = document.createElement('option')
            item.text = `${n}x${i}= ${n*i}`
            tab.appendChild(item)
        }

    }





}