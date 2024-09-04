window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').style.display = 'none';
    document.querySelector('#main-content').style.display = 'block';
  }, 2000);
});

document.getElementById('menuIcon').addEventListener('click', function() {
  const sideNavbar = document.getElementById('sideNavbar');
  sideNavbar.classList.toggle('open');
});

const app = () => {
  const audio = document.querySelector(".song");
  const playBtn = document.getElementById("playBtn");
  const pauseBtn = document.getElementById("pauseBtn");
  const replayBtn = document.getElementById("replayBtn");
  const musicContainer = document.getElementById("gallery");

  // sounds
  const sounds = document.querySelectorAll(".music-img");

  // play song
  function playSong(songSrc) {
    console.log(`Playing song: ${songSrc}`); // Debugging
    if (audio.src !== songSrc) {
      audio.src = songSrc;
    }
    audio.play().then(() => {
      musicContainer.classList.add("play");
    }).catch((error) => {
      console.error("Error playing the song:", error); // Debugging
    });
  }

  // pause
  function pauseSong() {
    console.log("Pausing song"); // Debugging
    audio.pause();
    musicContainer.classList.remove("play");
  }

  // replay
  function replaySong() {
    console.log("Replaying song"); // Debugging
    audio.currentTime = 0;
    audio.play().then(() => {
      musicContainer.classList.add("play");
    }).catch((error) => {
      console.error("Error replaying the song:", error); // Debugging
    });
  }

  // event listeners
  playBtn.addEventListener("click", () => {
    if (musicContainer.classList.contains("play")) {
      pauseSong();
    } else {
      const currentSrc = audio.src;
      if (currentSrc) {
        audio.play().then(() => {
          musicContainer.classList.add("play");
        }).catch((error) => {
          console.error("Error playing the song:", error); // Debugging
        });
      }
    }
  });

  pauseBtn.addEventListener("click", pauseSong);

  replayBtn.addEventListener("click", replaySong);

  // pick different sounds
  sounds.forEach((sound) => {
    sound.addEventListener("click", function () {
      const songSrc = this.getAttribute("data-sound");
      console.log(`Image clicked, setting song source to: ${songSrc}`); // Debugging
      playSong(songSrc);
    });
  });
};

app();

const audio = document.querySelector(".song");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");

// Update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}

// Event listeners
audio.addEventListener("timeupdate", updateProgress);
progressContainer.addEventListener("click", setProgress);

// Volume control
const volumeSlider = document.getElementById("volume");
const volumeValueEl = document.getElementById("volume_show");

volumeSlider.addEventListener("input", () => {
  const value = volumeSlider.value;
  audio.volume = value / 100;
  volumeValueEl.innerText = value;
});

const closeBtn = document.getElementById('close');
  const musicContainer = document.getElementById('progress-container');
  const controls = document.getElementById('controls'); 

  closeBtn.addEventListener('click', () => {
    musicContainer.style.display = 'none';
    controls.style.display = 'none'; 
  });
