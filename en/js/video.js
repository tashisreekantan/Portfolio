// video wrap foreach start
const videoWraps = document.querySelectorAll('.video_wrap');


videoWraps.forEach(videoWrap => {
const video = videoWrap.querySelector("#top_video");
const description = videoWrap.querySelector("#description");
const playpause = videoWrap.querySelector("#plyr_playpause");
const reload = videoWrap.querySelector("#plyr_reload");
const playprogress = videoWrap.querySelector(".plyr_progress");
const playtime = videoWrap.querySelector("#plyr_time");
const captionButton = videoWrap.querySelector("#plyr_caption");
const muteButton = videoWrap.querySelector("#plyr_mute");
const loader = videoWrap.querySelector("#loader");
const videoOpenAnime = document.querySelector("#video_section");
const animationLayer = document.querySelector("#animationLayer");
const seekbar = videoWrap.querySelector(".seekbar");
const playerControls = videoWrap.querySelector(".plyr_controls");
const videoprogressBar = videoWrap.querySelector(".progress_bar");
const captions = videoWrap.querySelector("track");
let currentTime = 0;


// loader start
// if(/ipad|iPhone|iPod/.test(navigator.userAgent)) video.autoplay=true;
video.addEventListener("loadeddata", function () {
  loader.style.display = "none";
  videoOpenAnime.classList.add("active_anim");
  playerControls.style.display = "flex";
  video.play();
});
// loader end

// Add description start
video.addEventListener("play", () => {
  if(description!=null){
    description.style.display = "block";
    setTimeout(() => {
      description.style.display = "none";
    }, 20000); // Hide the description after 20 seconds
  }
  
});
// Add description end

// Add playpause satrt
playpause.addEventListener("click", function () {
  if (video.paused) {
    // If the video is paused, play it and change the button class
    video.play();
    playpause.classList.remove("icon-icon_play");
    playpause.classList.add("icon-icon_pause");
  } else {
    // If the video is playing, pause it and change the button class
    video.pause();
    playpause.classList.remove("icon-icon_pause");
    playpause.classList.add("icon-icon_play");
  }
});
// Add playpause end

// player refresh start
reload.addEventListener("click", function () {
  video.currentTime = 0;
});
// player refresh end

// time calculate start
// Get the video element and the input range element

// const progressInput = document.getElementById("plyr_progress");

// // Add an event listener to the video element to update the input range value and the time display
video.addEventListener("timeupdate", (e) => {
  const currentTime = e.target.currentTime;
  seekbar.value = currentTime;
  updateTimeDisplay(currentTime);
});

// Add an event listener to the input range element to update the video time and seek to the corresponding time
seekbar.addEventListener("input", () => {
  video.pause();
});

// Define a function to update the time display in the `plyr_time` div
function updateTimeDisplay(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
    playtime.textContent = formattedTime;
}
// time calculate end

//seekbar new
video.addEventListener("timeupdate", () => {
  seekbar.value = (video.currentTime / video.duration) * seekbar.max;
  videoprogressBar.style.width =
    (video.currentTime / video.duration) * seekbar.max + "%";


  //video pause and play on scroll start
  // get video section element
  const videoSection = video;

  // listen for window scroll event
  if (seekbar.value == 100) {
    playpause.classList.remove("icon-icon_pause");
    playpause.classList.add("icon-icon_play");
    video.pause();
  } else {
    window.addEventListener("scroll", () => {
      const sectionRect = videoSection.getBoundingClientRect();

      if (sectionRect.bottom < 0 || sectionRect.top > window.innerHeight) {
        video.pause();
      } else if (playpause.classList.contains("icon-icon_play")) {
        video.pause();
      } else if (playpause.classList.contains("icon-icon_pause")) {
        video.play();
      }
    });
  }

  //video pause and play on scroll end

  
});

seekbar.addEventListener("change", () => {
  video.currentTime = (video.duration * seekbar.value) / seekbar.max;
  videoprogressBar.style.width =
    (video.currentTime / video.duration) * seekbar.max + "%";
  // console.log(playpause.classList,"classssssss");
  if (playpause.classList.contains("icon-icon_play")) {
    video.pause();
  } else {
    video.play();
  }
});
//seekbar new

// mute and unmute video start
muteButton.addEventListener("click", function () {
  if (video.muted) {
    video.muted = false;
    muteButton.classList.remove("icon-icon_mute");
    muteButton.classList.add("icon-icon_speaker");
  } else {
    video.muted = true;
    muteButton.classList.remove("icon-icon_speaker");
    muteButton.classList.add("icon-icon_mute");
  }
});
// mute and unmute video end

// subtitle start

captionButton.addEventListener("click", () => {
  const textTrack = video.textTracks[0];
  if (textTrack.mode === "showing") {
    captionButton.classList.remove("show");
    textTrack.mode = "hidden";
  } else {
    textTrack.mode = "showing";
    captionButton.classList.add("show");
  }
});
// subtitle end

// video mouse out and over satrt
playerControls.addEventListener("mouseover", () => {
  playerControls.classList.add('visible')

});
animationLayer.addEventListener("mouseover", () => {
  playerControls.classList.add('visible')
});
video.addEventListener("mouseover", () => {
  playerControls.classList.add('visible')
});

playerControls.addEventListener("mouseout", () => {
  playerControls.classList.remove('visible')

});
animationLayer.addEventListener("mouseout", () => {
  playerControls.classList.remove('visible')
});
video.addEventListener("mouseout", () => {
  playerControls.classList.remove('visible')
});
// video mouse out and over end

// Pause the video on mouseout

// video mouse out and over end

// video ended time block strat
// Add an event listener to the video element to detect when the video has finished playing
video.addEventListener("ended", function () {
  playprogress.style.visibility = "hidden";
  playtime.style.visibility = "hidden";
  playpause.classList.remove("icon-icon_pause");
  playpause.classList.add("icon-icon_play");
});
// video ended time block end

});
// video wrap foreach end


