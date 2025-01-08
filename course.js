// const videos = [
//   // { video: document.getElementById('hero-video'), button: document.getElementById('hero-play-btn') },
//   { video: document.getElementById('why-video'), button: document.getElementById('why-play-btn') }
// ];

// videos.forEach(({ video, button }) => {
//   // Show the button when the video is paused
//   video.addEventListener('pause', () => {
//     button.style.display = 'flex';
//     video.style.filter = 'brightness(0.7)';
//   });

//   // Hide the button when the video is playing and enable controls
//   video.addEventListener('play', () => {
//     button.style.display = 'none';
//     video.controls = true; // Enable controls when the video starts
//     video.style.filter = 'brightness(1)';
//   });

//   // Play the video when the button is clicked
//   button.addEventListener('click', () => {
//     video.play();
//     video.controls = false; // Ensure controls are disabled initially
//   });
// });



const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');
  const arrow = item.querySelector('.arrow');

  question.addEventListener('click', () => {
    const isOpen = answer.classList.contains('open');

    // Close all open answers
    document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'));
    document.querySelectorAll('.arrow').forEach(a => a.classList.remove('open'));

    // Toggle current item
    if (!isOpen) {
      answer.classList.add('open');
      arrow.classList.add('open');
    }
  });
});

// const floatingFormbuttons = document.querySelectorAll('.toggle-floating-form');

// // Select the div with the id "floating-form"
// const floatingForm = document.getElementById('floating-form');

// // Add event listeners to all buttons
// floatingFormbuttons.forEach(button => {
//     button.addEventListener('click', () => {
//         // Toggle the "opened" class on the floating form
//         floatingForm.classList.toggle('opened');
//     });
// });


// const brochureFormbuttons = document.querySelectorAll('.toggle-brochure-form');

// // Select the div with the id "floating-form"
// const brochureForm = document.getElementById('brochure-form');

// // Add event listeners to all buttons
// brochureFormbuttons.forEach(button => {
//     button.addEventListener('click', () => {
//         // Toggle the "opened" class on the floating form
//         brochureForm.classList.toggle('opened');
//     });
// });
const splide = new Splide('.students-testimonials-splide', {
  type: 'loop', // Enable loop functionality
  perPage: 1, // Default number of slides per view
  gap: '30px',
  pagination: true, // Enable pagination
  arrows: true, // Enable navigation arrows
}).mount();
