const videoContainer = document.querySelector("#video-container");
const video = document.querySelector(".video");
const close = document.querySelector(".close");

function ShowVideo(links) {
  videoContainer.style.display = "block";
  video.src = links;
}

close.onclick = () => {
  videoContainer.style.display = "none";
};
