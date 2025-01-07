const btnMusica = document.getElementById('btn-musica');
const audioMusica = document.getElementById('audio-musica');

btnMusica.addEventListener('click', () => {
    if (audioMusica.paused) {
        audioMusica.play();
        btnMusica.textContent = 'Pausar Música';
    } else {
        audioMusica.pause();
        btnMusica.textContent = 'Tocar Música Favorita';
    }
});