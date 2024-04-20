const image = document.getElementById('image');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');


let posistionX = 0
let animationId

function animateImage(){
    posistionX += 1;
    container.style.left = posistionX + 'px';
    animationId = requestAnimationFrame(animateImage);
}
animateImage();


function startMoving(){
    startButton.disable = true
    stopButton.disable = false
    animateImage();
}

function stopMoving(){
    stopButton.disable = true
    startButton.disable = false
    cancelAnimationFrame(animationId);
}
