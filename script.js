// Game variables
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);

let player = {
    x: 50,
    y: canvas.height - 100,
    width: 50,
    height: 50,
    speed: 10,
    jumping: false,
    jumpSpeed: -15,
};

let platforms = [];
platforms.push({ x: 0, y: canvas.height - 50, width: canvas.width, height: 50 });

let score = 0;

// Game loop
function update() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the player
    ctx.fillStyle = 'white';
    ctx.fillRect(player.x, player.y, player.width, player.height);

    // Update player position
    if (keysDown['ArrowUp'] && !player.jumping) {
        player.jumping = true;
    }
    if (player.jumping) {
        player.y += player.jumpSpeed;
        player.jumpSpeed += 1;
        if (player.jumpSpeed > 0) {
            player.jumping = false;
            player.jumpSpeed = -15;
        }
    }
    if (keysDown['ArrowLeft']) {
        player.x -= player.speed;
    }
    if (keysDown['ArrowRight']) {
        player.x += player.speed;
    }

    // Check for collisions
    for (let i = 0; i < platforms.length; i++) {
        let platform = platforms[i];
        if (
            player.x < platform.x + platform.width &&
            player.x + player.width > platform.x &&
            player.y < platform.y + platform.height &&
            player.y + player.height > platform.y
        ) {
            if (player.jumping) {
                player.jumping = false;
                player.jumpSpeed = -15;
            }
            player.y = platform.y - player.height;
        }
    }

    // Draw platforms
    ctx.fillStyle = 'green';
    for (let i = 0; i < platforms.length; i++) {
        let platform = platforms[i];
        ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
    }

    // Update score
    score++;
    document.getElementById('score').innerText = 'Score: ' + score;

    // Request the next frame
    requestAnimationFrame(update);
}

// Keyboard input
const keysDown = {};
document.addEventListener('keydown', (event) => {
    keysDown[event.key] = true;
});
document.addEventListener('keyup', (event) => {delete keysDown[event.key];
});

// Start the game loop
update();