// static/script.js

document.addEventListener("DOMContentLoaded", function() {
    const rat1 = 'images/rat1.png';
    const rat2 = 'images/rat2.png';
    const ratImage = document.getElementById("rat-image");

    // Randomly select between rat1 and rat2 based on 60-40 chance
    const randomRat = Math.random() < 0.6 ? rat1 : rat2;
    ratImage.src = randomRat;

    let xPos = Math.random() * (window.innerWidth - 150);
    let yPos = Math.random() * (window.innerHeight - 150);
    let xSpeed = (Math.random() * 4) + 2;  // Horizontal speed
    let ySpeed = (Math.random() * 4) + 2;  // Vertical speed

    // Function to update the rat's position and bounce off edges
    function updatePosition() {
        xPos += xSpeed;
        yPos += ySpeed;

        // Reverse direction when hitting edges
        if (xPos + ratImage.width >= window.innerWidth || xPos <= 0) {
            xSpeed = -xSpeed;
        }
        if (yPos + ratImage.height >= window.innerHeight || yPos <= 0) {
            ySpeed = -ySpeed;
        }

        // Apply the updated position
        ratImage.style.left = `${xPos}px`;
        ratImage.style.top = `${yPos}px`;
        ratImage.style.animation = 'spin 3s linear infinite'; // Add spinning animation

        requestAnimationFrame(updatePosition);
    }

    // Start the update loop
    updatePosition();
});
