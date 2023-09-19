//Detector de palíndromos

ePalindromo()

function ePalindromo() {

    debugger
    let string = prompt("Digite uma palavra/frase:"), stringInvertida = ""

    stringVerificar = string.replace(/[^a-zA-Z]/g, "").toUpperCase()
    for (let i = stringVerificar.length - 1; i >= 0; i--) {
        stringInvertida += stringVerificar[i];
    }

    if (stringInvertida === stringVerificar) {
        alert(`O conteúdo "${string}" é um palíndromo`)
    } else {
        alert(`O conteúdo "${string}" não é um palíndromo`)
    }

}