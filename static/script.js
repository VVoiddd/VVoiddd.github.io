document.addEventListener("DOMContentLoaded", function() {
    const rat1 = document.getElementById("rat1");
    const rat2 = document.getElementById("rat2");
    const toggleMenuButton = document.getElementById("toggle-menu");
    const menu = document.getElementById("menu");
    const toggleGravityButton = document.getElementById("toggle-gravity");
    const showBothRatsButton = document.getElementById("show-both-rats");
    const minSpeedInput = document.getElementById("min-speed");
    const maxSpeedInput = document.getElementById("max-speed");
    const applyChangesButton = document.getElementById("apply-changes");

    let gravity = false;  // Initially, no gravity
    let ratsShown = 1;    // By default, only one rat is shown
    let minSpeed = 2;
    let maxSpeed = 6;

    // Select initial random rat (60-40 split)
    const randomRat = Math.random() < 0.6 ? rat1 : rat2;
    randomRat.classList.add("active");

    // Set initial random positions and speeds
    let rat1X = Math.random() * (window.innerWidth - 150);
    let rat1Y = Math.random() * (window.innerHeight - 150);
    let rat2X = Math.random() * (window.innerWidth - 150);
    let rat2Y = Math.random() * (window.innerHeight - 150);
    
    let rat1SpeedX = Math.random() * (maxSpeed - minSpeed) + minSpeed;
    let rat1SpeedY = Math.random() * (maxSpeed - minSpeed) + minSpeed;
    let rat2SpeedX = Math.random() * (maxSpeed - minSpeed) + minSpeed;
    let rat2SpeedY = Math.random() * (maxSpeed - minSpeed) + minSpeed;

    // Function to detect and resolve collisions between the two rats
    function checkCollision() {
        const distX = rat1X - rat2X;
        const distY = rat1Y - rat2Y;
        const distance = Math.sqrt(distX * distX + distY * distY);

        // If rats are too close, bounce them away from each other
        if (distance < 150) {
            rat1SpeedX = -rat1SpeedX;
            rat1SpeedY = -rat1SpeedY;
            rat2SpeedX = -rat2SpeedX;
            rat2SpeedY = -rat2SpeedY;
        }
    }

    // Function to update positions and apply gravity
    function updatePosition() {
        if (!gravity) {
            // Bounce off edges for both rats
            rat1X += rat1SpeedX;
            rat1Y += rat1SpeedY;
            rat2X += rat2SpeedX;
            rat2Y += rat2SpeedY;

            if (rat1X <= 0 || rat1X + rat1.width >= window.innerWidth) rat1SpeedX = -rat1SpeedX;
            if (rat1Y <= 0 || rat1Y + rat1.height >= window.innerHeight) rat1SpeedY = -rat1SpeedY;

            if (rat2X <= 0 || rat2X + rat2.width >= window.innerWidth) rat2SpeedX = -rat2SpeedX;
            if (rat2Y <= 0 || rat2Y + rat2.height >= window.innerHeight) rat2SpeedY = -rat2SpeedY;

            // Apply updated positions
            rat1.style.left = rat1X + 'px';
            rat1.style.top = rat1Y + 'px';
            rat1.style.animation = 'spin 3s linear infinite';

            rat2.style.left = rat2X + 'px';
            rat2.style.top = rat2Y + 'px';
            rat2.style.animation = 'spin 3s linear infinite';

            checkCollision();  // Check for collision between the rats
        }
        requestAnimationFrame(updatePosition);
    }

    // Open/close the menu
    toggleMenuButton.addEventListener('click', function() {
        if (menu.classList.contains("open")) {
            menu.classList.remove("open");
            toggleMenuButton.innerHTML = ">";
        } else {
            menu.classList.add("open");
            toggleMenuButton.innerHTML = "<";
        }
    });

    // Toggle gravity on/off
    toggleGravityButton.addEventListener('click', function() {
        gravity = !gravity;
        if (gravity) {
            rat1SpeedX = rat1SpeedY = rat2SpeedX = rat2SpeedY = 0; // Stop movement when gravity is on
        } else {
            rat1SpeedX = Math.random() * (maxSpeed - minSpeed) + minSpeed;
            rat1SpeedY = Math.random() * (maxSpeed - minSpeed) + minSpeed;
            rat2SpeedX = Math.random() * (maxSpeed - minSpeed) + minSpeed;
            rat2SpeedY = Math.random() * (maxSpeed - minSpeed) + minSpeed;
        }
    });

    // Show both rats
    showBothRatsButton.addEventListener('click', function() {
        rat1.classList.add("active");
        rat2.classList.add("active");
    });

    // Apply changes to speed limits
    applyChangesButton.addEventListener('click', function() {
        minSpeed = parseFloat(minSpeedInput.value);
        maxSpeed = parseFloat(maxSpeedInput.value);
        if (!gravity) {
            // Update speeds
            rat1SpeedX = Math.random() * (maxSpeed - minSpeed) + minSpeed;
            rat1SpeedY = Math.random() * (maxSpeed - minSpeed) + minSpeed;
            rat2SpeedX = Math.random() * (maxSpeed - minSpeed) + minSpeed;
            rat2SpeedY = Math.random() * (maxSpeed - minSpeed) + minSpeed;
        }
    });

    // Start the animation loop
    updatePosition();
});
