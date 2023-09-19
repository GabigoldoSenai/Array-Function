/* CHAT GPT
-Criar um Array: Crie um array chamado frutas contendo três nomes de frutas de sua escolha.
-Acessar Elementos: Acesse o segundo elemento do array frutas e o último elemento usando índices.
-Modificar Elementos: Substitua o primeiro elemento do array frutas por outra fruta de sua escolha.
-Adicionar e Remover Elementos: Adicione uma nova fruta ao final do array frutas e, em seguida, remova o segundo elemento do array.
-Tamanho do Array: Determine o número de elementos no array frutas.
-Iteração: Use um loop for para imprimir cada elemento do array frutas no console.

-Ordenação: Crie um novo array chamado numeros contendo números inteiros fora de ordem. Em seguida, ordene o array em ordem crescente.
-Filtragem: Crie um novo array chamado pares que contenha apenas os números pares do array numeros.
-Pesquisa: Verifique se o número 5 está presente no array numeros. Em caso afirmativo, exiba uma mensagem indicando sua posição (índice); caso contrário, exiba uma mensagem informando que não foi encontrado.

-Concatenação: Crie outro array chamado outrasFrutas com mais nomes de frutas. Em seguida, concatene-o com o array frutas para criar um único array chamado todasFrutas.
-Divisão: Divida o array todasFrutas ao meio, criando dois novos arrays, frutas1 e frutas2, contendo metade das frutas cada.
-Mapeamento: Crie um novo array chamado frutasMaiusculas que contenha todas as frutas do array todasFrutas em letras maiúsculas.
-Redução: Calcule a soma de todos os números no array numeros usando o método reduce.
-Fila (Queue): Implemente uma fila usando um array. Crie funções para adicionar elementos (enqueue) e remover elementos (dequeue) da fila.
-Pilha (Stack): Implemente uma pilha usando um array. Crie funções para adicionar elementos (push) e remover elementos (pop) da pilha.

*/
let frutas = ['uva', 'maçã', 'banana']

console.log(frutas[0], frutas[2])

frutas[0] = 'laranja'

console.log("tamanho do vetor:", frutas.length)

for(let pos in frutas){
    console.log(frutas[pos])
}

//---------

let outrasFrutas = ['uva', 'kiwi', 'ameixa']

let todasFrutas = frutas.concat(outrasFrutas)

console.log(todasFrutas)

let metade = Math.floor(todasFrutas.length / 2)

let frutas1 = todasFrutas.slice(0, metade)
let frutas2 = todasFrutas.slice(metade)


console.log('Frutas na primeira metade:', frutas1)
console.log('Frutas na segunda metade:', frutas2)

// ----------

let frutasMaiusculas = todasFrutas.map(fruta => fruta.toUpperCase())
console.log('Frutas em letras maiúsculas:', frutasMaiusculas);


let num = [4, 8, 3, 1, 5, 6]

num.sort((a,b) => a - b)
console.log(num)

let pares = []

for(let i = 0; i <= num.length; i++){
  if(num[i] % 2 === 0){
    pares.push(num[i])
  }
}

console.log(pares)

if(num.indexOf(5) >= 0){
  console.log("posição do número: " + num.indexOf(5))
}else{
  console.log("Número 5 não encontrado")
}

let soma = num.reduce((acumulador, numero) => acumulador + numero, 0)
console.log('A soma dos números é:', soma);
