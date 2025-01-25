
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.read-more-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
          const eventCard = btn.closest('.upcoming-event-card');
          const shortDesc = eventCard.querySelector('.short-desc');
          const fullDesc = eventCard.querySelector('.full-desc');

          if (fullDesc.style.display === 'none') {
              fullDesc.style.display = 'block'; // Show full description
              shortDesc.style.display = 'none'; // Hide short description
              btn.textContent = 'Read Less';    // Update button text
          } else {
              fullDesc.style.display = 'none'; // Hide full description
              shortDesc.style.display = 'block'; // Show short description
              btn.textContent = 'Read More';    // Update button text
          }
      });
  });
});




document.addEventListener('DOMContentLoaded', () => {
  const testimonials = [
    { 
      text: "Attending DSC events has been a game-changer for me. The RoboRace helped me build skills and think critically.", 
      name: "Arjun Kumar"
    },
    { 
      text: "The Web Technologies Workshop gave me confidence to create modern websites.", 
      name: "Nisha Patel"
    },
    { 
      text: "The 24-Hours Hackathon was the highlight of my learning journey. It was challenging and rewarding.", 
      name: "Rahul Sharma"
    }
  ];

  const quoteEl = document.querySelector('.quote');
  const nameEl = document.querySelector('.testimonial-name');
  const dots = document.querySelectorAll('.dot');

  let currentTestimonial = 0;
  let currentChar = 0;
  let currentNameChar = 0;

  function typeEffect() {
    const { text, name } = testimonials[currentTestimonial];

    // Type the quote
    if (currentChar < text.length) {
      quoteEl.textContent += text[currentChar];
      currentChar++;
      setTimeout(typeEffect, 100);  // Continue typing the quote
    } 
    // Once quote is done, start typing the name
    else if (currentChar === text.length && currentNameChar < name.length) {
      nameEl.textContent += name[currentNameChar];
      currentNameChar++;
      setTimeout(typeEffect, 100);  // Continue typing the name
    } 
    // Once the quote and name are both done, clear the text with delay
    else if (currentChar === text.length && currentNameChar === name.length) {
      setTimeout(() => {
        quoteEl.style.opacity = 0;  // Fade out the quote
        nameEl.style.opacity = 0;   // Fade out the name
        dots[currentTestimonial].classList.remove('active');
        setTimeout(clearEffect, 500);  // Wait for fade before clearing
      }, 2000); // Pause before fading
    }
  }

  function clearEffect() {
    // Clear the quote and name, reset typing indices
    quoteEl.textContent = '';
    nameEl.textContent = '';
    quoteEl.style.opacity = 1;
    nameEl.style.opacity = 1;
    currentChar = 0;
    currentNameChar = 0;

    // Move to the next testimonial
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    dots[currentTestimonial].classList.add('active'); // Highlight the next dot

    // Start typing the next testimonial
    typeEffect();
  }

  // Initialize the dots and set the first dot as active
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentTestimonial);
  });

  // Start typing the first testimonial
  typeEffect();
});


