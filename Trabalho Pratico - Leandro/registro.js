let botaoRegistroEl = document.querySelector('#botaoRegistro');
let registroJanelaEl = document.querySelector('#janelaRegistro');
let nomeInputEl = document.querySelector('#nomeInput');
let botaoConfirmarNomeEl = document.querySelector('#confirmarNome');

botaoRegistroEl.addEventListener('click', function () {
    registroJanelaEl.style.display = "flex";
});

botaoConfirmarNomeEl.addEventListener('click', function () {
    let valorNome = nomeInputEl.value.trim();
    if (valorNome) {
        registroJanelaEl.style.display = "none";
    } else {
        alert("Insira um nome valido");
    }
});
