const increaseBtn = document.getElementById("increase");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let size = 200;
let color = colorEl.ariaValueMax;

function drawCircle(x, y){
    ctx.beginPath();
    ctx.arc();
    ctx.arc(X, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2){
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(X2, y2);
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

//Draw circle(100, 200)