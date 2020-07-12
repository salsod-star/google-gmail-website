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



// let heroContent = {
//     headings: ['Get more done with Gmail', 'Write emails faster', 'A faster way to reply'],
//     paragraph: {
//         p1: "Join video meetings with live captioning and screen sharing for up to 100 people-now with Google Meets in Gmail.",
//         p2: "Get suggestions as you type. Simply hit tab to accept and you're done.",
//         p2: "Respond to emails faster with pre-suggested response that sound just like you."
//     }
// };

// let h1 = document.querySelector('.hero-content h1');
// let para = document.querySelector('.hero-content p');
// let link = document.querySelector('.anchor-hero-link');
// let heroImage = document.querySelector('.hero-image img')
// let headings = heroContent.headings;
// let paragraphs = heroContent.paragraph;



// function next() {
//     for (let i = 0; i < headings.length; i++) {
       
//     }
// }