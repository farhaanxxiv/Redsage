const video = document.getElementById('hero-video');
const playButton = document.getElementById('hero-play-btn');

// Show the button when the video is paused
video.addEventListener('pause', () => {
  playButton.style.display = 'flex';
  video.style.filter = 'brightness(0.7)';

});

// Hide the button when the video is playing and enable controls
video.addEventListener('play', () => {
  playButton.style.display = 'none';
  video.controls = true; // Enable controls when the video starts
  video.style.filter = 'brightness(1)';


});

// Play the video when the button is clicked
playButton.addEventListener('click', () => {
  video.play(); 
  video.controls = false; // Ensure controls are disabled initially
});


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