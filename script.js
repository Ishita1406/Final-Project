let progress = document.querySelector('#range');
let song = document.querySelector('#music');
let controlBtn = document.querySelector('#controlIcon');


song.addEventListener('loadedmetadata', function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
})


function playPause() {
    if (controlBtn.classList.contains("fa-play")) {
        song.play().catch(error => {
            console.log("Failed to play audio:", error);
        });
        controlBtn.classList.remove("fa-play");
        controlBtn.classList.add("fa-pause");
    } else {
        song.pause();
        controlBtn.classList.remove("fa-pause");
        controlBtn.classList.add("fa-play");
    }
}

if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
}