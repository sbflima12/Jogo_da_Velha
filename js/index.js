const btComecar = document.querySelector('.btCorte');
const Nome1 = document.getElementById('nome1');
const Nome2 = document.getElementById('nome2');

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

    window.location.href='jogo.html';
});