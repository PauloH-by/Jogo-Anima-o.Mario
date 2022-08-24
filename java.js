const mario = document.querySelector('.mario');

const jump = () =>{
    mario.classList.add('jump');

    setTimeout(() => {
mario.classList.remove('jump');

    } , 500)
}

const loop = setInterval(() =>{

    const pipePosition = pipe.offsetLeft;
    const marioPosition = window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition);
    
    if (pipePosition <= 120 && marioPosition < 80){
        pipe.index.animation = 'none';
        pipe.index.left = '${pipePosition}px';
    }
}, 10)

document.addEventListener('keydown', jump);