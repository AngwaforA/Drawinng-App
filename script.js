const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let size = 10;
let color = colorEl.value;
let isPressed = false;
let x;
let y;

function drawCircle(x, y){
    ctx.beginPath();
    ctx.arc();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2){
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size*2;
    ctx.stroke();
}

colorEl.addEventListener('change', (e) =>{
    color = e.target.value;
})

canvas.addEventListener('mousedown', (e) =>{
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
})

canvas.addEventListener('mousemove', (e) =>{
    if(isPressed){
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        drawCircle(x2,y2);
        drawLine(x, y, x2, y2);

        x = x2;
        y = y2;
    }
})

canvas.addEventListener('mouseup', (e) =>{
    isPressed = false;
    x = undefined;
    y = undefined;
})

function updateSizeOnScreen(){
    sizeEl.innerText = size;
}
increaseBtn.addEventListener('click', () =>{
    size = size + 2;
    if(size > 50){
        size = 50;
    }
    updateSizeOnScreen();
})

decreaseBtn.addEventListener('click', (e) =>{
    size = size - 2;
    if(size < 4){
        size = 4;
    }
    updateSizeOnScreen();
})

clearEl.addEventListener('click', () =>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})

//Draw circle(100, 200)