//Calculadora

debugger

function start() {
    const num1 = 20, num2 = 10

    let operador = prompt(`Que tipo de operação você quer fazer?\n Válidas: " + ", " - ", " / " e " * "`)

    let resultado = calculadora(num1, num2, operador)

    alert(`Resultado: ${resultado}`)
}

function calculadora(a, b, operador) {
    const operacoes = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "/": (a, b) => a / b,
        "*": (a, b) => a * b,
    };

    if (operador in operacoes) {
        return operacoes[operador](a, b);
    } else {
        return "Deu errado aqui ó";
    }
}
