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