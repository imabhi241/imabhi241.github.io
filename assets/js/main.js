/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");

  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navHeader =document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}


/* ----- TYPING EFFECT ----- */
function initTypingEffect() {
  if (typeof Typed !== 'undefined') {
    var typingEffect = new Typed(".typedText",{
      strings : ["Data Engineer","Developer","Innovator"],
      loop : true,
      typeSpeed : 100, 
      backSpeed : 80,
      backDelay : 2000
    });
  } else {
    // If Typed is not loaded yet, wait and try again
    setTimeout(initTypingEffect, 100);
  }
}

// Initialize all components when window is fully loaded
window.addEventListener('load', function() {
  initTypingEffect();
  initScrollReveal();
  initDarkModeToggle();
  initActiveLink();
  initContactForm();
});


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
function initScrollReveal() {
  if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({
          origin: 'top',
          distance: '80px',
          duration: 2000,
          reset: true     
    })

    /* -- HOME -- */
    sr.reveal('.featured-text-card',{})
    sr.reveal('.featured-name',{delay: 100})
    sr.reveal('.featured-text-info',{delay: 200})
    sr.reveal('.featured-text-btn',{delay: 200})
    sr.reveal('.social_icons',{delay: 200})
    sr.reveal('.featured-image',{delay: 300})

    /* -- PROJECT BOX -- */
    sr.reveal('.project-box',{interval: 200})

    /* -- HEADINGS -- */
    sr.reveal('.top-header',{})

    /* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

    /* -- ABOUT INFO & CONTACT INFO -- */
    const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
    })

    srLeft.reveal('.about-info',{delay: 100})
    srLeft.reveal('.contact-info',{delay: 100})

    /* -- ABOUT SKILLS & FORM BOX -- */
    const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
    })

    srRight.reveal('.skills-box',{delay: 100})
    srRight.reveal('.form-control',{delay: 100})
  } else {
    // If ScrollReveal is not loaded yet, wait and try again
    setTimeout(initScrollReveal, 100);
  }
}



/* ----- CHANGE ACTIVE LINK ----- */
function initActiveLink() {
  const sections = document.querySelectorAll('section[id]');
  
  if (sections.length > 0) {
    function scrollActive() {
      const scrollY = window.scrollY;

      sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
          sectionId = current.getAttribute('id');

        const navLink = document.querySelector('.nav-menu a[href*=' + sectionId + ']');
        if (navLink) {
          if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
              navLink.classList.add('active-link');
          } else {
              navLink.classList.remove('active-link');
          }
        }
      });
    }

    window.addEventListener('scroll', scrollActive);
  }
}
/* ----- NAVIGATION BAR FUNCTION ----- */


/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
    


/* ----- TYPING EFFECT ----- */
   

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
   

  /* -- HOME -- */
  

  /* -- PROJECT BOX -- */
  

  /* -- HEADINGS -- */
  

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

  /* -- ABOUT INFO & CONTACT INFO -- */
  

  /* -- ABOUT SKILLS & FORM BOX -- */
  


/* ----- CHANGE ACTIVE LINK ----- */
/* ----- DARK MODE TOGGLE ----- */
function initDarkModeToggle() {
  const darkModeToggle = document.getElementById('darkModeToggle');
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        const icon = darkModeToggle.querySelector('i');
        if(document.body.classList.contains('dark-mode')) {
            icon.classList.remove('uil-moon');
            icon.classList.add('uil-sun');
        } else {
            icon.classList.remove('uil-sun');
            icon.classList.add('uil-moon');
        }
    });
  }
}

// ----- EMAILJS INTEGRATION FOR CONTACT FORM -----
function initContactForm() {
    // Initialize EmailJS once when the function is called
    if (typeof emailjs !== 'undefined') {
        emailjs.init('AadC5ha7tJacI0wgo'); // Your EmailJS API Key
    }
    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Completely prevent any default form submission behavior
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            
            // Prevent any further form submission attempts
            if (contactForm.getAttribute('data-submitting') === 'true') {
                return false;
            }
            contactForm.setAttribute('data-submitting', 'true');
            
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.innerHTML = 'Sending... <i class="uil uil-spinner-alt"></i>';
            submitBtn.disabled = true;
            
            // Check if EmailJS is available
            if (typeof emailjs === 'undefined') {
                console.error('EmailJS not loaded');
                resetFormState();
                showFallbackMessage();
                return false;
            }
            
            emailjs.sendForm('service_6h947lj', 'template_j2km39q', contactForm)
                .then(function(response) {
                    console.log('Email sent successfully:', response.status, response.text);
                    contactForm.reset();
                    contactForm.removeAttribute('data-submitting');
                    // Redirect on successful send
                    window.location.href = 'thank-you.html';
                })
                .catch(function(error) {
                    console.error('Email sending failed:', error);
                    resetFormState();
                    showFallbackMessage();
                });
            
            function resetFormState() {
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
                contactForm.removeAttribute('data-submitting');
            }
            
            function showFallbackMessage() {
                const thankYouMsg = document.getElementById('thankYouMsg');
                if (thankYouMsg) {
                    thankYouMsg.style.display = 'block';
                }
                contactForm.reset();
                
                // Still redirect after showing message
                setTimeout(function() {
                    window.location.href = 'thank-you.html';
                }, 3000);
            }
            
            return false; // Additional safety to prevent form submission
        });
        
        // Also prevent form submission on Enter key in input fields
        contactForm.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
                e.preventDefault();
                contactForm.dispatchEvent(new Event('submit'));
                return false;
            }
        });
    }
}



