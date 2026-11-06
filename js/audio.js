/*-------- Áudios --------*/
/*-------- Música de Fundo --------*/
const musicaFundo = new Audio('audio/musica.mp3');
musicaFundo.loop = true;

const volumeSalvo = localStorage.getItem('volumeMusica') || 0.3;
musicaFundo.volume = volumeSalvo;

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
    volumeSlider.value = volumeSalvo;
    volumeSlider.addEventListener('input', function(evento) {
        const novoVolume = evento.target.value;
        musicaFundo.volume = novoVolume;
        localStorage.setItem('volumeMusica', novoVolume);
    });
}

/*-------- Preenchimento da barra de volume --------*/
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
const volumeEfeitosSalvo = localStorage.getItem('volumeEfeitos') || 0.5;

if (efeitosSlider) {
    efeitosSlider.value = volumeEfeitosSalvo;
    
    efeitosSlider.addEventListener('input', function(evento) {
        const novoVolume = evento.target.value;
        localStorage.setItem('volumeEfeitos', novoVolume);
        const valor = (this.value - this.min) / (this.max - this.min) * 100;
        this.style.background = `linear-gradient(to right, var(--Lavanda) ${valor}%, var(--AzulEscuro) ${valor}%)`;
    });
    
    efeitosSlider.dispatchEvent(new Event('input'));
}