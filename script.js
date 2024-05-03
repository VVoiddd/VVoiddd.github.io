// Get the canvas element
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

// Set the canvas dimensions
canvas.width = 800;
canvas.height = 600;

// Game variables
let playerX = canvas.width / 2;
let playerY = canvas.height / 2;
let playerSpeed = 5;
let stars = [];
let asteroids = [];
let score = 0;

// Game loop
function update() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Move the player
    if (keysDown['ArrowUp']) {
        playerY -= playerSpeed;
    }
    if (keysDown['ArrowDown']) {
        playerY += playerSpeed;
    }
    if (keysDown['ArrowLeft']) {
        playerX -= playerSpeed;
    }
    if (keysDown['ArrowRight']) {
        playerX += playerSpeed;
    }

    // Draw the player
    ctx.fillStyle = 'white';
    ctx.fillRect(playerX, playerY, 20, 20);

    // Update and draw stars
    for (let i = 0; i < stars.length; i++) {
        stars[i].x += Math.random() * 2 - 1;
        stars[i].y += Math.random() * 2 - 1;
        ctx.fillStyle = 'yellow';
        ctx.fillRect(stars[i].x, stars[i].y, 5, 5);
    }

    // Update and draw asteroids
    for (let i = 0; i < asteroids.length; i++) {
        asteroids[i].x += Math.random() * 2 - 1;
        asteroids[i].y += Math.random() * 2 - 1;
        ctx.fillStyle = 'red';
        ctx.fillRect(asteroids[i].x, asteroids[i].y, 10, 10);
    }

    // Check for collisions
    for (let i = 0; i < asteroids.length; i++) {
        if (distance(playerX, playerY, asteroids[i].x, asteroids[i].y) < 20) {
            alert('Game Over! Your score was ' + score);
            return;
        }
    }

    // Add new stars and asteroids
    if (Math.random() < 0.1) {
        stars.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height });
    }
    if (Math.random() < 0.05) {
        asteroids.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height });
    }

    // Update score
    score++;

    // Request the next frame
    requestAnimationFrame(update);
}

// Start the game loop
update();

// Keyboard input
const keysDown = {};
document.addEventListener('keydown', (event) => {
    keysDown[event.key] = true;
});
document.addEventListener('keyup', (event) => {
    delete keysDown[event.key];
});

// Distance function
function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}