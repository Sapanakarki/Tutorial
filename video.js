// script.js
const video = document.getElementById('myVideo');

// Custom play/pause button behavior
const playButton = document.getElementById('playButton');
playButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});
