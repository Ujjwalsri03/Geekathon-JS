window.addEventListener('load', () => {

    const user = JSON.parse(localStorage.getItem('user'));
  const signupBtn = document.querySelector('.signup-btn');

  if (user && user.name) {
      signupBtn.textContent = `Hi ${user.name}`;
  } else {
      alert('Please sign up to access more features!');
  }
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
    try {
        const response = await fetch('https://api.pexels.com/videos/search?query=meditation&per_page=12', {
            headers: {
                Authorization: apiKey
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        displayVideos(data.videos);
    } catch (error) {
        console.error('Error fetching videos:', error);
    }
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
                <button id="toggleButton"><i class="fas fa-arrow-down"></i></button>
            </div>
        `;
        videoContainer.appendChild(videoElement);

        const videoTag = videoElement.querySelector('.video');
        const videoOptions = videoElement.querySelector('.video-options'); // Define videoOptions here
        const durationButtons = videoElement.querySelectorAll('.duration-btn');
        const toggleButton = videoElement.querySelector('#toggleButton');

        // Toggle visibility of videoOptions
        toggleButton.addEventListener('click', () => {
            const isHidden = videoOptions.style.display === 'none';
            videoOptions.style.display = isHidden ? 'flex' : 'none';
            toggleButton.innerHTML = isHidden
              ? '<i class="fas fa-arrow-up"></i>'
              : '<i class="fas fa-arrow-down"></i>';
        });

        // Handle duration buttons
        durationButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const duration = parseInt(btn.getAttribute('data-duration'), 10);
                playVideo(videoTag, duration);
            });
        });

        // Add event listener for fullscreen change
        videoTag.addEventListener('fullscreenchange', () => {
            const isFullscreen = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
            if (isFullscreen) {
                videoOptions.style.display = 'flex';
                toggleButton.style.display = 'block'; 
            } else {
                videoOptions.style.display = 'none';
                toggleButton.style.display = 'none';
            }
        });

        // Enable fullscreen when video is clicked
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

            videoOptions.style.display = 'flex';
            videoOptions.style.opacity = 1;
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
    }, duration * 10000);
}

fetchVideos();
