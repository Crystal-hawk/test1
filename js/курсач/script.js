'use strict';
document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.querySelector('.audio-player');
    const audio = audioPlayer.querySelector('audio');
    const playBtn = audioPlayer.querySelector('.toggle-play');
    const progress = audioPlayer.querySelector('.progress');
    const sliders = audioPlayer.querySelectorAll('.slider');
    const currentTime = audioPlayer.querySelector('.current');
    const totalTime = audioPlayer.querySelector('.length');
    const volumeBtn = audioPlayer.querySelector('.volume-button');
    const volumeSlider = audioPlayer.querySelector('.volume-slider');
    const volumePercentage = audioPlayer.querySelector('.volume-percentage');
  
    playBtn.addEventListener('click', togglePlay);
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', setTotalTime);
    audioPlayer.querySelector('.timeline').addEventListener('click', setProgress);
    volumeBtn.addEventListener('click', toggleMute);
    volumeSlider.addEventListener('click', setVolume);
  
    function togglePlay() {
      if (audio.paused) {
        audio.play();
        playBtn.classList.remove('play');
        playBtn.classList.add('pause');
      } else {
        audio.pause();
        playBtn.classList.remove('pause');
        playBtn.classList.add('play');
      }
    }
  
    function updateProgress() {
      const percent = (audio.currentTime / audio.duration) * 100;
      progress.style.width = `${percent}%`;
      currentTime.textContent = formatTime(audio.currentTime);
    }
  
    function setTotalTime() {
      totalTime.textContent = formatTime(audio.duration);
    }
  
    function setProgress(e) {
      const width = this.clientWidth;
      const clickX = e.offsetX;
      const duration = audio.duration;
      audio.currentTime = (clickX / width) * duration;
    }
  
    function formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = Math.floor(seconds % 60);
      return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }
  
    function toggleMute() {
      if (audio.muted) {
        audio.muted = false;
        volumeBtn.classList.remove('muted');
      } else {
        audio.muted = true;
        volumeBtn.classList.add('muted');
      }
    }
  
    function setVolume(e) {
      const sliderWidth = this.clientWidth;
      const newVolume = e.offsetX / sliderWidth;
      audio.volume = newVolume;
      volumePercentage.style.width = `${newVolume * 100}%`;
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});