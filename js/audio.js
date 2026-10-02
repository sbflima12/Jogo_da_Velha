/*-------- Áudios --------*/
/*-------- Música de Fundo --------*/
const musicaFundo = new Audio('audio/musica.mp3');
musicaFundo.loop = true;

//Recupera o volume salvo anteriormente ou define 0.3 como o padrão
const volumeSalvo = localStorage.getItem('volumeMusica') || 0.3;
musicaFundo.volume = volumeSalvo;

//Inicia a música automaticamente
musicaFundo.play().catch(function(){
    //Se o navegador bloquear, toca no primeiro clique na tela
    document.body.addEventListener('click', function(){
        if(musicaFundo.paused) {
            musicaFundo.play();
        }
    }, {once:true});
});

//Sincromiza o slider de volume
const volumeSlider = document.getElementById('volumeSlider');

if (volumeSlider) {
    //Ajusta a posição da bolinha no slider
    volumeSlider.value = volumeSalvo;
    volumeSlider.addEventListener('input', function(evento) {
        const novoVolume = evento.target.value;
        musicaFundo.volume = novoVolume;
        //Salva a alteração, para quando o usuário trocar de página
        localStorage.setItem('volumeMusica', novoVolume);
    });
}

/*-------- Preenchimento dinâmico da barra de volume --------*/
const sliderCor = document.getElementById('volumeSlider');

if (sliderCor) {
    sliderCor.addEventListener('input', function() {
        const valor = (this.value - this.min) / (this.max - this.min) * 100;
        this.style.background = `linear-gradient(to right, var(--Lavanda) ${valor}%, var(--AzulEscuro) ${valor}%)`;
    });
    sliderCor.dispatchEvent(new Event('input'));
}

/*-------- Efeitos Sonoros --------*/
const efeitosSlider = document.getElementById('efeitosSlider');
// Recupera o volume dos efeitos salvo ou define 0.5 como padrão
const volumeEfeitosSalvo = localStorage.getItem('volumeEfeitos') || 0.5;

if (efeitosSlider) {
    // Ajusta a posição inicial da bolinha
    efeitosSlider.value = volumeEfeitosSalvo;
    
    efeitosSlider.addEventListener('input', function(evento) {
        const novoVolume = evento.target.value;
        
        // Salva o valor escolhido na memória
        localStorage.setItem('volumeEfeitos', novoVolume);
        
        // Pinta a barra dinamicamente (igual à barra de música)
        const valor = (this.value - this.min) / (this.max - this.min) * 100;
        this.style.background = `linear-gradient(to right, var(--Lavanda) ${valor}%, var(--AzulEscuro) ${valor}%)`;
    });
    
    // Dispara o evento uma vez para pintar a barra na cor certa ao carregar a página
    efeitosSlider.dispatchEvent(new Event('input'));
}