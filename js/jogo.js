/*-------- Variáveis Globais --------*/
/* Variáveis */
const btPause = document.getElementById('btPause');
const menuPause = document.getElementById('menuPause');
const btContinuar = document.getElementById('btContinuar');
const btReiniciar = document.getElementById('btReiniciar');

/*-------- Botão de Pause --------*/
btPause.addEventListener('click', function() {
    menuPause.style.display = 'flex';
});

btContinuar.addEventListener('click', function() {
    menuPause.style.display = 'none';
});

btReiniciar.addEventListener('click', reiniciarJogo);

function reiniciarJogo() {
    tabuleiro = ['', '', '', '', '', '', '', '', ''];
    jogadorAtual = 'jogador1';

    celulas.forEach(celula => {
        celula.innerHTML = '';
    });

    menuPause.style.display = 'none';
    atualizarTurno();
}

/*-------- Peças do Tabuleiro --------*/
/* Variáveis */
const celulas = document.querySelectorAll('.celula');
let tabuleiro = ['', '', '', '', '', '', '', '', ''];
let jogadorAtual = 'jogador1';
const imgBotao = 'imagens/Botao.png';
const imgTriangulo = 'imagens/Triangulo.png';

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
    atualizarTurno();
}

/*------- Nome dos Jogadores --------*/
const mostrarJogador1 = document.querySelector('.jogador1 .nomeJogador');
const mostrarJogador2 = document.querySelector('.jogador2 .nomeJogador');
const nomeSalvo1 = localStorage.getItem('jogador1') || ('Jogador 1');
const nomeSalvo2 = localStorage.getItem('jogador2') || ('Jogador 2');

if(mostrarJogador1) mostrarJogador1.textContent = nomeSalvo1;
if(mostrarJogador2) mostrarJogador2.textContent = nomeSalvo2;

const mostrarVez = document.getElementById('nomeVez');

function atualizarTurno() {
    if (jogadorAtual === 'jogador1') {
        mostrarVez.textContent = nomeSalvo1;
    } else {
        mostrarVez.textContent = nomeSalvo2;
    }
}

/*-------- Inicializações --------*/
atualizarTurno();