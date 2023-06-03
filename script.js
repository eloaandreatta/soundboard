let audios = [
    {caminho:'grito.mp3', legenda:'GRITO'},
    {caminho:'jesus.mp3', legenda:'JESUS'},
    {caminho:'nao-e-o-pai.mp3', legenda:'ELE NÃO É O PAI'},
    {caminho:'pare.mp3', legenda:'PARE'},
    {caminho:'que-isso-meu-filho.mp3', legenda:'QUE ISSO MEU FILHO'},
    {caminho:'ratinhoo.mp3', legenda:'RATINHO'},
    {caminho:'uepa.mp3', legenda:'UEPA'},
    {caminho:'vixi.mp3', legenda:'VIXI'},
    {caminho:'xaropinho.mp3', legenda:'RAPAAA'},
];

let botoes = document.querySelectorAll('.botao');
let legendas = document.querySelectorAll('p');

for (let i=0; i < 9; i++){
    legendas[i].textContent = audios[i].legenda;
    botoes[i].setAttribute('data-item', i);
}

let audioTag = document.querySelector('audio');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        let som = audios[botao.getAttribute('data-item')];
        audioTag.setAttribute('src', som.caminho);
        
        audioTag.addEventListener('loadeddata', () => {
            audioTag.play();
        });
    });
});   
