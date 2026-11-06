# 🧵 Jogo_da_Velha

> Projeto desenvolvido para a disciplina de Programação para WEB da Universidade Estadual de Campinas (Unicamp).

## 🎃 Descrição
Este projeto é uma reinterpretação do clássico Jogo da Velha, inspirada no universo sombrio do filme stop-motion Coraline e o mundo secreto, de 2009.
A aplicação combina elementos visuais (botões, tesouras, tecidos e pedras) com um áudio dinâmico e feedback visual, para criar uma experiência de jogo fuida e imersiva.

## 🕸️ Funcionalidades e Diferenciais
- **Áudio Imersivo e Foley:** Efeitos sonoros exclusivos para cada peça (o clique de um botão de costura e o impacto de uma pedra), além de trilha sonora temática de fundo.
- **Controle de Volume Duplo:** Sliders dinâmicos e independentes para música e efeitos sonoros, com persistência das escolhas do usuário no navegador via `localStorage`.
- **Feedback Visual & Animações:**
  - **Peça Fantasma:** Exibição de uma versão translúcida da peça ao passar o mouse sobre células vazias (`:empty:hover`).
  - **Costura da Vitória:** Linha tracejada animada em JavaScript e CSS que conecta as três peças vencedoras no tabuleiro antes de exibir a tela de pontuação.
- **Interface Resiliente (QA):** Tratamento e limitação de entradas de texto (`maxlength` e `text-overflow: ellipsis`) para prevenir quebras no layout Flexbox e Grid caso o usuário digite nomes longos.

## 🛠️ Tecnologias
- **HTML5:** Estruturação semântica da página, formulários e atributos de validação.
- **CSS3:** Flexbox, Grid Layout, Variáveis CSS (`:root`), transições temporizadas e estilização de sliders (`<input type="range">`).
- **JavaScript (Vanilla):** Lógica de turnos e verificação de matrizes de vitória, manipulação do DOM, controle assíncrono com `setTimeout`, Web Audio API e gerenciamento do `localStorage`.

## Instalação

### Pré-requisitos
Não é necessário instalar nenhuma dependência ou servidor. Você precisa apenas de um navegador web moderno (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari).

### Passo a Passo
1. Faça o download do arquivo `.zip` da atividade e extraia o seu conteúdo em uma pasta de sua preferência na sua máquina local.
2. Acesse a pasta extraída.
3. Abra o arquivo `index.html` diretamente no seu navegador de preferência (basta dar um duplo clique no arquivo).

## 🕹️ Como Jogar
1. Na tela inicial, insira os nomes dos jogadores e ajuste o volume de preferência.
2. Clique no botão "Começar" para iniciar a partida.
3. Os jogadores se alternam posicionando suas peças no tabuleiro:
   - **Jogador 1:** Botão preto
   - **Jogador 2:** Pedra verde triangular.
4. O primeiro jogador a alinhar 3 peças na horizontal, vertical ou diagonal vence a rodada, aciona a animação de costura e soma pontos no placar.
5. Acesse o menu de "Pause" a qualquer momento para reajustar o áudio, reiniciar a rodada ou voltar ao menu inicial.

## 🎨 Créditos e Assets
- **Artes Visuais:** Todas as imagens (fundo, botão, pedra e tabuleiro) foram ilustradas e criadas do zero exclusivamente para este projeto.
- **Áudio:** Os efeitos sonoros e a música temática foram obtidos no banco de áudios sem direitos autorais Pixabay, garantindo o uso livre e legal.

## 📜 Licença
Este projeto possui **Todos os Direitos Reservados**.

- **Uso Permitido:** Sinta-se à vontade para baixar e executar o jogo na sua máquina local para jogar.
- **Restrições:** Não é permitida a redistribuição, modificação do código/recursos visuais e sonoros para republicação, nem o uso comercial deste projeto sem autorização prévia expressa do autor.

---
*Desenvolvido como atividade acadêmica para a Unicamp.*