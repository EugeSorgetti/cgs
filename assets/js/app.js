const videoContainer = document.querySelector("#video-container");
const video = document.querySelector(".video");
const close = document.querySelector(".close");

const _videoContainer = document.querySelector("#video-container2");
const _video = document.querySelector(".video2");
const _close = document.querySelector(".close2");

function ShowSlider1(links) {
  videoContainer.style.display = "block";
  video.src = links;
}

function ShowSlider2(links) {
  _videoContainer.style.display = "block";
  _video.src = links;
}

close.onclick = () => {
  videoContainer.style.display = "none";
};

_close.onclick = () => {
  _videoContainer.style.display = "none";
};
