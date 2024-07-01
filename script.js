/***************** Slide SHow ******************/

let slideIndex = 1;
let slideTimer;

document.addEventListener('DOMContentLoaded', function() {
    showSlides(slideIndex);
    startSlideShow();
});

function plusSlides(n) {
    clearTimeout(slideTimer); // Clear the existing timer
    showSlides(slideIndex += n);
    startSlideShow(); // Restart the slideshow after manual change
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

function startSlideShow() {
    slideTimer = setTimeout(function() {
        plusSlides(1);
    }, 4000); // Change slide every 4000 milliseconds
}

function moveSlide(n) {
  clearTimeout(slideTimer); // Clear the existing timer
  showSlides(slideIndex += n);
  startSlideShow(); // Restart the slideshow after manual navigation
}