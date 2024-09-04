// window.addEventListener('load', () => {
//   setTimeout(() => {
//       document.getElementById('loader').style.display = 'none';
//       document.querySelector('#main-content').style.display = 'block';
//   }, 2000);
// });

// document.getElementById('menuIcon').addEventListener('click', function() {
//   const sideNavbar = document.getElementById('sideNavbar');
//   sideNavbar.classList.toggle('open');
// });

// const app = () => {
//   const song = document.querySelector(".song");
//   const playBtn = document.getElementById("play");
//   const musicContainer = document.getElementById("gallery");

//   // sounds
//   const sounds = document.querySelectorAll(".music-img");

//   // play song
//   function playSong() {
//     musicContainer.classList.add("play");
//     song.play();
//   }
//   // pause
//   function pauseSong() {
//     musicContainer.classList.remove("play");
//     song.pause();
//   }

//   // event
//   playBtn.addEventListener("click", () => {
//     const isPlaying = musicContainer.classList.contains("play");
//     if (isPlaying) {
//       pauseSong();
//     } else {
//       playSong();
//     }
//   });

//   // pick different sounds
//   sounds.forEach((sound) => {
//     sound.addEventListener("click", function () {
//       song.src = this.getAttribute("data-sound");
//       playSong(song);
//     });
//   });
// };

// app();

// const audio = document.querySelector(".song");
// const progress = document.getElementById("progress");
// const progressContainer = document.getElementById("progress-container");

// // Update progress bar
// function updateProgress(e) {
//   const { duration, currentTime } = e.srcElement;
//   const progressPercent = (currentTime / duration) * 100;
//   progress.style.width = `${progressPercent}%`;
// }

// // Set progress bar
// function setProgress(e) {
//   const width = this.clientWidth;
//   const clickX = e.offsetX;
//   const duration = audio.duration;

//   audio.currentTime = (clickX / width) * duration;
// }

// Event listeners
// audio.addEventListener("timeupdate", updateProgress);
// progressContainer.addEventListener("click", setProgress);


// const musicContainer = document.getElementById("gallery");
// const playBtn = document.getElementById("play");
// const pauseBtn = document.querySelector(".pause");
// const audioSong = document.querySelector(".song");

// const progress = document.getElementById("progress");
// const progressContainer = document.getElementById("progress-container");

// function updateProgress(e) {
//   const { duration, currentTime } = e.srcElement;
//   const progressPercent = (currentTime / duration) * 100;
//   progress.style.width = `${progressPercent}%`;
// }

// // volume

// // mute
// const volumeContainer = document.querySelector(".volume-container");
// const muteBtn = document.getElementById("volume_icon");

// let replayBtn = document.querySelector(".replayBtn");
// // volume

// let volumeSlider = document.getElementById("volume");
// const volume_value_el = document.getElementById("volume_show");
// const changeBgTo = (color) => (volumeSlider.style.background = color);

// volumeSlider.addEventListener("input", () => {
//   const value = volumeSlider.value;

//   if (value <= 15) changeBgTo("#A333C8 ");
//   else if (value > 15 && value <= 30) changeBgTo("#2185D0");
//   else if (value > 30 && value <= 50) changeBgTo("#6435C9");
//   else if (value > 50 && value <= 65) changeBgTo("#21BA45");
//   else if (value > 65 && value <= 80) changeBgTo("#FBBD08");
//   else changeBgTo("#DB2828");

//   volume_value_el.innerText = value;
//   volume_value_el.style.opacity = 1;
//   volumeSlider.style.boxShadow = "0 5px 15px rgba(255,255,255,0.15)";
// });
// // Pause song
// function pauseSong() {
//   musicContainer.classList.remove("play");
//   audio.pause();
// }

// function muteToggle(audio) {
//   if (audio.muted === false) {
//     audio.muted = true;
//   } else {
//     audio.muted = false;
//   }
// }
// // // change volume
// function volume_change() {
//   // volume_show.innerHTML = volumeSlider;
//   audio.volume = volumeSlider.value / 100;
// }

// // Update progress bar
// function updateProgress(e) {
//   const { duration, currentTime } = e.srcElement;
//   const progressPercent = (currentTime / duration) * 100;
//   progress.style.width = `${progressPercent}%`;
// }

// // Set progress bar
// function setProgress(e) {
//   const width = this.clientWidth;
//   const clickX = e.offsetX;
//   const duration = audio.duration;

//   audio.currentTime = (clickX / width) * duration;
// }

// function replay() {
//   musicContainer.classList.add("replay");
//   audio.loop = true;
// }
// function norep() {
//   musicContainer.classList.remove("replay");
//   audio.loop = false;
// }
// // event listeners

// pauseBtn.addEventListener("click", () => {
//   pauseSong();
// });

// muteBtn.addEventListener("click", function () {
//   if (audio.muted === false) {
//     volumeContainer.querySelector("i.fa").classList.remove("fa-volume-up");
//     volumeContainer.querySelector("i.fa").classList.add("fa-volume-mute");
//   } else {
//     volumeContainer.querySelector("i.fa").classList.add("fa-volume-up");
//     volumeContainer.querySelector("i.fa").classList.remove("fa-volume-mute");
//   }
//   muteToggle(audio);
// });
// // replay
// replayBtn.addEventListener("click", () => {
//   let isMuted = musicContainer.classList.contains("replay");
//   if (isMuted) {
//     norep();
//   } else {
//     replay();
//   }
// });

// volume.addEventListener("change", () => {
//   volume_change();
// });

// // Time/song update
// audio.addEventListener("timeupdate", updateProgress);

// // Click on progress bar
// progressContainer.addEventListener("click", setProgress);



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
