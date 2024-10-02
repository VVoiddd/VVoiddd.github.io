document.addEventListener("DOMContentLoaded", function () {
    const rat1 = document.getElementById('rat1');
    const rat2 = document.getElementById('rat2');
    const showBoth = document.getElementById('show-both');
    const gravityToggle = document.getElementById('gravity-toggle');
    const minSpeedInput = document.getElementById('min-speed');
    const maxSpeedInput = document.getElementById('max-speed');
    const applyChangesButton = document.getElementById('apply-changes');
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenuButton = document.getElementById('close-menu');
    const menu = document.getElementById('menu');
    
    let rats = [rat1];
    let gravity = false;
    let minSpeed = 2;
    let maxSpeed = 6;

    // Toggle menu open/close
    menuToggle.addEventListener('click', () => {
        menu.classList.remove('menu-closed');
    });
    
    closeMenuButton.addEventListener('click', () => {
        menu.classList.add('menu-closed');
    });

    // Apply changes from menu
    applyChangesButton.addEventListener('click', applyChanges);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') applyChanges();
    });

    function applyChanges() {
        gravity = gravityToggle.checked;
        minSpeed = parseFloat(minSpeedInput.value);
        maxSpeed = parseFloat(maxSpeedInput.value);

        // Show or hide rats
        if (showBoth.checked) {
            rat2.classList.remove('hidden');
            rats = [rat1, rat2];
        } else {
            rat2.classList.add('hidden');
            rats = [rat1];
        }
    }

    // Random speed and direction
    function getRandomSpeed() {
        return (Math.random() * (maxSpeed - minSpeed) + minSpeed) * (Math.random() < 0.5 ? -1 : 1);
    }

    let ratProperties = rats.map(rat => ({
        xPos: Math.random() * (window.innerWidth - rat.width),
        yPos: Math.random() * (window.innerHeight - rat.height),
        xSpeed: getRandomSpeed(),
        ySpeed: getRandomSpeed()
    }));

    // Bounce and move rats
    function updatePosition() {
        rats.forEach((rat, index) => {
            const props = ratProperties[index];

            props.xPos += props.xSpeed;
            props.yPos += props.ySpeed;

            // Bounce off edges
            if (props.xPos <= 0 || props.xPos + rat.width >= window.innerWidth) {
                props.xSpeed = -props.xSpeed;
            }
            if (props.yPos <= 0 || props.yPos + rat.height >= window.innerHeight) {
                props.ySpeed = gravity ? 0 : -props.ySpeed;
            }

            // Bounce rats off each other
            if (rats.length > 1 && index === 0) {
                const rat2Props = ratProperties[1];
                const distX = Math.abs(props.xPos - rat2Props.xPos);
                const distY = Math.abs(props.yPos - rat2Props.yPos);

                if (distX < rat.width && distY < rat.height) {
                    // Reverse speeds
                    props.xSpeed = -props.xSpeed;
                    props.ySpeed = -props.ySpeed;
                    rat2Props.xSpeed = -rat2Props.xSpeed;
                    rat2Props.ySpeed = -rat2Props.ySpeed;
                }
            }

            // Update position of the rat
            rat.style.left = `${props.xPos}px`;
            rat.style.top = `${props.yPos}px`;
        });

        requestAnimationFrame(updatePosition);
    }

    // Start the movement
    updatePosition();
});
