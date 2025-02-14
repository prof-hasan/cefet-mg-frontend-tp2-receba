let botaoRegistroEl = document.querySelector('#botaoRegistro');
let registroJanelaEl = document.querySelector('#janelaRegistro');
let nomeInputEl = document.querySelector('#nomeInput');
let botaoConfirmarNomeEl = document.querySelector('#confirmarNome');
let nome = "";
let botaoJanelaModalEl = document.querySelector('#botaoModal');
let janelaModalEl = document.querySelector('#janelaModal');
let botaoSairModal = document.querySelector('#sairModal');


botaoRegistroEl.addEventListener('click', function () {
    registroJanelaEl.style.display = "flex";
});
botaoConfirmarNomeEl.addEventListener('click', function () {
    let valorNome = nomeInputEl.value.trim();
    if (valorNome) {
        localStorage.setItem('nome', valorNome);
        registroJanelaEl.style.display = "none";
    } else {
        alert("Insira um nome válido");
    }
});

botaoJanelaModalEl.addEventListener('click', function(){
    janelaModalEl.style.display = "flex";
})
botaoSairModal.addEventListener('click', function(){
    janelaModalEl.style.display = "none";
})



localStorage.setItem('nome', nome);

