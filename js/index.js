/*-------- Variáveis --------*/
const btComecar = document.querySelector('.btCorte');
const Nome1 = document.getElementById('nome1');
const Nome2 = document.getElementById('nome2');
const somTesoura = new Audio('audio/corteTesoura.mp3');

/*-------- Toca o Som de tesoura no botão começar --------*/
btComecar.addEventListener('mouseenter', function() {
    // Busca o volume mais recente guardado ou usa 0.5
    somTesoura.volume = localStorage.getItem('volumeEfeitos') || 0.5;
    somTesoura.currentTime = 0; // Reinicia o áudio se o mouse entrar repetidas vezes
    somTesoura.play();
});

/*-------- Salvar os Nomes dos Jogadores --------*/
btComecar.addEventListener('click', function(evento) {
    evento.preventDefault();

    //Remove os espaços vazios no inicio/fim e salva na variável
    const nome1 = Nome1.value.trim();
    const nome2 = Nome2.value.trim();

    //Impede o jogador de prosseguir sem colocar os nomes
    if(nome1 == '' || nome2 == ''){
        alert('Por favor, preencha os nomes dos dois jogadores');
        return;
    }

    //Salva os nomes do jogador
    localStorage.setItem('jogador1', nome1);
    localStorage.setItem('jogador2', nome2);

    window.location.href = 'jogo.html'; 
});

/*-------- Menu de Áudio --------*/
const btAudio = document.getElementById('btAudio');
const menuAudio = document.getElementById('menuAudio');
const btFecharAjus = document.getElementById('btFecharAjus');

if(btAudio) {
    btAudio.addEventListener('click', function() {
        menuAudio.style.display = 'flex';
    });
    btFecharAjus.addEventListener('click', function() {
        menuAudio.style.display = 'none';
    });
}