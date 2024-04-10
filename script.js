document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
  
  
    function checkScroll() {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
          section.classList.add('show');
        }
      });
    }
  
    // Initially check if sections are visible on page load
    checkScroll();
  
    // Check if sections are visible when scrolling
    window.addEventListener('scroll', checkScroll);
  });
  