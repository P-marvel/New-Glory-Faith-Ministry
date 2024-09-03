
document.querySelector('a[href="sermon.html"]').addEventListener('click', function(event) {
    console.log('Link clicked');
});
   document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    const mobileMenu = document.getElementById('mobile-menu');
    const nav = document.getElementById('nav-links');

    navLinks.forEach(link => {
  const href = link.getAttribute('href');
  if (!href.endsWith('.html')) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = e.target.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 60, // Adjust for sticky header
          behavior: 'smooth'
        });
      }

      // Close the mobile menu after clicking a link
      if (window.innerWidth <= 768) {
        nav.classList.remove('nav-active');
      }
    });
  }
});


    // Mobile menu toggle
    mobileMenu.addEventListener('click', function() {
        nav.classList.toggle('nav-active');
    });

    // Scroll animations
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.2
    });

    sections.forEach(section => {
        section.classList.add('hidden');
        observer.observe(section);
    });
});

    // Adding a class for visibility animation
    const style = document.createElement('style');
    style.innerHTML = `
    .hidden { opacity: 0; transform: translateY(20px); transition: all 0.3s ease-in-out; }
    .visible { opacity: 1; transform: translateY(0); }
    `;
    document.head.appendChild(style);


    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
    }
