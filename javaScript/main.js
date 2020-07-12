let slides = document.querySelectorAll('.hero_text-container');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let auto = false;
let slideInterval = 5000;

function nextSlide() {
    let current = document.querySelector('.current');
    current.classList.remove('current');

    if (current.nextElementSibling) {
        current.nextElementSibling.classList.add('current');
    } else {
        slides[0].classList.add('current');
    }
}

function prevSlide() {
    // Get current slide
    let current = document.querySelector('.current');
    // Remove current slide
    current.classList.remove('current');

    if (current.previousElementSibling) {
        current.previousElementSibling.classList.add('current');
    } else {
        slides[slides.length - 1].classList.add('current')
    }
    setTimeout(() => current.classList.remove('current'))
}

next.addEventListener('click', e => {
    nextSlide();
});

prev.addEventListener('click', e => {
    prevSlide();
});
