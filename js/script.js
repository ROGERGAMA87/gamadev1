const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const btnReset = document.querySelector("#refresh");  //seleciona o botão reset 

const jump = () => {
  mario.classList.add("jump");

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = './imagens/game-over.png';
    mario.style.width = '75px'
    mario.style.marginLeft= '50px'

    clearInterval(loop);

    btnReset.style.display = "Block"; //mostra o botão após a colisão 

  }
}, 10);

const btn = document.querySelector('#refresh')

btn.addEventListener('click', () => {
    location.reload()
})

document.addEventListener("touchstart", jump);

document.addEventListener("keydown", jump);
