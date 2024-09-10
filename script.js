let testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

function showTestimonial() {
  testimonials.forEach((testimonial, index) => {
    if (index === currentTestimonial) {
      testimonial.style.display = 'block';
    } else {
      testimonial.style.display = 'none';
    }
  });
}

showTestimonial();

setInterval(() => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial();
}, 4000); // Change testimonial every 4 seconds
// Create a container for the bullets
const bulletContainer = document.createElement('div');
bulletContainer.className = 'bullet-container';
document.querySelector('.testimonial-container').appendChild(bulletContainer);

// Create bullets for each testimonial
testimonials.forEach((_, index) => {
  const bullet = document.createElement('span');
  bullet.className = 'bullet';
  bullet.addEventListener('click', () => {
    currentTestimonial = index;
    showTestimonial();
    updateBullets();
  });
  bulletContainer.appendChild(bullet);
});

// Function to update active bullet
function updateBullets() {
  const bullets = document.querySelectorAll('.bullet');
  bullets.forEach((bullet, index) => {
    if (index === currentTestimonial) {
      bullet.classList.add('active');
    } else {
      bullet.classList.remove('active');
    }
  });
}

// Modify showTestimonial function to include bullet update
function showTestimonial() {
  testimonials.forEach((testimonial, index) => {
    if (index === currentTestimonial) {
      testimonial.style.display = 'block';
      testimonial.style.opacity = '0';
      setTimeout(() => {
        testimonial.style.transition = 'opacity 0.5s ease-in-out';
        testimonial.style.opacity = '1';
      }, 50);
    } else {
      testimonial.style.display = 'none';
    }
  });
  updateBullets();
}

// Call updateBullets initially
updateBullets();

// Function to create star rating
function createStarRating(rating) {
  const starContainer = document.createElement('div');
  starContainer.className = 'star-rating';
  
  for (let i = 0; i < 5; i++) {
    const star = document.createElement('span');
    star.className = 'star';
    star.innerHTML = i < rating ? '★' : '☆';
    starContainer.appendChild(star);
  }
  
  return starContainer;
}

// Add star rating to each testimonial
testimonials.forEach((testimonial) => {
  const firstParagraph = testimonial.querySelector('p');
  if (firstParagraph) {
    const starRating = createStarRating(5); // 5-star rating
    firstParagraph.parentNode.insertBefore(starRating, firstParagraph);
  }
});
// Add event listener to buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        // Add animation effect here
        console.log('Button clicked!');
    });
});
// Function to apply hover animation to text
function applyTextHoverAnimation() {
  const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6');

  textElements.forEach(element => {
    element.addEventListener('mouseover', () => {
      element.style.transition = 'transform 0.3s ease';
      element.style.transform = 'translateY(-5px)';
    });

    element.addEventListener('mouseout', () => {
      element.style.transition = 'transform 0.3s ease';
      element.style.transform = 'translateY(0)';
    });
  });
}

// Call the function to apply the animation
applyTextHoverAnimation();

   // Create the "Back to Top" button
   const backToTopButton = document.createElement('button');
   backToTopButton.textContent = '↑';
   backToTopButton.style.cssText = `
     position: fixed;
     bottom: 20px;
     right: 20px;
     padding: 10px 15px;
     background-color: #4CAF50;
     color: white;
     border: none;
     border-radius: 5px;
     cursor: pointer;
     font-size: 18px;
     display: none;
   `;
   document.body.appendChild(backToTopButton);

   // Show button when user scrolls down 100px
   window.addEventListener('scroll', () => {
     if (window.pageYOffset > 100) {
       backToTopButton.style.display = 'block';
     } else {
       backToTopButton.style.display = 'none';
     }
   });

   // Smooth scroll to top when button is clicked
   backToTopButton.addEventListener('click', () => {
     window.scrollTo({
       top: 0,
       behavior: 'smooth'
     });
   });
   document.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelectorAll('.testimonial');
    const imageCircles = document.querySelectorAll('.image-circle');

    testimonials.forEach((testimonial, index) => {
      const imageCircle = imageCircles[index];
      if (imageCircle) {
        const clonedImageCircle = imageCircle.cloneNode(true);
        testimonial.insertBefore(clonedImageCircle, testimonial.firstChild);
      }
    });

    // Remove the separate image-circles-container
    const imageCirclesContainer = document.querySelector('.image-circles-container');
    if (imageCirclesContainer) {
      imageCirclesContainer.remove();
    }
  });

