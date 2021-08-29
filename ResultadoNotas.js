Number.prototype.entre = function (inicio, fim ){
    return this >= inicio && this <= fim
}

const ImprimirValor = function (nota) {
    if (nota.entre(9, 10)){
        console.log('Quadro de honra')
    } else if(nota.entre(8,9)){
        console.log('Excelente')

    } else if(nota.entre(7,8)){
     console.log('Muito bom')

    } else if(nota.entre(6,7)){
        console.log('Aprovado')

    } else if(nota.entre(5,6)){
        console.log('Recuperação')
    } else if(nota.entre(4,5)){
        console.log('Reprovado')
    } else {
        console.log('Nota invalida')
    }
    console.log('Fim')
       }    
       ImprimirValor(11)