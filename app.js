var images = ["images/snaprim.webp", "images/snaplegs.webp", "images/net consistency.webp"];
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

    var buttons = document.querySelectorAll(".slider1-nav a");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }

    buttons[currentImageIndex].classList.add("active");
}