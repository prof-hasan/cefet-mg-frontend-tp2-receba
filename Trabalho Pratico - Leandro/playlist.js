let playlist = JSON.parse(localStorage.getItem("playlist")) || [];
let playlistEl = document.querySelector('#playlist');
let tituloPlaylistEl = document.querySelector('#tituloPlaylist');
let playlistDono = localStorage.getItem('nome');
if (!playlistDono) {
    playlistDono = prompt("Digite seu nome para salvar sua playlist:");
    if (playlistDono) {
        localStorage.setItem('nome', playlistDono);
    } else {
        playlistDono = "Desconhecido"; 
    }
}
tituloPlaylistEl.innerHTML = `Playlist de ${playlistDono}`;

function carregarPlaylist() {
    playlistEl.innerHTML = '';
    for (let i = 0; i < playlist.length; i++) {
        let listaDeMusicas = document.createElement('li');
        listaDeMusicas.textContent = `${playlist[i].musica} - autoria: ${playlist[i].artista}`;

        let botaoRemoverMusica = document.createElement('button');
        botaoRemoverMusica.classList.add('btn', 'btn-outline-success');
        botaoRemoverMusica.textContent = 'Remover música';
        botaoRemoverMusica.style.marginLeft = "8px";
        botaoRemoverMusica.addEventListener('click', function() {
            removerMusica(i);
        });

        listaDeMusicas.appendChild(botaoRemoverMusica);
        playlistEl.appendChild(listaDeMusicas);
    }
}

function adicionarMusica() {
    let inputMusica = document.querySelector('#inputMusica');
    let inputArtista = document.querySelector('#inputArtista');
    let nomeMusica = inputMusica.value.trim();
    let nomeArtista = inputArtista.value.trim();

    if (nomeMusica && nomeArtista) {
        playlist.push({ musica: nomeMusica, artista: nomeArtista });
        salvarPlaylist(); 
        inputMusica.value = ''; 
        inputArtista.value = ''; 
        carregarPlaylist();
    }
}

function removerMusica(index) {
    playlist.splice(index, 1);
    salvarPlaylist(); 
    carregarPlaylist();
}

function salvarPlaylist() {
    localStorage.setItem('playlist', JSON.stringify(playlist));
}

function falarTexto(texto) {
    let synth = window.speechSynthesis;
    let utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = 'pt-BR';
    synth.speak(utterance);
}

function ouvirPlaylist() {
    if (playlist.length === 0) {
        falarTexto("Sua playlist está vazia.");
        return;
    }
    
    let textoPlaylist = `A sua playlist tem as seguintes músicas `;
    for (let i = 0; i < playlist.length; i++) {
        textoPlaylist += `${playlist[i].musica}, autoria de ${playlist[i].artista}. `;
    }
    falarTexto(textoPlaylist);
}

document.querySelector('#adicionarMusica').addEventListener("click", adicionarMusica);
document.querySelector('#salvarPlaylist').addEventListener("click", salvarPlaylist);
document.querySelector('#ouvirPlaylist').addEventListener("click", ouvirPlaylist);

carregarPlaylist();
