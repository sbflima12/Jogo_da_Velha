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

    //Limpa a linha de vitória
    linhaVitoria.style.display = 'none';
    linhaVitoria.style.width = '0';
    linhaVitoria.className = '';

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

/*Efeitos Sonoros das Peças*/
const audioBotao = new Audio('audio/somBotao.mp3');
const audioPedra = new Audio('audio/somPedra.mp3');

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
    //Pega o volume dos efeitos salvo ou utiliza 0.5
    const volumeAtual = localStorage.getItem('volumeEfeitos') || 0.5;

    if (jogadorAtual === 'jogador1') {
        novaImagem.src = imgBotao;
        novaImagem.alt = 'Botão preto';
        // Aplica o volume e toca o som do botão
        audioBotao.volume = volumeAtual;
        audioBotao.currentTime = 0;
        audioBotao.play();

        jogadorAtual = 'jogador2';
    } else {
        novaImagem.src = imgTriangulo;
        novaImagem.alt = 'Pedra verde triângular';
        // Aplica o volume e toca o som da pedra
        audioPedra.volume = volumeAtual;
        audioPedra.currentTime = 0;
        audioPedra.play();

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
        // Adiciona a classe do Jogador 1 e remove a do 2
        document.body.classList.remove('vez-jogador2');
        document.body.classList.add('vez-jogador1');
    } else {
        mostrarVez.textContent = nomeSalvo2;
        // Adiciona a classe do Jogador 2 e remove a do 1
        document.body.classList.remove('vez-jogador1');
        document.body.classList.add('vez-jogador2');
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
const linhaVitoria = document.getElementById('linhaVitoria');

function verificarVencedor() {
    let rodadaVencida = false;
    let vencedor = '';
    let indiceVitoria = -1;

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
            indiceVitoria = i; //Memoria a posição da vitória
            break;
        }
    }

     if(rodadaVencida) {
        finalizarJogo(vencedor, indiceVitoria);
        return;
    }

    //Se não há mais espaços livres, mas ninguém venceu
    if (!tabuleiro.includes('')) {
        finalizarJogo('empate', -1);
    }
}

/*--------Atribui pontos para os jogadores  --------*/
function finalizarJogo(resultado, indiceVitoria) {
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

    //Se não for empate, faz a animação da linha
    if (resultado !== 'empate') {
        //Limpa classes antigas
        linhaVitoria.className = '';
        //Aplica a classe cert, baseada no array de vitória
        const classes = ['linha-h0', 'linha-h1', 'linha-h2', 'linha-v0', 'linha-v1', 'linha-v2', 'linha-d0', 'linha-d1'];
        linhaVitoria.classList.add(classes[indiceVitoria]);

        //Mostra a linha
        linhaVitoria.style.display = 'block';
        
        //Tempo para animar a linha
        setTimeout(() => {
            // As diagonais precisam ser mais longas que as linhas retas
            if (indiceVitoria === 6 || indiceVitoria === 7) {
                linhaVitoria.style.width = '125%'; 
            } else {
                linhaVitoria.style.width = '90%'; 
            }
        }, 50);

        // Atrasa o aparecimento do menu de vitória
        setTimeout(() => {
            menuFim.style.display = 'flex';
        }, 800);

        } else {
        // Se for empate, exibe o menu instantaneamente
        menuFim.style.display = 'flex';
    }
}

/*-------- Inicializações --------*/
atualizarTurno();