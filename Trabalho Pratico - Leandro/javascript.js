
let caixaDePerguntasEl = document.querySelector('.caixaDePerguntas');
let botaoPularPerguntaEl = document.querySelector('#pularPergunta');

let perguntas = [
    {
        titulo: "Pergunta 2",
        enunciado: "Qual é a capital do Brasil?",
        opcoes: ["A) São Paulo", "B) Brasília", "C) Rio de Janeiro", "D) Belo Horizonte"]
    },
    {
        titulo: "Pergunta 3",
        enunciado: "Qual é a capital do Japão?",
        opcoes: ["A) Pequim", "B) Tóquio", "C) Seul", "D) Bangcoc"]
    }
];

let perguntaAtual = 0;
function carregarPergunta() {
    if (perguntaAtual >= perguntas.length) {
        caixaDePerguntasEl.innerHTML = `<h2 class="text-center">Fim do Quiz!</h2>`;
        return;
    }

    let pergunta = perguntas[perguntaAtual];
    caixaDePerguntasEl.innerHTML = `
            <h2 class="text-center">${pergunta.titulo}</h2>
            <p class="text-center">${pergunta.enunciado}</p>
            <div class="row g-3">
                ${pergunta.opcoes.map(opcao => `
                    <div class="col-6">
                        <button class="btn btn-outline-success w-100 p-3">${opcao}</button>
                    </div>
                `).join('')}
            </div>
            <div class="text-center mt-4">
                <button id="pularPergunta" class="btn btn-outline-success w-50 p-3 mt-4">Pular Pergunta</button>
            </div>
        `;

    perguntaAtual++;
    document.querySelector('#pularPergunta').addEventListener('click', carregarPergunta);
}
botaoPularPerguntaEl.addEventListener('click', carregarPergunta);