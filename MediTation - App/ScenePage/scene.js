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


const apiKey = 'jCu0DbcsnZjiBZGd2rjYB1DsqKyyKhOkmFKE4oLgn38J9Pyp1W3mJxBT'; 
const videoContainer = document.getElementById('videos');

// Fetch videos from Pexels API
async function fetchVideos() {
    const response = await fetch(`https://api.pexels.com/videos/popular`, {
        headers: {
            Authorization: apiKey
        }
    });
    const data = await response.json();
    displayVideos(data.videos);
}

// Display videos in the video container
function displayVideos(videos) {
    videos.forEach(video => {
        const videoElement = document.createElement('div');
        videoElement.classList.add('video-item');
        videoElement.innerHTML = `
            <video src="${video.video_files[0].link}" class="video" controls></video>
            <div class="video-options">
                <button class="duration-btn" data-duration="120">2 Min</button>
                <button class="duration-btn" data-duration="300">5 Min</button>
                <button class="duration-btn" data-duration="600">10 Min</button>
            </div>
        `;
        videoContainer.appendChild(videoElement);

        const videoTag = videoElement.querySelector('.video');
        const durationButtons = videoElement.querySelectorAll('.duration-btn');

        durationButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const duration = parseInt(btn.getAttribute('data-duration'), 10);
                playVideo(videoTag, duration);
            });
        });

        videoTag.addEventListener('click', () => {
            if (videoTag.requestFullscreen) {
                videoTag.requestFullscreen();
            } else if (videoTag.mozRequestFullScreen) {
                videoTag.mozRequestFullScreen();
            } else if (videoTag.webkitRequestFullscreen) {
                videoTag.webkitRequestFullscreen();
            } else if (videoTag.msRequestFullscreen) {
                videoTag.msRequestFullscreen();
            }
            videoTag.play();
        });
    });
}

// Play video with selected duration
function playVideo(video, duration) {
    video.currentTime = 0;
    video.play();
    setTimeout(() => {
        video.pause();
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
    }, duration * 1000);
}

fetchVideos();
