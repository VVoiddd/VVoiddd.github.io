// Function to toggle iframe visibility
document.getElementById("twitch-btn").addEventListener("mouseenter", function() {
    document.getElementById("twitch-preview").style.display = "block";
});

document.getElementById("twitch-btn").addEventListener("mouseleave", function() {
    document.getElementById("twitch-preview").style.display = "none";
});

document.getElementById("kick-btn").addEventListener("mouseenter", function() {
    document.getElementById("kick-preview").style.display = "block";
});

document.getElementById("kick-btn").addEventListener("mouseleave", function() {
    document.getElementById("kick-preview").style.display = "none";
});

document.getElementById("github-btn").addEventListener("mouseenter", function() {
    document.getElementById("github-preview").style.display = "block";
});

document.getElementById("github-btn").addEventListener("mouseleave", function() {
    document.getElementById("github-preview").style.display = "none";
});
