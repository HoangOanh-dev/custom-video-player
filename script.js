// Lấy các phần tử cần thiết từ DOM
const video = document.getElementById('video');
const playButton = document.getElementById('play');
const stopButton = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Hàm để chuyển đổi giữa phát và dừng
function togglePlayPause() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// Cập nhật biểu tượng của nút Play/Pause
function updatePlayIcon() {
    if (video.paused) {
        playButton.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    } else {
        playButton.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }
}

// Dừng video và đặt lại thời gian về 0
function stopVideo() {
    video.currentTime = 0;
    video.pause();
}

// Cập nhật tiến trình video
function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;

    // Tính toán phút và giây hiện tại
    let minutes = Math.floor(video.currentTime / 60);
    let seconds = Math.floor(video.currentTime % 60);

    // Định dạng thời gian hiển thị
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    timestamp.innerText = `${minutes}:${seconds}`;
}

// Đặt lại vị trí phát của video khi người dùng thay đổi thanh tiến trình
function setVideoProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
}

// Thêm sự kiện cho các phần tử
video.addEventListener('click', togglePlayPause);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

playButton.addEventListener('click', togglePlayPause);
stopButton.addEventListener('click', stopVideo);

progress.addEventListener('input', setVideoProgress);
