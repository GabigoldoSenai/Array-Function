function contarVogais(string) {
    let vogais = [];
    string = string.toUpperCase();

    for (let i = 0; i < string.length; i++) {
        if (string[i] === "A" || string[i] === "E" || string[i] === "I" || string[i] === "O" || string[i] === "U") {
            vogais.push(string[i]);
        }
    }

    return vogais;
}

const entradaDoUsuario = prompt("Digite uma palavra ou frase");
const numeroDeVogais = contarVogais(entradaDoUsuario);
alert(`${numeroDeVogais}`);