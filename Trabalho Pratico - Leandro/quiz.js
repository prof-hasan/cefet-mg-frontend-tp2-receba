let caixaDePerguntasEl = document.querySelector('.caixaDePerguntas');
let botaoApertaEl = document.querySelector("#aperta");
let nomeUsuario = localStorage.getItem('nome');
if(!nomeUsuario){
    nomeUsuario = prompt("Digite seu nome aqui:");
    if(nomeUsuario){
        localStorage('nome', nomeUsuario );
    }
    else{
        nomeUsuario = "...";
    }
}

let perguntas = [
    {
        titulo: "Pergunta 1",
        enunciado: "Sua vibe é mais..",
        opcoes: ["A) Anos 2020", "B) Anos 90", "C) Anos 2000", "D) Anos 2010"]
    },
    {
        titulo: "Pergunta 2",
        enunciado: "Você prefere uma musica mais..",
        opcoes: ["A)Liríca", "B) Explosiva", "C) Reflexiva", "D) Dançante"]
    },
    {
        titulo: "Pergunta 3",
        enunciado: "Qual desses artistas você mais gosta?",
        opcoes: ["A) Kendrick Lamar", "B) Drake ", "C) Eminem", "D) Travis Sccot"]
    }
];

let resultados = {
    "A,B,D": { mensagem: "tem uma vibe mais Travis Sccot", link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO0vGf4I?si=XDmTRLinSKOiwnFnt5pCjQ" },
    "A,D,D": { mensagem: "tem uma vibe mais Travis Sccot", link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO0vGf4I?si=XDmTRLinSKOiwnFnt5pCjQ" },
    "A,C,D": { mensagem: "tem uma vibe mais Travis Sccot", link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO0vGf4I?si=XDmTRLinSKOiwnFnt5pCjQ" },
    "D,D,D": { mensagem: "tem uma vibe mais Travis Sccot", link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO0vGf4I?si=XDmTRLinSKOiwnFnt5pCjQ" },
    "D,B,D": { mensagem: "tem uma vibe mais Travis Sccot", link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO0vGf4I?si=XDmTRLinSKOiwnFnt5pCjQ" },
    "D,C,D": { mensagem: "tem uma vibe mais Travis Sccot", link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO0vGf4I?si=XDmTRLinSKOiwnFnt5pCjQ" },

    "A,A,A": { mensagem: "tem uma vibe mais Kendrick Lamar", link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO1IPOOk" },
    "A,C,A": { mensagem: "tem uma vibe mais Kendrick Lamar", link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO1IPOOk" },
    "A,D,A": { mensagem: "tem uma vibe mais Kendrick Lamar", link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO1IPOOk" },
    "D,A,A": { mensagem: "tem uma vibe mais Kendrick Lamar", link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO1IPOOk" },
    "D,C,A": { mensagem: "tem uma vibe mais Kendrick Lamar", link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO1IPOOk" },
    "D,B,A": { mensagem: "tem uma vibe mais Kendrick Lamar", link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO1IPOOk" },
    "D,D,A": { mensagem: "tem uma vibe mais Kendrick Lamar", link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO1IPOOk" },
    "C,C,A": { mensagem: "tem uma vibe mais Kendrick Lamar", link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO1IPOOk" },

    "D,C,B": { mensagem: "tem uma vibe mais Drake", link: "https://open.spotify.com/playlist/37i9dQZF1DX7QOv5kjbU68?si=RGMLPy4DQdio7bH_WVZGRA" },
    "D,D,B": { mensagem: "tem uma vibe mais Drake", link: "https://open.spotify.com/playlist/37i9dQZF1DX7QOv5kjbU68?si=RGMLPy4DQdio7bH_WVZGRA" },
    "D,B,B": { mensagem: "tem uma vibe mais Drake", link: "https://open.spotify.com/playlist/37i9dQZF1DX7QOv5kjbU68?si=RGMLPy4DQdio7bH_WVZGRA" },
    "A,D,B": { mensagem: "tem uma vibe mais Drake", link: "https://open.spotify.com/playlist/37i9dQZF1DX7QOv5kjbU68?si=RGMLPy4DQdio7bH_WVZGRA" },
    "A,C,B": { mensagem: "tem uma vibe mais Drake", link: "https://open.spotify.com/playlist/37i9dQZF1DX7QOv5kjbU68?si=RGMLPy4DQdio7bH_WVZGRA" },
    "C,D,B": { mensagem: "tem uma vibe mais Drake", link: "https://open.spotify.com/playlist/37i9dQZF1DX7QOv5kjbU68?si=RGMLPy4DQdio7bH_WVZGRA" },

    "C,C,C": { mensagem: "tem uma vibe mais Eminem", link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO4gTUOY?si=eeokxGLbQeer0nqWSB0pHw" },
    "C,A,C": { mensagem: "tem uma vibe mais Eminem", link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO4gTUOY?si=eeokxGLbQeer0nqWSB0pHw" },
    "C,D,C": { mensagem: "tem uma vibe mais Eminem", link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO4gTUOY?si=eeokxGLbQeer0nqWSB0pHw" },
    "C,B,C": { mensagem: "tem uma vibe mais Eminem", link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO4gTUOY?si=eeokxGLbQeer0nqWSB0pHw" },
    "B,C,C": { mensagem: "tem uma vibe mais Eminem", link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO4gTUOY?si=eeokxGLbQeer0nqWSB0pHw" },
    "B,A,C": { mensagem: "tem uma vibe mais Eminem", link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO4gTUOY?si=eeokxGLbQeer0nqWSB0pHw" },
    "B,D,C": { mensagem: "tem uma vibe mais Eminem", link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO4gTUOY?si=eeokxGLbQeer0nqWSB0pHw" },
    "B,B,C": { mensagem: "tem uma vibe mais Eminem", link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO4gTUOY?si=eeokxGLbQeer0nqWSB0pHw" },
    "D,A,C": { mensagem: "tem uma vibe mais Eminem", link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO4gTUOY?si=eeokxGLbQeer0nqWSB0pHw" },
    "D,C,C": { mensagem: "tem uma vibe mais Eminem", link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO4gTUOY?si=eeokxGLbQeer0nqWSB0pHw" },
    "A,A,C": { mensagem: "tem uma vibe mais Eminem", link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO4gTUOY?si=eeokxGLbQeer0nqWSB0pHw" },
};

let perguntaAtual = 0;
let respostasSelecionadas = [];

function carregarPergunta() {
    if (perguntaAtual >= perguntas.length) {
        mostrarResultado();
        return;
    }

    let pergunta = perguntas[perguntaAtual];

    caixaDePerguntasEl.innerHTML = `
        <h2 class="text-center">${pergunta.titulo}</h2>
        <p class="text-center">${pergunta.enunciado}</p>
        <div class="row g-3">
            ${pergunta.opcoes.map((opcao) => `
                <div class="col-6">
                    <button class="btn btn-outline-success w-100 p-3 resposta">${opcao}</button>
                </div>
            `).join('')}
        </div>
    `;

    document.querySelectorAll('.resposta').forEach(botao => {
        botao.addEventListener('click', (e) => {
            let respostaEscolhida = e.target.innerText.charAt(0);
            respostasSelecionadas.push(respostaEscolhida);
            perguntaAtual++;
            carregarPergunta();
        });
    });
}

function mostrarResultado() {
    let chaveResposta = respostasSelecionadas.join(",");
    let resultado = resultados[chaveResposta];

    if (resultado) {
        caixaDePerguntasEl.innerHTML = `
        <h2 class="text-center">Fim do Quiz!</h2>
        <h3 class="text-center dourado"> ${nomeUsuario} ${resultado.mensagem}</h3>
        <div class="d-flex justify-content-center gap-3 mt-4">
            <a href="${resultado.link}" class="btn btn-outline-success btn-lg py-3 px-4 d-flex justify-content-center align-items-center">
            Clique aqui para ouvir uma playlist recomendada
            </a>
            <a href="playlist.html" class="btn btn-outline-success btn-lg py-3 px-4 d-flex justify-content-center align-items-center">
            Clique aqui para criar a sua própria playlist
            </a>
        </div>
        `;
    } else {
        caixaDePerguntasEl.innerHTML = `<h1 class="text-center">Foi mal chefe, mas essa vibe não existe</h1>`;
    }
}

carregarPergunta();
