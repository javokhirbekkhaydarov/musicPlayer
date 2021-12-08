//! selectors

const musicContainer = document.querySelector("#music-container");
const playBtn = document.querySelector("#play");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

const audio = document.querySelector("#music");
const progress = document.querySelector("#progress");
const progressContainer = document.querySelector("#progress-container");

const title = document.querySelector("#title");

const cover = document.querySelector("#cover");
const section = document.querySelector(".section");

// songs titles

const songs = ["Hislerim", "Wap", "Turn It Up"];

let songIndex = 0;

// Song detailes

// function
loadSong(songs[songIndex]);
// updated song details

function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `img/${song}.jpg`;
  section.src = `img/${song}.jpg`
}

// Event Listener
// Play
playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// paly

function playSong() {
  musicContainer.classList.add("play");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");
  audio.play();
}


//  pause

function pauseSong() {
    musicContainer.classList.remove("play");
    playBtn.querySelector("i.fas").classList.add("fa-play");
    playBtn.querySelector("i.fas").classList.remove("fa-pause");
    audio.pause();
  }



  // change s song
 prevBtn.addEventListener("click" , prevSong)
 nextBtn.addEventListener("click" , nextSong)
//  playBtn.addEventListener("click", function(){
//      section.classList.add("images")
//  })

function prevSong() {
    songIndex--;
    if(songIndex < 0) {
        songIndex = songs.length -1;

    }
    loadSong(songs[songIndex])
    playSong()
}

function nextSong() {
    songIndex++;
    if(songIndex > songs.length - 1) {
        songIndex = 0;

    }
    loadSong(songs[songIndex])
    playSong()
}



// Time song update

audio.addEventListener("timeupdate", updateProgress)

function updateProgress(e) {
    const  {
        duration , currentTime 
    } = e.srcElement;
    // console.log(duration , currentTime);
    const progressPercent = (currentTime / duration) * 100;
    // console.log(progressPercent);

    progress.style.width = `${progressPercent}%`
}


// click on progress bar 

progressContainer.addEventListener("click", setProgress) 
function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    console.log(clickX);
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}


const btn = document.querySelector('.keyboardButton')
const numbers = ['zero' ,'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
const resultInView = document.querySelector('.keyboardResult');
let result = "";

document.onmousedown = (e) => {
    e.preventDefault();
}


let input = document.querySelector('.text');
btn.addEventListener("click",() => {
    let string = String(input.value);
    let parser = string.split("")
    for (let i = 0; i < parser.length; i++) {
        result += numbers[+parser[i]] + " "
    }
    resultInView.textContent = result;
})