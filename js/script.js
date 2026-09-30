/*-------- Variáveis Globais --------*/
/* Botões */
const btPause = document.getElementById('btPause');
const menuPause = document.getElementById('menuPause');
const btContinuar = document.getElementById('btContinuar');
/* Peças */
const celulas = document.querySelectorAll('.celula');
let tabuleiro = ['', '', '', '', '', '', '', '', ''];
let jogadorAtual = 'jogador1';
const imgBotao = 'imagens/Botao.png';
const imgTriangulo = 'imagens/Triangulo.png';

/*-------- Botão de Pause --------*/
btPause.addEventListener('click', function() {
    menuPause.style.display = 'flex';
});

btContinuar.addEventListener('click', function() {
    menuPause.style.display = 'none';
});

/*-------- Peças do Tabuleiro --------*/
celulas.forEach(celula => {
    celula.addEventListener('click', clicado);
});

function clicado(evento) {
    const celulaClicada = evento.target;
    const indice = celulaClicada.getAttribute('data-index');

    if (tabuleiro[indice] != '') {
        return;
    }

    tabuleiro[indice] = jogadorAtual;

    const novaImagem = document.createElement('img');

    if (jogadorAtual === 'jogador1') {
        novaImagem.src = imgBotao;
        novaImagem.alt = 'Botão';
        jogadorAtual = 'jogador2';
    } else {
        novaImagem.src = imgTriangulo;
        novaImagem.alt = 'Triângulo';
        jogadorAtual = 'jogador1';
    }
    celulaClicada.appendChild(novaImagem);
}