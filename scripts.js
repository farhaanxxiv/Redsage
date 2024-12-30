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



let navToggle = document.querySelector('.nav-toggle')
let bars = document.querySelectorAll('.bar')

function toggleHamburger(e) {
    bars.forEach(bar => bar.classList.toggle('x'))
    document.getElementById('phone-sidebar').classList.toggle('opened')
}

