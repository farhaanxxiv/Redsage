const input = document.querySelectorAll(".phone-with-country");

input.forEach(inn => {
    window.intlTelInput(inn, {
        initialCountry: "in",

        loadUtils: () => import("https://cdn.jsdelivr.net/npm/intl-tel-input@25.2.0/build/js/utils.js"),
    });


})

const toggleNavbars = document.querySelectorAll('.toggle-navbar');


toggleNavbars.forEach(navbar => {
    navbar.addEventListener('click', () => {
        // const content = navbar.querySelector('.content')
        navbar.classList.toggle('opened')
    })
});



let navToggle = document.querySelector('.nav-toggle');
let bars = document.querySelectorAll('.bar');
let navbarLinks = document.querySelectorAll('nav a');

// Iterate over the navbar links properly
navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Add functionality here if needed, like closing the navbar or navigation logic
        console.log(`Clicked on ${link.textContent}`);
        toggleHamburger()
    });
});

function toggleHamburger() {
    bars.forEach(bar => bar.classList.toggle('x'));
    document.getElementById('phone-sidebar').classList.toggle('opened');
}

// Add event listener for the toggle button
// navToggle.addEventListener('click', toggleHamburger);


  const floatingFormbuttons = document.querySelectorAll('.toggle-floating-form');

// Select the div with the id "floating-form"
const floatingForm = document.getElementById('floating-form');

// Add event listeners to all buttons
floatingFormbuttons.forEach(button => {
    button.addEventListener('click', () => {
        // Toggle the "opened" class on the floating form
        floatingForm.classList.toggle('opened');
    });
});