document.addEventListener("DOMContentLoaded", function() {
    // Animated Skill Bars
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
        const skillLevel = bar.getAttribute('data-skill');
        bar.style.setProperty('--skill-level', skillLevel + '%');
        bar.style.width = '0%'; // Initial width for animation
    });

    // Scroll Animations
    const boxes = document.querySelectorAll('.box');
    window.addEventListener('scroll', () => {
        const triggerBottom = window.innerHeight / 5 * 4;
        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            if(boxTop < triggerBottom) {
                box.classList.add('show');
            } else {
                box.classList.remove('show');
            }
        });
    });

    // Interactive Project List
    window.toggleDetails = function(element) {
        const details = element.querySelector('.details');
        if (details.style.display === "block") {
            details.style.display = "none";
        } else {
            details.style.display = "block";
        }
    }
    
    // Animate skill bars after content is fully loaded
    window.addEventListener('load', () => {
        skillBars.forEach(bar => {
            const skillLevel = bar.getAttribute('data-skill');
            bar.style.width = skillLevel + '%';
        });
    });
});
