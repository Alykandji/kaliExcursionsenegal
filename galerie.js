/* =========================================
   TERANGA VOYAGES – galerie.js
   Filtres · Lightbox · Navigation clavier
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

  const items        = Array.from(document.querySelectorAll('.gal-item'));
  const filterBtns   = document.querySelectorAll('.filter-btn');
  const photoCount   = document.getElementById('photo-count');
  const noResults    = document.getElementById('no-results');
  const grid         = document.getElementById('gallery-grid');

  // Lightbox elements
  const lightbox     = document.getElementById('lightbox');
  const backdrop     = document.getElementById('lightbox-backdrop');
  const lbImg        = document.getElementById('lb-img');
  const lbLoader     = document.getElementById('lb-loader');
  const lbCat        = document.getElementById('lb-cat');
  const lbTitle      = document.getElementById('lb-title');
  const lbDesc       = document.getElementById('lb-desc');
  const lbCounter    = document.getElementById('lb-counter');
  const lbClose      = document.getElementById('lb-close');
  const lbPrev       = document.getElementById('lb-prev');
  const lbNext       = document.getElementById('lb-next');

  let currentFilter  = 'all';
  let visibleItems   = [];
  let currentIndex   = 0;

  /* ========================================
     1. APPARITION AU SCROLL
     ======================================== */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const idx = items.indexOf(entry.target);
        const delay = (idx % 4) * 80; // décalage par colonne
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  items.forEach(item => observer.observe(item));

  /* ========================================
     2. FILTRES PAR CATÉGORIE
     ======================================== */
  function applyFilter(filter) {
    currentFilter = filter;

    // Update buttons
    filterBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.filter === filter);
    });

    // Filter items
    visibleItems = [];
    items.forEach((item, idx) => {
      const cat = item.dataset.category;
      const show = filter === 'all' || cat === filter;

      if (show) {
        item.classList.remove('hidden');
        visibleItems.push(item);

        // Re-animate with stagger
        item.classList.remove('visible');
        const col = visibleItems.length % 4;
        setTimeout(() => item.classList.add('visible'), col * 70);
      } else {
        item.classList.add('hidden');
        item.classList.remove('visible');
      }
    });

    // Count
    const count = visibleItems.length;
    photoCount.textContent = count;

    // No results
    noResults.classList.toggle('show', count === 0);
    grid.style.display = count === 0 ? 'none' : 'grid';
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => applyFilter(btn.dataset.filter));
  });

  // Init visible list
  applyFilter('all');

  /* ========================================
     3. OUVERTURE LIGHTBOX
     ======================================== */
  function openLightbox(item) {
    currentIndex = visibleItems.indexOf(item);
    loadLightbox(currentIndex);
    lightbox.classList.add('open');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  function loadLightbox(index) {
    const item   = visibleItems[index];
    const bgImg  = item.querySelector('.gal-img').style.backgroundImage;
    const url    = bgImg.match(/url\(["']?(.*?)["']?\)/)?.[1];
    const title  = item.dataset.title || '';
    const desc   = item.dataset.desc  || '';
    const cat    = item.dataset.category || '';

    // Reset image state
    lbImg.style.opacity = '0';
    lbLoader.classList.remove('hide');

    lbImg.onload = () => {
      lbLoader.classList.add('hide');
      lbImg.style.opacity = '1';
    };
    lbImg.onerror = () => {
      lbLoader.classList.add('hide');
      lbImg.style.opacity = '1';
    };

    lbImg.src = url || '';
    lbImg.alt = title;
    lbCat.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    lbTitle.textContent = title;
    lbDesc.textContent = desc;
    lbCounter.textContent = `${index + 1} / ${visibleItems.length}`;
  }

  // Clics sur les items
  items.forEach(item => {
    item.addEventListener('click', () => {
      if (!item.classList.contains('hidden')) {
        openLightbox(item);
      }
    });
    // Accessibilité clavier
    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'button');
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (!item.classList.contains('hidden')) openLightbox(item);
      }
    });
  });

  /* ========================================
     4. NAVIGATION LIGHTBOX
     ======================================== */
  function navigateTo(dir) {
    currentIndex = (currentIndex + dir + visibleItems.length) % visibleItems.length;
    loadLightbox(currentIndex);
  }

  lbPrev.addEventListener('click', () => navigateTo(-1));
  lbNext.addEventListener('click', () => navigateTo(1));
  lbClose.addEventListener('click', closeLightbox);
  backdrop.addEventListener('click', closeLightbox);

  // Swipe tactile
  let touchStartX = 0;
  lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });
  lightbox.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) navigateTo(diff > 0 ? 1 : -1);
  });

  /* ========================================
     5. NAVIGATION CLAVIER
     ======================================== */
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    switch (e.key) {
      case 'ArrowRight': navigateTo(1);  break;
      case 'ArrowLeft':  navigateTo(-1); break;
      case 'Escape':     closeLightbox(); break;
    }
  });

  /* ========================================
     6. BURGER MENU (hérité de script.js)
     ======================================== */
  const burger   = document.getElementById('burger');
  const navLinks = document.getElementById('nav-links');

  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        burger.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

}); // end DOMContentLoaded
