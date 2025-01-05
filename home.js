
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

// const buttons = document.querySelectorAll('.programs .categories button');

// // Add click event listeners for category buttons
// buttons.forEach((button) => {
//     button.addEventListener('click', () => {
//         // Remove 'active' class from all buttons
//         buttons.forEach((btn) => btn.classList.remove('active'));

//         // Add 'active' class to the clicked button
//         button.classList.add('active');

//         // Hide all Swipers
//         swipers.forEach((swiper) => swiper.classList.add('hidden'));

//         // Show the targeted Swiper
//         const targetClass = button.getAttribute('data-target');
//         const targetSwiper = document.querySelector(`.${targetClass}`);
//         if (targetSwiper) {
//             targetSwiper.classList.remove('hidden');
//         }
//     });
// });

// Select all buttons with the class "open-floating-form"


// new Splide('.trainers-splide', {
//     // type: 'loop', // Enable loop functionality
//     perPage: 1, // Default number of slides per view
//     gap: '30px',
//     pagination: true, // Enable pagination
//     arrows: true, // Enable navigation arrows
// }).mount();
 