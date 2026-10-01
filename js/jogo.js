/*-------- Botões --------*/
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
    verificarVencedor();
    atualizarTurno();
}

/*------- Nome dos Jogadores --------*/
// Variáveis
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

/*-------- Placar -------*/
let pontosJog1 = 0;
let pontosJog2 = 0;
let empates = 0;

const mostrarPontos1 = document.getElementById('pontos1');
const mostrarPontos2 = document.getElementById('pontos2');
const mostrarEmpate = document.getElementById('pontosEmpate');
const menuFim = document.getElementById('menuFim');
const mensagemVencedor = document.getElementById('mensagemVencedor');
const btJoNov = document.getElementById('btJoNov');

//Array com as condições de vitória
const condicoesVitoria = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

btJoNov.addEventListener('click', function() {
    menuFim.style.display = 'none';
    reiniciarJogo();
});

/*-------- Verifica se alguém venceu, deu empate ou o jogo não terminou -------- */
function verificarVencedor() {
    let rodadaVencida = false;
    let vencedor = '';

    for(let i=0; i<condicoesVitoria.length; i++) {
        const [a, b, c] = condicoesVitoria[i];
        const celulaA = tabuleiro[a];
        const celulaB = tabuleiro[b];
        const celulaC = tabuleiro[c];
        
        //Se uma das celulas for vazia
        if (celulaA == '' || celulaB == '' || celulaC =='') {
            continue;
        }

        //Se as três células forem iguais
        if (celulaA === celulaB && celulaB === celulaC) {
            rodadaVencida = true;
            vencedor = celulaA;
            break;
        }
    }

     if(rodadaVencida) {
        finalizarJogo(vencedor);
        return;
    }

    //Se não há mais espaços livres, mas ninguém venceu
    if (!tabuleiro.includes('')) {
        finalizarJogo('empate');
    }
}

/*--------Atribui pontos para os jogadores  --------*/
function finalizarJogo(resultado) {
    if (resultado === 'jogador1') {
        mensagemVencedor.textContent = `Ponto para ${nomeSalvo1}!`;
        pontosJog1++;
        mostrarPontos1.textContent = pontosJog1;
    } else if (resultado === 'jogador2') {
        mensagemVencedor.textContent = `Ponto para ${nomeSalvo2}!`;
        pontosJog2++;
        mostrarPontos2.textContent = pontosJog2;
    } else {
        mensagemVencedor.textContent = 'Deu Velha !';
        empates++;
        mostrarEmpate.textContent = empates;
    }
    menuFim.style.display = 'flex';
}

/*-------- Inicializações --------*/
atualizarTurno();