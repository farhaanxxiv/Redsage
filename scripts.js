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


new Splide('.masterclass-swiper', {
    // type: 'loop', // Enable loop functionality
    perPage: 4, // Default number of slides per view
    gap: '30px',
    breakpoints: {
        1200: {
            perPage: 3,
            spaceBetween: 20, // Adjust spacing as needed
        },
        900: {
            perPage: 2,
            gap: '20px', // Adjust spacing between slides
        },
        600: {
            perPage: 1,
            gap: '10px', // Adjust spacing between slides
        },

    },
    pagination: true, // Enable pagination
    arrows: true, // Enable navigation arrows
}).mount();
new Splide('.about-swiper', {
    // type: 'loop', // Enable loop functionality
    perPage: 1, // Default number of slides per view
    gap: '30px',
    pagination: true, // Enable pagination
    arrows: true, // Enable navigation arrows
}).mount();



let navToggle = document.querySelector('.nav-toggle')
let bars = document.querySelectorAll('.bar')

function toggleHamburger(e) {
    bars.forEach(bar => bar.classList.toggle('x'))
    document.getElementById('phone-sidebar').classList.toggle('opened')
}

navToggle.addEventListener('click', toggleHamburger)

const swipers = document.querySelectorAll('.programs-swiper');
swipers.forEach((swiper) => {

    new Splide(swiper, {
        type: 'loop', // Enable loop functionality
        perPage: 3, // Default number of slides per view
        gap: '30px',
        breakpoints: {
            1000: {
                perPage: 2,
                gap: '20px', // Adjust spacing between slides
            },
            600: {
                perPage: 1,
                gap: '10px', // Adjust spacing between slides
            },

        },
        pagination: true, // Enable pagination
        arrows: true, // Enable navigation arrows
    }).mount();

});

const buttons = document.querySelectorAll('.programs .categories button');

// Add click event listeners for category buttons
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // Remove 'active' class from all buttons
        buttons.forEach((btn) => btn.classList.remove('active'));

        // Add 'active' class to the clicked button
        button.classList.add('active');

        // Hide all Swipers
        swipers.forEach((swiper) => swiper.classList.add('hidden'));

        // Show the targeted Swiper
        const targetClass = button.getAttribute('data-target');
        const targetSwiper = document.querySelector(`.${targetClass}`);
        if (targetSwiper) {
            targetSwiper.classList.remove('hidden');
        }
    });
});