/* =========================================
   TERANGA VOYAGES – script.js
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ========================================
     1. NAVBAR – SCROLL & MOBILE BURGER
     ======================================== */
  const navbar = document.getElementById('navbar');
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('nav-links');

  const handleScroll = () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    updateActiveLink();
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // Close mobile menu on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  /* ========================================
     2. ACTIVE LINK ON SCROLL
     ======================================== */
  const sections = document.querySelectorAll('section[id], div[id]');
  const navLinkEls = document.querySelectorAll('.nav-link');

  function updateActiveLink() {
    let current = '';
    sections.forEach(sec => {
      const secTop = sec.offsetTop - 120;
      if (window.scrollY >= secTop) current = sec.id;
    });
    navLinkEls.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }

  /* ========================================
     3. HERO SLIDESHOW
     ======================================== */
  const slides = document.querySelectorAll('.hero-slide');
  const dotsContainer = document.getElementById('hero-dots');
  let currentSlide = 0;

  // Build dots
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'hero-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Slide ${i + 1}`);
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });

  function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    dotsContainer.children[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    dotsContainer.children[currentSlide].classList.add('active');
  }

  let slideInterval = setInterval(() => goToSlide(currentSlide + 1), 5500);

  // Pause on hover
  document.querySelector('.hero').addEventListener('mouseenter', () => clearInterval(slideInterval));
  document.querySelector('.hero').addEventListener('mouseleave', () => {
    slideInterval = setInterval(() => goToSlide(currentSlide + 1), 5500);
  });

  /* ========================================
     4. ANIMATED COUNTERS
     ======================================== */
  const counterEls = document.querySelectorAll('.stat-num');
  let countersStarted = false;

  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1800;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(current);
    }, 16);
  }

  function checkCounters() {
    if (countersStarted) return;
    const band = document.querySelector('.stats-band');
    if (!band) return;
    const rect = band.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      countersStarted = true;
      counterEls.forEach(el => animateCounter(el));
    }
  }

  window.addEventListener('scroll', checkCounters, { passive: true });
  checkCounters();

  /* ========================================
     5. SCROLL REVEAL (CARDS)
     ======================================== */
  const revealEls = document.querySelectorAll('[data-aos]');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger delay per card
        const delay = (Array.from(revealEls).indexOf(entry.target) % 3) * 120;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => revealObserver.observe(el));

  /* ========================================
     6. REVIEWS CAROUSEL
     ======================================== */
  const reviews = document.querySelectorAll('.review');
  const revNavContainer = document.getElementById('reviews-nav');
  let currentReview = 0;

  // Build nav dots
  reviews.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'rev-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Avis ${i + 1}`);
    dot.addEventListener('click', () => showReview(i));
    revNavContainer.appendChild(dot);
  });

  function showReview(index) {
    reviews[currentReview].classList.remove('active');
    revNavContainer.children[currentReview].classList.remove('active');
    currentReview = (index + reviews.length) % reviews.length;
    reviews[currentReview].classList.add('active');
    revNavContainer.children[currentReview].classList.add('active');
  }

  let reviewInterval = setInterval(() => showReview(currentReview + 1), 6000);

  document.querySelector('.reviews-carousel').addEventListener('mouseenter', () => clearInterval(reviewInterval));
  document.querySelector('.reviews-carousel').addEventListener('mouseleave', () => {
    reviewInterval = setInterval(() => showReview(currentReview + 1), 6000);
  });

  /* ========================================
     7. CONTACT FORM
     ======================================== */
  const form = document.getElementById('contact-form');
  const successMsg = document.getElementById('form-success');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Basic validation
    let valid = true;
    form.querySelectorAll('[required]').forEach(field => {
      field.classList.remove('error');
      if (!field.value.trim()) {
        field.classList.add('error');
        valid = false;
      }
    });

    // Email check
    const emailField = form.querySelector('#email');
    if (emailField && emailField.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
      emailField.classList.add('error');
      valid = false;
    }

    if (!valid) {
      form.querySelector('.error')?.focus();
      return;
    }

    // Simulate send
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Envoi en cours…';
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent = 'Envoyer la demande';
      btn.disabled = false;
      successMsg.classList.add('show');
      form.reset();

      setTimeout(() => successMsg.classList.remove('show'), 5000);
    }, 1400);
  });

  // Remove error class on input
  form.querySelectorAll('input, select, textarea').forEach(field => {
    field.addEventListener('input', () => field.classList.remove('error'));
  });

  /* ========================================
     8. SMOOTH SCROLL FOR ALL ANCHORS
     ======================================== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = navbar.offsetHeight + 20;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ========================================
     9. GALLERY LIGHTBOX (SIMPLE)
     ======================================== */
  const galleryItems = document.querySelectorAll('.gallery-item');

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const bg = item.style.backgroundImage;
      const url = bg.match(/url\(["']?(.*?)["']?\)/)?.[1];
      if (!url) return;

      const overlay = document.createElement('div');
      overlay.style.cssText = `
        position:fixed; inset:0; z-index:9999;
        background:rgba(0,0,0,.9);
        display:flex; align-items:center; justify-content:center;
        cursor:zoom-out; animation:fadeIn .3s ease;
      `;

      const img = document.createElement('img');
      img.src = url;
      img.style.cssText = `
        max-width:90vw; max-height:88vh;
        border-radius:8px;
        box-shadow:0 20px 80px rgba(0,0,0,.7);
        animation:fadeUp .35s ease;
      `;

      overlay.appendChild(img);
      document.body.appendChild(overlay);
      document.body.style.overflow = 'hidden';

      overlay.addEventListener('click', () => {
        document.body.removeChild(overlay);
        document.body.style.overflow = '';
      });
    });
  });

}); // end DOMContentLoaded
