const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
const controls = document.getElementById('controls');

let drawing = false;
let startX, startY;

// Add event listeners for mouse and touch events
canvas.addEventListener('mousedown', (event) => {
    drawing = true;
    startX = event.clientX - canvas.offsetLeft;
    startY = event.clientY - canvas.offsetTop;
});

canvas.addEventListener('mouseup', () => {
    drawing = false;
});

canvas.addEventListener('mousemove', (event) => {
    if (drawing) {
        drawLine(startX, startY, event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        startX = event.clientX - canvas.offsetLeft;
        startY = event.clientY - canvas.offsetTop;
    }
});

canvas.addEventListener('touchstart', (event) => {
    event.preventDefault();
    drawing = true;
    startX = event.touches[0].clientX - canvas.offsetLeft;
    startY = event.touches[0].clientY - canvas.offsetTop;
});

canvas.addEventListener('touchend', () => {
    drawing = false;
});

canvas.addEventListener('touchmove', (event) => {
    event.preventDefault();
    if (drawing) {
        drawLine(startX, startY, event.touches[0].clientX - canvas.offsetLeft, event.touches[0].clientY - canvas.offsetTop);
        startX = event.touches[0].clientX - canvas.offsetLeft;
        startY = event.touches[0].clientY - canvas.offsetTop;
    }
});

// Function to draw a line between two points
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);

    const color = document.getElementById('colorPicker').value;
    ctx.strokeStyle = color;

    const brushType = document.getElementById('brushSelect').value;
    if (brushType === 'dashed') {
        ctx.setLineDash([10, 10]);
    } else {
        ctx.setLineDash([]);
    }

    const brushSize = document.getElementById('brushSize').value;
    ctx.lineWidth = brushSize;

    ctx.stroke();
}