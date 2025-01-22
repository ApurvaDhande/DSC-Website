
document.querySelectorAll('.read-more-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        const fullDesc = btn.previousElementSibling; 
        const shortDesc = fullDesc.previousElementSibling; 
        if (fullDesc.style.display === 'none') {
            fullDesc.style.display = 'block'; 
            shortDesc.style.display = 'none'; 
            btn.textContent = 'Read Less';
        } else {
            fullDesc.style.display = 'none';
            shortDesc.style.display = 'block'; 
            btn.textContent = 'Read More';
        }
    });
});



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
  
    if (currentChar < text.length) {
      // Type text and name together
      quoteEl.textContent += text[currentChar];
      nameEl.textContent += name[currentNameChar] || '';
      currentChar++;
      currentNameChar++;
      setTimeout(typeEffect, 100); // Typing speed
    } else {
      // Pause and then clear content smoothly
      setTimeout(() => {
        quoteEl.style.opacity = 0;
        nameEl.style.opacity = 0;
        dots[currentTestimonial].classList.remove('active');
        setTimeout(clearEffect, 500); // Delay for fade-out transition
      }, 2000); // Pause before fading
    }
  }
  
  function clearEffect() {
    // Clear text, name, and reset indices
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
  
  // Initialize dot indicators
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentTestimonial);
  });
  
  // Start typing animation
  typeEffect();
  



