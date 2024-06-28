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
