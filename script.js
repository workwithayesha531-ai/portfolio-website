```javascript
// =========================
// MOBILE MENU
// =========================

let menuBtn = document.getElementById("menuBtn");
let navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});


// Close menu after clicking a link

let links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});


// =========================
// GSAP HOME ANIMATION
// =========================

// Welcome text - Left se
gsap.from(".welcome", {
    x: -120,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});


// Ayesha name - Right se
gsap.from(".hero-name", {
    x: 120,
    opacity: 0,
    duration: 1.2,
    delay: 0.3,
    ease: "power3.out"
});


// Front-End heading - Left se
gsap.from(".hero-title", {
    x: -120,
    opacity: 0,
    duration: 1.1,
    delay: 0.6,
    ease: "power3.out"
});


// Description - Right se
gsap.from(".hero-description", {
    x: 100,
    opacity: 0,
    duration: 1,
    delay: 0.9,
    ease: "power3.out"
});


// Buttons - Neeche se
gsap.from(".hero-buttons", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 1.2,
    ease: "power3.out"
});


// Profile picture - Right se
gsap.from(".hero-image", {
    x: 120,
    opacity: 0,
    duration: 1.3,
    delay: 0.4,
    ease: "power3.out"
});


// =========================
// CONTACT FORM
// =========================

let contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    alert("Thank you " + name + "! Your message has been submitted.");

    contactForm.reset();
});
```