document.addEventListener("DOMContentLoaded", () => {
const logo=document.getElementById("logo")

if (logo) {
    logo.addEventListener('click', () => {
        window.location.href = '/';
    });
} else {
    console.error("Logo not found.");
}


});
document.getElementById("view-project-button").addEventListener("click", function() {
    document.getElementById("video-modal").style.display = "block";
  });
  
  document.getElementById("close-modal-button").addEventListener("click", function() {
    document.getElementById("video-modal").style.display = "none";
    document.getElementById("modal-video").pause();
  });