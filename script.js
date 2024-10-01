const ratImage = document.getElementById('rat');

// Set the random rat image based on 60/40 probability
function selectRatImage() {
    const random = Math.random();
    if (random < 0.6) {
        ratImage.src = "rat1.png"; // 60% chance for rat1
    } else {
        ratImage.src = "rat2.png"; // 40% chance for rat2
    }
}

// Function to animate the bouncing effect across the entire browser window
function moveRat() {
    let posX = Math.random() * (window.innerWidth - ratImage.clientWidth);
    let posY = Math.random() * (window.innerHeight - ratImage.clientHeight);
    let velX = Math.random() * 6 + 2; // Random speed between 2 and 8 px/frame
    let velY = Math.random() * 6 + 2;

    function updatePosition() {
        posX += velX;
        posY += velY;

        // Bounce off the edges of the browser window
        if (posX + ratImage.clientWidth > window.innerWidth || posX < 0) {
            velX = -velX;
        }
        if (posY + ratImage.clientHeight > window.innerHeight || posY < 0) {
            velY = -velY;
        }

        ratImage.style.left = `${posX}px`;
        ratImage.style.top = `${posY}px`;

        requestAnimationFrame(updatePosition); // Repeat animation
    }

    updatePosition();
}

// Set the rat image and start the animation on page load
window.onload = function() {
    selectRatImage();
    moveRat();
};
