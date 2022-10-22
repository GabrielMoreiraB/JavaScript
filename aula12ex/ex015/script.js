function verificar(){

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')

    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if(idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'menino.png')
            } else if (idade < 21 ) {
                //jovem
                img.setAttribute('src', 'jovem m.png')
            } else if ( idade < 50) {
                //Adulto
                img.setAttribute('src', 'homem.png')
            }else {
                //Idoso
                img.setAttribute('src', 'idoso m.png')
            }
        } else {
            gênero = 'Mulher'
            document.body.style.background = 'pink'
            if(idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'menina.png') //adc imagem de forma dinâmica com js
            } else if (idade < 21 ) {
                //jovem
                img.setAttribute('src', 'jovem f.png')
            } else if ( idade < 50) {
                //Adulto
                img.setAttribute('src', 'mulher.png')
            }else {
                //Idoso
                img.setAttribute('src', 'idoso f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com idade ${idade} anos`
        res.appendChild(img) // mostrar a imagem adc de forma dinamica com js
        



    }
    





}