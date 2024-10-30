const video = document.getElementById('myVideo');
const videoContainer = document.querySelector('.video-container');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
stop.style.display="none";

function startVideo() {
    start.style.display="none";
    video.play();
    stop.style.display="block";

}

function stopVideo() {
    video.pause();
    stop.style.display="none";
    start.style.display="block";
    video.currentTime = 0;
}

function replayVideo() {
    video.currentTime = 0;
    video.play();
}

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        if (videoContainer.requestFullscreen) {
            videoContainer.requestFullscreen();
        } else if (videoContainer.mozRequestFullScreen) { // Firefox
            videoContainer.mozRequestFullScreen();
        } else if (videoContainer.webkitRequestFullscreen) { // Chrome, Safari and Opera
            videoContainer.webkitRequestFullscreen();
        } else if (videoContainer.msRequestFullscreen) { // IE/Edge
            videoContainer.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { // IE/Edge
            document.msExitFullscreen();
        }
    }
}