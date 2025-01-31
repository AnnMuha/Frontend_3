let slideIndex = 0;
let slideInterval;

function showSlide(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }

    for (let slide of slides) {
        slide.style.display = "none";
    }
    for (let dot of dots) {
        dot.className = dot.className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
}
//змінює слайд вперед або назад
function changeSlide(n) {
    clearInterval(slideInterval);
    slideIndex += n;
    showSlide(slideIndex);
    startSlideshow();
}
//відображає слайд, обраний користувачем
function currentSlide(n) {
    clearInterval(slideInterval);
    slideIndex = n - 1;
    showSlide(slideIndex);
    startSlideshow();
}
//запускає автоматичну зміну слайдів:
function startSlideshow() {
    slideInterval = setInterval(() => {
        slideIndex++;
        showSlide(slideIndex);
    }, 3000); // Інтервал зміни слайдів – 3 секунди
}

showSlide(slideIndex);
startSlideshow();