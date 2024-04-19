

let lastScrollTop = 0;


window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    let navr = document.querySelector(".nav-container");

    if (scrollPosition > lastScrollTop) {
        // Scrolling down
        navr.classList.add('nav-container-sticky');
        // Start counting when scrolling down
        incrementCounter();
    } else {
        // Scrolling up
        navr.classList.remove('nav-container-sticky');
    }

    // Update last scroll position
    lastScrollTop = scrollPosition;
});

// Get the counter element
var counterElement = document.getElementById('counter');

// Function to increment the counter from 1 to 100
function incrementCounter() {
    var currentCount = parseInt(counterElement.textContent);
    if (currentCount < 6000) {
        counterElement.textContent = currentCount + 1;
        setTimeout(incrementCounter, 30); // Change the timeout value (in milliseconds) to control the speed of counting
    }
}

// for nav bar.....................
let btn = document.querySelector('.bar');
let nav = document.querySelector(".navbar");

let bar1 = document.querySelector(".fa-bars");
let clouse = document.querySelector(".fa-times");

function toggleActive() {
    nav.classList.toggle("active");
    bar1.classList.toggle("active");
    clouse.classList.toggle("active");
}

btn.addEventListener("click", toggleActive);




document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const p = document.querySelector("p"); // Removed .value

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        if (name && email && subject && message) {
            p.innerText = "rajesh"; // Changed to p.innerText
            contactForm.reset();
        } else {
            p.innerText = "not recive"; // Changed to p.innerText
        }
    });
});






//animation start here

ScrollReveal({
     reset: true,
     distance:'60px',
     duration:2500,
     delay:400
     });

     ScrollReveal().reveal('.about-plateform , #gov-s h2', { delay: 500,origin: 'top' });
     ScrollReveal().reveal('.about-plateform h1,.about-plateform h3,.about-plateform p, #gov-s p',
     { delay: 700,origin: 'bottom' });

     ScrollReveal().reveal('#gov-f img , #inner-gov', { delay: 500,origin: 'left' });

     ScrollReveal().reveal('#gov-s h3', { delay: 500,origin: 'right' });

    //  scroll top 500
    ScrollReveal().reveal('#govt-scheme-about .about-scheme', { delay: 500,origin: 'top' });

    //scroll top 600
    ScrollReveal().reveal('', { delay: 500,origin: 'top' });

    //scroll top 700
    ScrollReveal().reveal('.h2,.for-health h2,', { delay: 600,origin: 'top' });

    //scroll top 800
    ScrollReveal().reveal('', { delay: 600,origin: 'top' });

    // scroll leftv500
    ScrollReveal().reveal('.ticket, .for-health', { delay: 500,origin: 'left' });
    
    //scroll left 600
    ScrollReveal().reveal('.far-fast-section,.life-insurence h3, .car-left, .bank img', { delay: 600,origin: 'left' });
    ScrollReveal().reveal('.cards .my-cards,.life-insurence .life', { delay: 600,origin: 'left',interval:200 });

    //scroll left 700
    ScrollReveal().reveal('.ser-h3, .customer-last img', { delay: 700,origin: 'left' });

    //scroll right 500
    ScrollReveal().reveal('.education, .car-right img, .bank-right', { delay: 500,origin: 'right' });

    //scroll right 600
    ScrollReveal().reveal('.far-last-section', { delay: 600,origin: 'right' });
    ScrollReveal().reveal('.importent-doc', { delay: 600,origin: 'right',interval:200 });

    //scroll right 700
    ScrollReveal().reveal('.nsp, .service-top h1, .for-health p', { delay: 700,origin: 'right' });

    //scroll botton 500
    ScrollReveal().reveal('.gallery img', { delay: 500,origin: 'bottom' });

    //scroll botton 600
    ScrollReveal().reveal('.text-center, .far-middle-section img, .policy, .life-insurence p, .car-insurence-type,.satisfied,.customer-first', 
    { delay: 600,origin: 'bottom' });

    //scroll botton 700
    ScrollReveal().reveal('.about-scheme p,.health-btn', { delay: 700,origin: 'bottom' });