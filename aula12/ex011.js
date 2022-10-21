var idade = 67
console.log(`voccê tem ${idade} anos.`)
if (idade < 16) {
    console.log(`não vota`)
} else  if( idade <= 18 || idade >= 65){
        console.log('VOTO OPICIONAL')
} else {
    console.log('Voto obrigatório')
}