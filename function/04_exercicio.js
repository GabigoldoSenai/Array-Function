//Função para calcular média aritmética e ponderada
//pesos: 5, 3, 2
//criar uma função que valide a nota, calcule a média aritmética e 
//uma pra calcular a ponderada.


function validarNotas(notas) {
    for (let nota of notas) {
        if (nota < 0 || nota > 10) {
            return false;
        }
    }
    return true;
}

// Função para calcular a média aritmética
function calcularMediaAritmetica(notas) {
    if (validarNotas(notas)) {
        let soma = notas.reduce((total, nota) => total + nota, 0);
        let media = soma / notas.length;
        return media;
    } else {
        return "Notas inválidas. As notas devem estar entre 0 e 10.";
    }
}

// Função para calcular a média ponderada
function calcularMediaPonderada(notas) {
    if (validarNotas(notas)) {
        let pesos = [5, 3, 2];
        let somaPesos = pesos.reduce((total, peso) => total + peso, 0);
        let somaPonderada = notas.reduce((total, nota, index) => total + nota * pesos[index], 0);
        let media = somaPonderada / somaPesos;
        return media;
    } else {
        return "Notas inválidas. As notas devem estar entre 0 e 10.";
    }
}

debugger
let notas = []
for (let i = 0; i < 3; i++) {
    notas[i] = prompt(`Insira a ${i + 1}° nota:`)
}

let opcao = prompt("Escolha A para média aritmética ou P para média ponderada:");
opcao = opcao.toUpperCase()

if (opcao === "A") {
    let mediaAritmetica = calcularMediaAritmetica(notas);
    alert(`A média aritmética é: ${mediaAritmetica}`);
} else if (opcao === "P") {
    let mediaPonderada = calcularMediaPonderada(notas);
    alert(`A média ponderada é: ${mediaPonderada}`);
} else {
    alert("Opção inválida. Escolha A ou P.");
}
