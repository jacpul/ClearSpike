var images = ["images/snaprim.webp", "images/snaplegs.webp", "images/net consistency.webp"];
var texts = [
    {
        title: "Interlocking Rims",
        description: "Our rims slide into each other, preventing any twisting and turning to ensure the net is always even and flat. Plus, they have an interlocking system that makes it easy to assemble and disassemble."
    }, 
    {
        title: "Snap Fit Legs",
        description: "The legs connect to the bottoms of the rim with flexible tabs designed to unsnap if someone falls on the net. Plus, ball holder to keep your balls in place when playing on a hard surface."
    }, 
    {
        title: "Consistent Nets",
        description: "Thicker rims allow you to properly tightne the net (without turning it into an oval), creating a bigger \"sweet spot\" in the middle. Plus, our set is twice as heavy as our competitors preventing it from moving mid-play."
    }
];
var currentImageIndex = 0;

function nextImage(index) {
    if (index !== undefined) {
        currentImageIndex = index;
    } else {
        currentImageIndex++;
    }
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    document.getElementById("sliderImage").src = images[currentImageIndex];
    document.querySelector(".slider1-textbox").innerText = texts[currentImageIndex];

    var buttons = document.querySelectorAll(".slider1-nav a");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }

    buttons[currentImageIndex].classList.add("active");

    var textbox = document.querySelector(".slider1-textbox");
    textbox.innerHTML = '';

    var title = document.createElement('p');
    title.className = 'title';
    title.innerText = texts[currentImageIndex].title;
    textbox.appendChild(title);

    var description = document.createElement('p');
    description.className = 'description';
    description.innerText = texts[currentImageIndex].description;
    textbox.appendChild(description);
}

window.onload = function() {
    nextImage(0);
};

const container = document.querySelector('.ba-container');
document.querySelector('.ba-slider').addEventListener('input', (e) => {
    container.style.setProperty('--position', `${e.target.value}%`);
});

document.addEventListener('DOMContentLoaded', function() {
    const sliderLine = document.querySelector('.ba-slider-line');
    const imageContainer = document.querySelector('.ba-image-container');

    function matchHeights() {
        const containerHeight = imageContainer.offsetHeight;
        sliderLine.style.height = `${containerHeight}px`;
    }

    // Match heights initially and on window resize
    matchHeights();
    window.addEventListener('resize', matchHeights);
});