document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector(".logo");
    var modal = document.getElementById("timeline-modal");
    var btn = document.getElementById("timeline-btn");
    if (logo) {
        logo.addEventListener('click', () => {
            window.location.href = '/';
        });
    } else {
        console.error("Logo not found.");
    }
    btn.onclick = function() {
        if (modal.style.display === "block") {
          modal.style.display = "none";
        } else {
          modal.style.display = "block";
        }
      }
    
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }

});
VANTA.TOPOLOGY({
  el: "body",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 2000.00,
  minWidth: 50.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0xf9f9f9,
  backgroundColor: 0x0
});
