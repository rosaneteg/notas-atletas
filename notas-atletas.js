 // Função para calcular a média válida
function calcularMediaValida(notas) {
    // Ordena as notas em ordem crescente
    notas.sort((a, b) => a - b);

    // Elimina a menor e a maior nota
    let notasComputadas = notas.slice(1, 4);

    // Calcula a soma das notas computadas
    let soma = 0;
    notasComputadas.forEach(function(nota) {
        soma += nota;
    });

    // Retorna a média das notas computadas
    return soma / notasComputadas.length;
}

// Função para exibir os resultados
function exibirResultados(atletas) {
    atletas.forEach(function(atleta) {
        console.log(`Atleta: ${atleta.nome}`);
        console.log(`Notas Obtidas: ${atleta.notas.join(",")}`);
        console.log(`Média Válida: ${calcularMediaValida(atleta.notas).toFixed(6)}`);
        console.log("\n");
    });
}

// Dados dos atletas
let atletas = [
    {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome: "Fernando Puntel",
        notas:  [8, 10, 10, 7, 9.33]
    },
    {
        nome: "Daiane Jelinsky",
        notas: [7, 10, 9.5, 9.5, 8]
    },
    {
        nome: "Bruno Castro",
        notas: [10, 10, 10, 9, 9.5]
    }
];

// Exibe os resultados
exibirResultados(atletas);
