const x = [3, 8, 4, 2, 1, 6, 8, 7, 11, 9], y = [2, 1, 5, 12, 3, 0, 1, 4, 5, 6]


//QUESTÃO 1
//-- União de X com Y (sem repetições)
//saída esperada: 3, 8, 4, 2, 1, 6, 7, 11, 9, 5, 12, 0
function UniaoXY() {
    let placeholder = x

    for (let i = 0; i < y.length; i++) {
        placeholder[placeholder.length] = y[i]
    }

    let uniaoXY = []

    for (let i = 0; i < placeholder.length; i++) {
        let isRepeated = false

        for (let j = 0; j < uniaoXY.length; j++) {
            console.log(placeholder[i] + "e" + uniaoXY[j])
            if (placeholder[i] == uniaoXY[j]) {
                isRepeated = true
                break
            }
        }
        if (!isRepeated) {
            uniaoXY[uniaoXY.length] = placeholder[i]
        }
    }

    return uniaoXY
}
//console.log(UniaoXY())


//QUESTÃO 2
//-- Números de X que não tem em Y, sem repetição
//saída esperada: 8, 7, 11, 9
function DiferencaXY() {
    let placeholder = []
    //ADICIONAR AO PLACEHOLDER
    for (let i = 0; i < x.length; i++) {
        let isRepeated = false
        for (let j = 0; j < y.length; j++) {
            if (x[i] == y[j]) {
                isRepeated = true
                break
            }
        }
        if (!isRepeated) {
            placeholder[placeholder.length] = x[i]
        }
    }
    //TIRAR REPETIÇÕES
    let diferencaXY = []
    
    for (let i = 0; i < placeholder.length; i++) {
        isRepeated = false
        for (let j = 0; j < diferencaXY.length; j++) {
            if (placeholder[i] == diferencaXY[j]) {
                isRepeated = true
                break
            }
        }
        if (!isRepeated) {
            diferencaXY[diferencaXY.length] = placeholder[i]
        }
    }

    return diferencaXY
}
//console.log(DiferencaXY())


//QUESTÃO 3
//Elementos que aparecem nos dois vetores, sem repetição
//saída: 3, 4, 2, 1, 6
function IntersecaoXY(){
    let intersecaoXY = []

    for(let i = 0; i < x.length; i++){
        let isRepeated = false
        for(let j = 0; j < y.length; j++){
            if(x[i] == y[j]){
                isRepeated = true
                break
            }
        }
        if(isRepeated){
            intersecaoXY[intersecaoXY.length] = x[i]
        }
    }

    return intersecaoXY
}

//console.log(IntersecaoXY())