document.addEventListener("DOMContentLoaded", () => {
    const centeredContent = document.querySelector('.centered-content');
    const introTextElement = document.getElementById("intro-text");
    const LinkedIn = document.getElementById("LinkedIn");
    const viewResumeBtn = document.getElementById("viewResumeBtn");
    const customCursor = document.getElementById("custom-cursor");
    const menuDots = document.getElementById("menu-dots");

    if (centeredContent && introTextElement) {
        centeredContent.addEventListener('mousemove', (e) => {
            const xPos = (e.clientX / window.innerWidth - 0.5) * 30;
            const yPos = (e.clientY / window.innerWidth - 0.5) * 30;
            centeredContent.style.backgroundPosition = `${xPos}px ${yPos}px`;
        });
        const introText = "Hi,Welcome to my page \n I am Ziad Elraggal,\n a Computer Engineering Student";
        setTimeout(() => typeText(introTextElement, introText, 0), 1000); 
    } else {
        console.error("Element with id 'intro-text' or 'centered-content' not found. ");
    }

    if (LinkedIn) {
        LinkedIn.addEventListener('click', () => {
            window.open('https://www.linkedin.com/in/ziad-elraggal-693a73290/', '_blank');
        });
    } else {
        console.error("Element with id 'linkedin' not found.");
    }

    if (viewResumeBtn) {
        viewResumeBtn.addEventListener('click', () => {
            window.open('/public/Files/Resume.pdf', '_blank');
        });
    } else {
        console.error("Element with id 'Resume' not found.");
    }

    const menuDropdown = document.getElementById("menu-dropdown");

    if (menuDots && menuDropdown) {
        const toggleMenu = () => {
            if (menuDropdown.style.display === 'flex') {
                menuDropdown.style.display = 'none';
                menuDropdown.style.opacity = 0;
                menuDropdown.style.transform = 'translateY(-10px)';
            } else {
                menuDropdown.style.display = 'flex';
                menuDropdown.style.opacity = 1;
                menuDropdown.style.transform = 'translateY(0)';
            }
        };
    
        menuDots.addEventListener('click', toggleMenu);
    
        document.addEventListener('click', (event) => {
            if (!menuDots.contains(event.target) && !menuDropdown.contains(event.target)) {
                menuDropdown.style.display = 'none';
                menuDropdown.style.opacity = 0;
                menuDropdown.style.transform = 'translateY(-10px)';
            }
        });
    } else {
        console.error("Element with id 'menu-dots' or 'menu-dropdown' not found.");
    };
});

function typeText(element, text, index) {
    if (index < text.length) {
        const currentChar = text.charAt(index);
        const highlightedChar = document.createElement('span');
        highlightedChar.textContent = currentChar;

        if (currentChar !== ' ' && currentChar !== '\n') {
            highlightedChar.classList.add('highlighted-char');
        }

        element.appendChild(highlightedChar);

        index++;

        const typingSpeed = Math.floor(Math.random() * 50) + 50;
        setTimeout(() => typeText(element, text, index), typingSpeed);

        }
    }


    document.addEventListener("DOMContentLoaded", () => {
        const loadingScreen = document.getElementById("loading-screen");
        VANTA.BIRDS({
            el: "#centered-content",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            background: 0x7192f,
            color1: 0xff0000,
            color2: 0xd1ffD,
            birdSize: 1.5,
            wingSpan: 25.00,
            speedLimit: 3.00,
        });


});

function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
    
    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}

window.onload = function() {
var mobileWarning = document.getElementById('mobileWarning');

var isMobile = detectMob();

if (isMobile) {
    mobileWarning.style.display = 'block';
}
};
