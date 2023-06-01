audioStart = new Audio()
audioStart.src='./audio/theme.mp3';
audioGameOver = new Audio('./audio/gameover.mp3') 
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const grass = document.querySelector('.grass');
const textStart = document.querySelector('text-start')

const start = () => {

    document.getElementById("text-start").style.color = "rgb(236, 236, 236)";
audioStart.play(); 
}

const jump = () => {
    document.getElementById("text-start").style.color = "rgb(236, 236, 236)";

    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 1000);
 
}

const loop = setInterval(() => {

    console.log(loop)

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    const grassPosition = grass.offsetLeft;

console.log(marioPosition)

    if (pipePosition < 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './imagens/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        grass.style.animation = 'none';
        grass.style.left = `${grassPosition}px`

        function stopAudioStart(){
        audioStart.pause();
        }
        stopAudioStart();

        audioGameOver.play();

        function stopAudio(){
        audioGameOver.pause();
        }
        
        setTimeout(stopAudio, 8000);
        clearInterval(loop);

    }


}, 10);

document.addEventListener('keydown', jump, start);