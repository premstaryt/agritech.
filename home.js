document.addEventListener("DOMContentLoaded", function () {
    const headerRight = document.querySelector(".header-right");
    const mainHeader = document.querySelector(".main-header");

    hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
});
// Function to change background image
function changeBannerBackground() {
    const banner = document.querySelector('.banner');
    const images = ['drones.jpg', 'bg1.jpg', 'bg2.jpg'];
    let currentIndex = 0;

    function updateBackground() {
        banner.style.backgroundImage = `url('${images[currentIndex]}')`;
        currentIndex = (currentIndex + 1) % images.length;
    }

    // Initial call to set the first image
    updateBackground();

    // Change image every 5 seconds (5000 milliseconds)
    setInterval(updateBackground, 3000);
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', changeBannerBackground);


