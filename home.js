
const swipers = document.querySelectorAll('.programs-swiper');
swipers.forEach((swiper) => {

  new Splide(swiper, {
    // type: 'loop', // Enable loop functionality
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



// new Splide('.trainers-splide', {
//     // type: 'loop', // Enable loop functionality
//     perPage: 1, // Default number of slides per view
//     gap: '30px',
//     pagination: true, // Enable pagination
//     arrows: true, // Enable navigation arrows
// }).mount();



// gsap.registerPlugin(ScrollTrigger);

// const timelineBar = document.querySelector(".placed .timeline .bar");

// // Desktop animation: left to right
// gsap.fromTo(
//   timelineBar,
//   { scaleX: 0, transformOrigin: "left center" },
//   {
//     scaleX: 1,
//     ease: "linear",
//     scrollTrigger: {
//       trigger: ".placed",
//       start: "top 80%",
//       end: "bottom 50%",
//       scrub: true,
//     },
//   }
// );

// // Mobile animation: top to bottom
// ScrollTrigger.matchMedia({
//   "(max-width: 900px)": () => {
//     gsap.fromTo(
//       timelineBar,
//       { scaleY: 0, transformOrigin: "top center" },
//       {
//         scaleY: 1,
//         ease: "linear",
//         scrollTrigger: {
//           trigger: ".placed",
//           start: "top 80%",
//           end: "bottom 20%",
//           scrub: true,
//         },
//       }
//     );
//   },
// });



const splide = new Splide('.students-testimonials-splide', {
  type: 'loop', // Enable loop functionality
  perPage: 1, // Default number of slides per view
  gap: '30px',
  pagination: true, // Enable pagination
  arrows: true, // Enable navigation arrows
}).mount();

const heroSplide = new Splide('.hero-splide', {
  perPage: 1, // Default number of slides per view
  gap: '30px',
  pagination: false, // Enable pagination
  arrows: false, // Enable navigation arrows,
  drag:false
}).mount();


const heroCourseButtons = document.querySelectorAll('.hero-course-btn');

heroCourseButtons.forEach(button => {
  button.onclick = () => {
      // Get the value of the 'data-attr' attribute
      const selectedCourse = button.getAttribute('data-course');

      if(selectedCourse == 'devops'){
        heroSplide.go(0)
      }else if(selectedCourse == 'fullstack'){
        heroSplide.go(1)
      }else if(selectedCourse == 'data'){
        heroSplide.go(2)
      }else if(selectedCourse == 'project'){
        heroSplide.go(3)
      }
  };
});
