// Function to play a sound
function playSound(soundFile) {
    let audio = new Audio(soundFile);
    audio.play();
}

// Add click sound to navigation links
document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        playSound("sounds/click.mp3"); // Replace with your sound file path
    });
});

// Add click sound to services list items
document.querySelectorAll("#services li").forEach(item => {
    item.addEventListener("click", () => {
        playSound("sounds/service-click.mp3"); // Replace with your sound file path
    });
});

// Add click sound to the home section
document.getElementById("home").addEventListener("click", () => {
    playSound("sounds/home-click.mp3"); // Replace with your sound file path
});
