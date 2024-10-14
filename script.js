let video = document.getElementById('video')
let play = document.getElementById('play')
let stop = document.getElementById('stop')
let progressBar = document.getElementById('progress')
let timestamp = document.getElementById('timestamp')

video.addEventListener('click', toggleVideoStatus)
video.addEventListener('pause', updatePlayIcon)
video.addEventListener('play', updatePlayIcon)
video.addEventListener('timeupdate', updateProgress)

play.addEventListener('click',toggleVideoStatus)
stop.addEventListener('click',stopVideo)

progressBar.addEventListener('change', handlingProgressBar)


function toggleVideoStatus(){
    if(video.paused){
        video.play();
        play.innerHTML = `<i class="fa-solid fa-pause fa-2x"></i>`
    }else{
        video.pause()
        play.innerHTML = `<i class="fa-solid fa-play fa-2x"></i>`
    }
}

function updatePlayIcon(){
    if(video.paused){
        play.innerHTML = `<i class="fa-solid fa-play fa-2x"></i>`
    }else{
        play.innerHTML = `<i class="fa-solid fa-pause fa-2x"></i>`
    }
}

function updateProgress(){
    progressBar.value = (video.currentTime / video.duration) * 100;
    let videoSec = video.currentTime
    let updatedTime = Math.floor(videoSec)
    if(video.currentTime < 10){
        timestamp.innerText = `0${updatedTime}:${Math.floor(video.duration)}`
    }else{
        timestamp.innerText = `${updatedTime}:${Math.floor(video.duration)}`
    }
}

function stopVideo(){
    video.currentTime = 0;
    video.pause();
}

function handlingProgressBar(){
    video.currentTime = (+progressBar.value * video.duration) / 100;
}