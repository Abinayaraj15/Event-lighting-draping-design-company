/**
 * LUMINA & VEIL - Custom Event Lighting & Draping Design Company
 * Interactive Scripts: Navigation, Ambient Moods, Before/After Sliders,
 * Gallery Lightbox, Interactive Estimator, and Contact Enquiry System.
 */

document.addEventListener('DOMContentLoaded', () => {
  initRtlToggle();
  initThemeMode();
  initHomeDropdown();
  initMobileNav();
  initHeaderScroll();
  initBeforeAfterSliders();
  initGalleryFilterAndLightbox();
  initEstimator();
  initContactForm();
  initContactMap();
  initFaqAccordion();
  initScrollAnimations();
});

/* ==========================================================================
   HOME DROPDOWN CONTROLLER (CLICK TO SHOW HOME 1 & HOME 2)
   ========================================================================== */
function initHomeDropdown() {
  const dropdownContainers = document.querySelectorAll('.has-dropdown');
  dropdownContainers.forEach(container => {
    const toggleBtn = container.querySelector('.dropdown-toggle');
    if (!toggleBtn) return;

    toggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const isOpen = container.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!container.contains(e.target)) {
        container.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && container.classList.contains('open')) {
        container.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

/* ==========================================================================
   0. RTL (RIGHT-TO-LEFT) TOGGLE CONTROLLER
   ========================================================================== */
function initRtlToggle() {
  const savedDir = localStorage.getItem('lumina_text_direction') || 'ltr';
  applyDirection(savedDir);

  const rtlButtons = document.querySelectorAll('.rtl-toggle-btn');
  rtlButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
      const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
      applyDirection(newDir);
      showToast(newDir === 'rtl' ? 'Right-to-Left (RTL) layout enabled' : 'Left-to-Right (LTR) layout enabled');
    });
  });
}

function applyDirection(dir) {
  document.documentElement.setAttribute('dir', dir);
  localStorage.setItem('lumina_text_direction', dir);

  const rtlButtons = document.querySelectorAll('.rtl-toggle-btn');
  rtlButtons.forEach(btn => {
    if (dir === 'rtl') {
      btn.classList.add('is-rtl');
      btn.innerHTML = '⇄ LTR';
      btn.setAttribute('title', 'Switch to Left-to-Right layout');
    } else {
      btn.classList.remove('is-rtl');
      btn.innerHTML = '⇄ RTL';
      btn.setAttribute('title', 'Switch to Right-to-Left layout');
    }
  });
}

/* ==========================================================================
   1. LIGHT / DARK MODE CONTROLLER (PERSISTENT THEME TOGGLE)
   ========================================================================== */
function initThemeMode() {
  const savedMode = localStorage.getItem('lumina_theme_mode') || 'dark';
  applyThemeMode(savedMode);

  const toggleButtons = document.querySelectorAll('.theme-mode-toggle');
  toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentMode = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
      const newMode = currentMode === 'dark' ? 'light' : 'dark';
      applyThemeMode(newMode);
      showToast(newMode === 'light' ? 'Light Mode Enabled (Ivory & Gold)' : 'Dark Mode Enabled (Obsidian & Amber)');
    });
  });
}

function applyThemeMode(mode) {
  const isLight = mode === 'light';
  document.documentElement.setAttribute('data-theme', isLight ? 'light' : 'dark');
  localStorage.setItem('lumina_theme_mode', isLight ? 'light' : 'dark');

  const toggleButtons = document.querySelectorAll('.theme-mode-toggle');
  toggleButtons.forEach(btn => {
    const icon = btn.querySelector('.theme-mode-icon');
    const text = btn.querySelector('.theme-mode-text');
    if (isLight) {
      if (icon) icon.textContent = '☀️';
      if (text) text.textContent = 'Light';
      btn.classList.add('is-light');
      btn.setAttribute('title', 'Switch to Dark mode');
    } else {
      if (icon) icon.textContent = '🌙';
      if (text) text.textContent = 'Dark';
      btn.classList.remove('is-light');
      btn.setAttribute('title', 'Switch to Light mode');
    }
  });
}

/* ==========================================================================
   2. MOBILE NAVIGATION DRAWER & SCROLL BEHAVIOR
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (!toggleBtn || !navMenu) return;

  // Ensure mobile CTA button exists inside the drawer for seamless mobile access
  if (!navMenu.querySelector('.mobile-menu-cta')) {
    const ctaItem = document.createElement('li');
    ctaItem.className = 'nav-item mobile-menu-cta';
    ctaItem.innerHTML = '<a href="contact.html" class="btn btn-primary">Request Proposal</a>';
    navMenu.appendChild(ctaItem);
  }

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = navMenu.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
    toggleBtn.innerHTML = isOpen ? '&times;' : '&#9776;';
  });

  // Close when clicking nav links
  const navLinks = navMenu.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      toggleBtn.innerHTML = '&#9776;';
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target) && navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      toggleBtn.innerHTML = '&#9776;';
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      toggleBtn.innerHTML = '&#9776;';
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });

  // Reset when resizing to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 992 && navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      toggleBtn.innerHTML = '&#9776;';
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* ==========================================================================
   3. INTERACTIVE BEFORE & AFTER SLIDERS
   ========================================================================== */
function initBeforeAfterSliders() {
  const sliderContainers = document.querySelectorAll('.comparison-card');

  sliderContainers.forEach(container => {
    const afterWrapper = container.querySelector('.comparison-after-wrapper');
    const handle = container.querySelector('.comparison-handle');
    if (!afterWrapper || !handle) return;

    const dividerLine = container.querySelector('.comparison-divider-line');
    let isDragging = false;

    const setPosition = (clientX) => {
      const rect = container.getBoundingClientRect();
      let offsetX = clientX - rect.left;
      if (offsetX < 0) offsetX = 0;
      if (offsetX > rect.width) offsetX = rect.width;

      const percentage = (offsetX / rect.width) * 100;
      afterWrapper.style.clipPath = `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0 100%)`;
      afterWrapper.style.webkitClipPath = `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0 100%)`;
      if (dividerLine) dividerLine.style.left = `${percentage}%`;
      handle.style.left = `${percentage}%`;
      handle.setAttribute('aria-valuenow', Math.round(percentage));
    };

    // Mouse Events
    container.addEventListener('mousedown', (e) => {
      isDragging = true;
      setPosition(e.clientX);
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      setPosition(e.clientX);
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
    });

    // Touch Events for Mobile
    container.addEventListener('touchstart', (e) => {
      isDragging = true;
      if (e.touches[0]) setPosition(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      if (e.touches[0]) setPosition(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener('touchend', () => {
      isDragging = false;
    });

    // Keyboard Accessibility
    handle.setAttribute('tabindex', '0');
    handle.setAttribute('role', 'slider');
    handle.setAttribute('aria-valuenow', '50');
    handle.setAttribute('aria-valuemin', '0');
    handle.setAttribute('aria-valuemax', '100');

    handle.addEventListener('keydown', (e) => {
      let currentVal = parseFloat(handle.style.left) || 50;
      if (e.key === 'ArrowLeft') {
        currentVal = Math.max(0, currentVal - 5);
      } else if (e.key === 'ArrowRight') {
        currentVal = Math.min(100, currentVal + 5);
      } else {
        return;
      }
      e.preventDefault();
      afterWrapper.style.clipPath = `polygon(0 0, ${currentVal}% 0, ${currentVal}% 100%, 0 100%)`;
      afterWrapper.style.webkitClipPath = `polygon(0 0, ${currentVal}% 0, ${currentVal}% 100%, 0 100%)`;
      if (dividerLine) dividerLine.style.left = `${currentVal}%`;
      handle.style.left = `${currentVal}%`;
      handle.setAttribute('aria-valuenow', Math.round(currentVal));
    });
  });
}

/* ==========================================================================
   4. GALLERY FILTER & LIGHTBOX VIEWER
   ========================================================================== */
function initGalleryFilterAndLightbox() {
  const filterBtns = document.querySelectorAll('.gallery-filter-bar .filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightboxModal');

  if (filterBtns.length > 0 && galleryItems.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        galleryItems.forEach(item => {
          const category = item.getAttribute('data-category');
          if (filter === 'all' || category === filter || category.includes(filter)) {
            item.style.display = 'block';
            setTimeout(() => { item.style.opacity = '1'; item.style.transform = 'scale(1)'; }, 10);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.96)';
            setTimeout(() => { item.style.display = 'none'; }, 250);
          }
        });
      });
    });
  }

  // Lightbox Implementation
  if (lightbox) {
    const lightboxImg = lightbox.querySelector('.lightbox-main-img');
    const lightboxTitle = lightbox.querySelector('.lightbox-title');
    const lightboxVenue = lightbox.querySelector('.lightbox-venue');
    const lightboxRecipe = lightbox.querySelector('.lightbox-recipe-text');
    const closeBtn = lightbox.querySelector('.lightbox-close-btn');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');

    let currentIndex = 0;
    const visibleItems = () => Array.from(galleryItems).filter(item => item.style.display !== 'none');

    const openLightbox = (index) => {
      const items = visibleItems();
      if (!items[index]) return;
      currentIndex = index;
      const item = items[currentIndex];

      const imgSrc = item.getAttribute('data-full-img') || item.querySelector('img').src;
      const title = item.getAttribute('data-title') || 'Illuminated Event Design';
      const venue = item.getAttribute('data-venue') || 'Exclusive Luxury Venue';
      const recipe = item.getAttribute('data-recipe') || 'Wireless Uplights, Chiffon Drapery, Monogram Gobo';

      lightboxImg.src = imgSrc;
      lightboxTitle.textContent = title;
      lightboxVenue.textContent = venue;
      lightboxRecipe.textContent = recipe;

      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    };

    galleryItems.forEach((item, idx) => {
      item.addEventListener('click', () => {
        const items = visibleItems();
        const currentVisibleIdx = items.indexOf(item);
        openLightbox(currentVisibleIdx !== -1 ? currentVisibleIdx : idx);
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const items = visibleItems();
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        openLightbox(currentIndex);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const items = visibleItems();
        currentIndex = (currentIndex + 1) % items.length;
        openLightbox(currentIndex);
      });
    }

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevBtn && prevBtn.click();
      if (e.key === 'ArrowRight') nextBtn && nextBtn.click();
    });
  }
}

/* ==========================================================================
   5. INTERACTIVE EVENT LIGHTING & DRAPING ESTIMATOR
   ========================================================================== */
function initEstimator() {
  const estimator = document.getElementById('lightingEstimator');
  if (!estimator) return;

  const eventTypeBtns = estimator.querySelectorAll('.estimator-event-type');
  const roomSizeBtns = estimator.querySelectorAll('.estimator-room-size');
  const uplightSlider = document.getElementById('uplightRange');
  const uplightDisplay = document.getElementById('uplightValDisplay');
  const addonCheckboxes = estimator.querySelectorAll('.estimator-addon');

  // Summary elements
  const specRoom = estimator.querySelector('.summary-spec-room');
  const specUplights = estimator.querySelector('.summary-spec-uplights');
  const specDrape = estimator.querySelector('.summary-spec-drape');
  const specSpecialty = estimator.querySelector('.summary-spec-specialty');
  const priceDisplay = estimator.querySelector('.price-box-amount');
  const transferBtn = estimator.querySelector('.transfer-to-contact-btn');

  let currentEventType = 'Wedding';
  let currentRoom = { name: 'Medium Ballroom (100–200 Guests)', basePrice: 1200, drapeYards: '120 yds Chiffon' };

  // Event Type selection
  eventTypeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      eventTypeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentEventType = btn.getAttribute('data-type');
      calculateEstimate();
    });
  });

  // Room Size selection
  roomSizeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      roomSizeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const size = btn.getAttribute('data-size');
      if (size === 'intimate') {
        currentRoom = { name: 'Intimate Hall (<100 Guests)', basePrice: 850, drapeYards: '60 yds Chiffon' };
      } else if (size === 'large') {
        currentRoom = { name: 'Grand Ballroom (250–500 Guests)', basePrice: 2200, drapeYards: '260 yds Chiffon' };
      } else if (size === 'tent') {
        currentRoom = { name: 'Outdoor Luxury Marquee / Tent', basePrice: 2600, drapeYards: '320 yds Chiffon & Fairylight' };
      } else {
        currentRoom = { name: 'Standard Ballroom (100–250 Guests)', basePrice: 1450, drapeYards: '150 yds Chiffon' };
      }
      calculateEstimate();
    });
  });

  // Uplight Slider
  if (uplightSlider && uplightDisplay) {
    uplightSlider.addEventListener('input', () => {
      uplightDisplay.textContent = `${uplightSlider.value} Fixtures`;
      calculateEstimate();
    });
  }

  // Addons toggle
  addonCheckboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      const card = cb.closest('.addon-card');
      if (card) {
        if (cb.checked) card.classList.add('checked');
        else card.classList.remove('checked');
      }
      calculateEstimate();
    });
  });

  function calculateEstimate() {
    const uplightCount = parseInt(uplightSlider ? uplightSlider.value : 20, 10);
    const uplightCost = uplightCount * 45; // $45 per smart wireless fixture

    let addonsCost = 0;
    let selectedAddonNames = [];

    addonCheckboxes.forEach(cb => {
      if (cb.checked) {
        addonsCost += parseFloat(cb.getAttribute('data-price') || 0);
        selectedAddonNames.push(cb.getAttribute('data-name'));
      }
    });

    const totalEstimate = currentRoom.basePrice + uplightCost + addonsCost;
    const lowRange = Math.round(totalEstimate * 0.95);
    const highRange = Math.round(totalEstimate * 1.15);

    if (specRoom) specRoom.textContent = currentRoom.name;
    if (specUplights) specUplights.textContent = `${uplightCount}x Wireless RGBAW+UV Fixtures`;
    if (specDrape) specDrape.textContent = currentRoom.drapeYards;
    if (specSpecialty) specSpecialty.textContent = selectedAddonNames.length > 0 ? selectedAddonNames.join(', ') : 'None selected';
    if (priceDisplay) priceDisplay.textContent = `$${lowRange.toLocaleString()} - $${highRange.toLocaleString()}`;

    // Store in session storage for contact page
    sessionStorage.setItem('lumina_quote_preset', JSON.stringify({
      eventType: currentEventType,
      roomName: currentRoom.name,
      uplightCount: uplightCount,
      addons: selectedAddonNames,
      estimate: `$${lowRange.toLocaleString()} - $${highRange.toLocaleString()}`
    }));
  }

  calculateEstimate();

  if (transferBtn) {
    transferBtn.addEventListener('click', () => {
      window.location.href = 'contact.html?from=estimator';
    });
  }
}

/* ==========================================================================
   6. CONTACT ENQUIRY FORM & CONFIRMATION MODAL
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('eventEnquiryForm');
  const modal = document.getElementById('inquirySuccessModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  // Check if user came with quote presets
  const urlParams = new URLSearchParams(window.location.search);
  const quotePresetJson = sessionStorage.getItem('lumina_quote_preset');

  if (form && (urlParams.get('from') === 'estimator' || quotePresetJson)) {
    try {
      const preset = JSON.parse(quotePresetJson);
      if (preset) {
        const eventTypeSelect = form.querySelector('[name="eventType"]');
        if (eventTypeSelect && preset.eventType) eventTypeSelect.value = preset.eventType;

        const messageField = form.querySelector('[name="message"]');
        if (messageField) {
          const room = preset.roomName ? preset.roomName.split('(')[0].trim() : '';
          const uplights = preset.uplightCount ? `${preset.uplightCount} uplights` : '';
          const details = [room, uplights].filter(Boolean).join(', ');
          messageField.value = `Estimate: ${preset.estimate}${details ? ` (${details})` : ''}`;
        }

        // Precheck checkboxes
        const checkboxes = form.querySelectorAll('.services-checkbox-grid input[type="checkbox"]');
        checkboxes.forEach(cb => {
          if (preset.addons && preset.addons.some(name => cb.value.toLowerCase().includes(name.toLowerCase().slice(0, 5)))) {
            cb.checked = true;
            cb.closest('.checkbox-tile')?.classList.add('checked');
          }
        });

        showToast('Your custom package estimate has been loaded into the inquiry!');
      }
    } catch (e) {
      console.log('No valid quote preset parsed');
    }
  }

  // Handle production package selection from home page
  const packageParam = urlParams.get('package');
  if (form && packageParam) {
    const messageField = form.querySelector('[name="message"]');
    if (messageField) {
      const packageMap = {
        'ambience': 'The Ambience Collection ($1,850)',
        'grand-ballroom': 'The Grand Ballroom Spectacle ($4,650)',
        'imperial': 'The Imperial Scenography ($8,900)'
      };
      if (packageMap[packageParam]) {
        messageField.value = `Package: ${packageMap[packageParam]}`;
      }
    }
  }

  // Handle legal/compliance document subject queries
  const subjectParam = urlParams.get('subject');
  if (form && subjectParam) {
    const messageField = form.querySelector('[name="message"]');
    if (subjectParam === 'nda') {
      if (messageField) {
        messageField.value = `Request: Confidential VIP Event & Mutual NDA`;
      }
      showToast('Confidential NDA Request template pre-filled');
    } else if (subjectParam === 'rigging') {
      if (messageField) {
        messageField.value = `Request: Venue Rigging & Engineering Technical Packet`;
      }
      showToast('Venue Rigging Packet Request pre-filled');
    } else if (subjectParam === 'fire-safety') {
      if (messageField) {
        messageField.value = `Request: NFPA 701 Fire Marshal Compliance Certificates`;
      }
      showToast('Fire Marshal Packet Request pre-filled');
    }
  }

  // Checkbox tiles click helper
  const checkboxTiles = document.querySelectorAll('.checkbox-tile');
  checkboxTiles.forEach(tile => {
    tile.addEventListener('click', (e) => {
      const input = tile.querySelector('input[type="checkbox"]');
      if (input && e.target !== input) {
        input.checked = !input.checked;
      }
      if (input.checked) {
        tile.classList.add('checked');
      } else {
        tile.classList.remove('checked');
      }
    });
  });

  if (!form) return;

  // Validation Inputs & Error Elements
  const nameInput = form.querySelector('[name="fullName"]');
  const emailInput = form.querySelector('[name="email"]');
  const countrySelect = form.querySelector('[name="countryCode"]');
  const phoneInput = form.querySelector('[name="phone"]');
  const dateInput = form.querySelector('[name="eventDate"]');
  const venueInput = form.querySelector('[name="venueName"]');

  const nameError = document.getElementById('fullNameError');
  const emailError = document.getElementById('emailError');
  const phoneError = document.getElementById('phoneError');
  const dateError = document.getElementById('eventDateError');
  const venueError = document.getElementById('venueNameError');

  function setFieldError(input, errorEl, message) {
    if (!input) return;
    if (message) {
      input.classList.add('is-invalid');
      if (errorEl) {
        errorEl.innerHTML = `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg><span>${message}</span>`;
        errorEl.style.display = 'flex';
      }
    } else {
      input.classList.remove('is-invalid');
      if (errorEl) {
        errorEl.textContent = '';
        errorEl.style.display = 'none';
      }
    }
  }

  // 1. Full Name: MUST NOT accept a single letter, requires at least 2 letters
  function checkName(showUi = true) {
    if (!nameInput) return true;
    const val = nameInput.value.trim();
    if (!val) {
      if (showUi) setFieldError(nameInput, nameError, 'Full name is required.');
      return false;
    }
    if (val.length < 2) {
      if (showUi) setFieldError(nameInput, nameError, 'Full name must be at least 2 characters (single letter not accepted).');
      return false;
    }
    const letters = (val.match(/[\p{L}]/gu) || []).length;
    if (letters < 2) {
      if (showUi) setFieldError(nameInput, nameError, 'Full name must contain at least 2 letters.');
      return false;
    }
    if (/[0-9<>{}[\]\\=+*&%$#@!~`^?]/.test(val)) {
      if (showUi) setFieldError(nameInput, nameError, 'Name cannot contain numbers or special symbols.');
      return false;
    }
    if (showUi) setFieldError(nameInput, nameError, '');
    return true;
  }

  // 2. Email: Real standard format validation (user@domain.tld, e.g. name@gmail.com)
  function checkEmail(showUi = true) {
    if (!emailInput) return true;
    const val = emailInput.value.trim();
    if (!val) {
      if (showUi) setFieldError(emailInput, emailError, 'Email address is required.');
      return false;
    }

    // Dynamic intelligent guidance for real standard email formats
    if (!val.includes('@')) {
      if (showUi) setFieldError(emailInput, emailError, `Please include '@' and a real domain (e.g. ${val || 'name'}@gmail.com).`);
      return false;
    }

    const parts = val.split('@');
    if (parts.length > 2) {
      if (showUi) setFieldError(emailInput, emailError, 'Email cannot contain multiple "@" symbols.');
      return false;
    }

    const username = parts[0];
    const domainPart = parts[1];

    if (!username || username.length < 2) {
      if (showUi) setFieldError(emailInput, emailError, 'Username before "@" must be at least 2 characters (e.g. name@gmail.com).');
      return false;
    }

    if (!domainPart) {
      if (showUi) setFieldError(emailInput, emailError, `Please enter a real domain after "@" (e.g. ${username}@gmail.com).`);
      return false;
    }

    if (!domainPart.includes('.')) {
      if (showUi) setFieldError(emailInput, emailError, `Please finish with a standard extension like .com (e.g. ${username}@gmail.com).`);
      return false;
    }

    const domainTokens = domainPart.split('.');
    const tld = domainTokens[domainTokens.length - 1];
    const sld = domainTokens[0];

    if (!sld || sld.length < 2) {
      if (showUi) setFieldError(emailInput, emailError, 'Domain name must have at least 2 letters (e.g. gmail.com).');
      return false;
    }

    if (!tld || tld.length < 2) {
      if (showUi) setFieldError(emailInput, emailError, 'Domain extension must be at least 2 letters (e.g. .com, .org, .net).');
      return false;
    }

    // Comprehensive RFC 5322 standard email regex with 2-10 letter TLD
    const realEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/;
    if (!realEmailRegex.test(val) || val.includes('..') || domainPart.startsWith('-') || domainPart.endsWith('-')) {
      if (showUi) setFieldError(emailInput, emailError, 'Please enter a real standard email address (e.g. name@gmail.com).');
      return false;
    }

    if (showUi) setFieldError(emailInput, emailError, '');
    return true;
  }

  // 3. Phone: Correct standard format with country code dropdown
  function checkPhone(showUi = true) {
    if (!phoneInput) return true;
    const val = phoneInput.value.trim();
    if (!val) {
      if (showUi) setFieldError(phoneInput, phoneError, 'Phone number is required.');
      return false;
    }
    const digits = val.replace(/\D/g, '');
    const isUS = !countrySelect || countrySelect.value === '+1';

    if (isUS) {
      if (digits.length < 10) {
        if (showUi) setFieldError(phoneInput, phoneError, 'Please enter a complete 10-digit number: (555) 234-5678.');
        return false;
      }
      if (digits.length > 10) {
        if (showUi) setFieldError(phoneInput, phoneError, 'US / CA phone number cannot exceed 10 digits.');
        return false;
      }
      const usPattern = /^(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/;
      if (!usPattern.test(val)) {
        if (showUi) setFieldError(phoneInput, phoneError, 'Please enter in standard format: (555) 234-5678.');
        return false;
      }
    } else {
      if (digits.length < 7) {
        if (showUi) setFieldError(phoneInput, phoneError, 'Please enter a valid phone number (at least 7 digits).');
        return false;
      }
      if (digits.length > 13) {
        if (showUi) setFieldError(phoneInput, phoneError, 'Phone number cannot exceed 13 digits.');
        return false;
      }
      if (/[^\d\s-]/.test(val)) {
        if (showUi) setFieldError(phoneInput, phoneError, 'Phone number can only contain digits, spaces, and hyphens.');
        return false;
      }
    }

    if (showUi) setFieldError(phoneInput, phoneError, '');
    return true;
  }

  function checkDate(showUi = true) {
    if (!dateInput) return true;
    const val = dateInput.value.trim();
    if (!val) {
      if (showUi) setFieldError(dateInput, dateError, 'Please select your event date.');
      return false;
    }
    if (showUi) setFieldError(dateInput, dateError, '');
    return true;
  }

  function checkVenue(showUi = true) {
    if (!venueInput) return true;
    const val = venueInput.value.trim();
    if (!val) {
      if (showUi) setFieldError(venueInput, venueError, 'Venue name and city are required.');
      return false;
    }
    if (val.length < 2) {
      if (showUi) setFieldError(venueInput, venueError, 'Please enter a valid venue name and city.');
      return false;
    }
    if (showUi) setFieldError(venueInput, venueError, '');
    return true;
  }

  function formatUSPhone() {
    if (!phoneInput) return;
    const digits = phoneInput.value.replace(/\D/g, '').slice(0, 10);
    if (digits.length === 0) {
      phoneInput.value = '';
    } else if (digits.length <= 3) {
      phoneInput.value = `(${digits}`;
    } else if (digits.length <= 6) {
      phoneInput.value = `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    } else {
      phoneInput.value = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
    }
  }

  // Country select dropdown listener
  if (countrySelect) {
    countrySelect.addEventListener('change', () => {
      const selectedOpt = countrySelect.options[countrySelect.selectedIndex];
      const ph = selectedOpt ? selectedOpt.getAttribute('data-placeholder') : '(555) 234-5678';
      if (phoneInput) {
        phoneInput.placeholder = ph;
        if (countrySelect.value === '+1') {
          formatUSPhone();
        }
      }
      if (hasSubmitted || (phoneInput && phoneInput.classList.contains('is-invalid'))) {
        checkPhone(true);
      }
    });
  }

  // Real-time phone auto-formatting
  if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
      const isBackspace = e.inputType === 'deleteContentBackward' || e.inputType === 'deleteContentForward';
      const isUS = !countrySelect || countrySelect.value === '+1';

      if (isUS && !isBackspace) {
        formatUSPhone();
      } else if (!isUS) {
        phoneInput.value = phoneInput.value.replace(/[^\d\s-]/g, '').slice(0, 16);
      }

      if (hasSubmitted || phoneInput.classList.contains('is-invalid')) {
        checkPhone(true);
      }
    });

    phoneInput.addEventListener('blur', () => {
      const isUS = !countrySelect || countrySelect.value === '+1';
      if (isUS && phoneInput.value.trim()) {
        const digits = phoneInput.value.replace(/\D/g, '');
        if (digits.length === 10) {
          phoneInput.value = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
        }
      }
      if (phoneInput.value.trim() || hasSubmitted) checkPhone(true);
    });
  }

  // Real-time listeners for Name and Email
  if (nameInput) {
    nameInput.addEventListener('input', () => {
      if (hasSubmitted || nameInput.classList.contains('is-invalid')) checkName(true);
    });
    nameInput.addEventListener('blur', () => {
      if (nameInput.value.trim() || hasSubmitted) checkName(true);
    });
  }

  // Email domain suggestion chips handler
  const domainChips = form.querySelectorAll('.domain-chip');
  const chipsContainer = document.getElementById('emailDomainChips');

  if (domainChips.length > 0 && emailInput) {
    domainChips.forEach(chip => {
      chip.addEventListener('click', () => {
        const domain = chip.getAttribute('data-domain');
        let current = emailInput.value.trim();
        if (current.includes('@')) {
          current = current.split('@')[0];
        }
        if (!current) {
          current = 'name';
        }
        emailInput.value = current + domain;
        emailInput.focus();
        checkEmail(true);
        if (chipsContainer) chipsContainer.style.display = 'none';
      });
    });
  }

  if (emailInput) {
    emailInput.addEventListener('input', () => {
      if (chipsContainer) {
        if (emailInput.value.includes('@') && emailInput.value.includes('.')) {
          chipsContainer.style.display = 'none';
        } else {
          chipsContainer.style.display = 'flex';
        }
      }
      if (hasSubmitted || emailInput.classList.contains('is-invalid')) checkEmail(true);
    });
    emailInput.addEventListener('blur', () => {
      if (emailInput.value.trim() || hasSubmitted) checkEmail(true);
    });
  }

  if (dateInput) {
    dateInput.addEventListener('change', () => {
      if (hasSubmitted || dateInput.classList.contains('is-invalid')) checkDate(true);
    });
  }

  if (venueInput) {
    venueInput.addEventListener('input', () => {
      if (hasSubmitted || venueInput.classList.contains('is-invalid')) checkVenue(true);
    });
    venueInput.addEventListener('blur', () => {
      if (venueInput.value.trim() || hasSubmitted) checkVenue(true);
    });
  }

  let hasSubmitted = false;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    hasSubmitted = true;

    const isNameValid = checkName(true);
    const isEmailValid = checkEmail(true);
    const isPhoneValid = checkPhone(true);
    const isDateValid = checkDate(true);
    const isVenueValid = checkVenue(true);

    if (!isNameValid) {
      nameInput.focus();
      showToast('Please enter a valid full name (minimum 2 letters, single letter not accepted)', 'error');
      return;
    }

    if (!isEmailValid) {
      emailInput.focus();
      showToast('Please enter a real standard email address (e.g. name@gmail.com)', 'error');
      return;
    }

    if (!isPhoneValid) {
      phoneInput.focus();
      const isUS = !countrySelect || countrySelect.value === '+1';
      showToast(isUS ? 'Please enter a valid 10-digit phone number: (555) 234-5678' : 'Please enter a valid phone number (minimum 7 digits)', 'error');
      return;
    }

    if (!isDateValid) {
      dateInput.focus();
      showToast('Please select your event date', 'error');
      return;
    }

    if (!isVenueValid) {
      venueInput.focus();
      showToast('Please provide your venue name and city', 'error');
      return;
    }

    // All validation passed successfully
    const selectedServices = Array.from(form.querySelectorAll('.services-checkbox-grid input[type="checkbox"]:checked'))
      .map(cb => cb.value);

    // Generate random reference code
    const refCode = 'LUM-' + Math.floor(100000 + Math.random() * 900000);

    // Populate modal
    if (modal) {
      const refElement = modal.querySelector('.modal-ref-code');
      const clientElement = modal.querySelector('.modal-client-name');
      const venueElement = modal.querySelector('.modal-venue-name');
      const dateElement = modal.querySelector('.modal-event-date');
      const servicesElement = modal.querySelector('.modal-services-summary');

      if (refElement) refElement.textContent = refCode;
      if (clientElement) clientElement.textContent = nameInput.value.trim();
      if (venueElement) venueElement.textContent = venueInput.value.trim() || 'Your Chosen Venue';
      if (dateElement) dateElement.textContent = dateInput.value || 'Upcoming Date';
      if (servicesElement) {
        servicesElement.textContent = selectedServices.length > 0 ? selectedServices.join(', ') : 'Full Custom Lighting Design';
      }

      modal.classList.add('active');
    }

    form.reset();
    hasSubmitted = false;
    [nameInput, emailInput, phoneInput, dateInput, venueInput].forEach(inp => inp && inp.classList.remove('is-invalid'));
    [nameError, emailError, phoneError, dateError, venueError].forEach(err => {
      if (err) {
        err.textContent = '';
        err.style.display = 'none';
      }
    });
    checkboxTiles.forEach(t => t.classList.remove('checked'));
    showToast('Lighting Design Enquiry submitted successfully!');
  });

  if (modalCloseBtn && modal) {
    modalCloseBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }
}

/* ==========================================================================
   7. FAQ ACCORDION INTERACTION
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) otherItem.classList.remove('active');
      });

      // Toggle clicked
      if (!isActive) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  });
}

/* ==========================================================================
   8. SCROLL REVEAL ANIMATIONS
   ========================================================================== */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.service-card, .feature-box, .gallery-item, .team-card, .testimonial-card, .package-card');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      observer.observe(el);
    });
  }
}

/* ==========================================================================
   9. TOAST NOTIFICATION HELPER
   ========================================================================== */
function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';

  const iconSvg = type === 'error'
    ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="#ef4444"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>`
    : `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`;

  toast.innerHTML = `${iconSvg} <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

/* ==========================================================================
   10. CONTACT PAGE INTERACTIVE MAP CONTROLLER (LEAFLET + CARTODB)
   ========================================================================== */
function initContactMap() {
  const mapElement = document.getElementById('contactMap');
  if (!mapElement || typeof L === 'undefined') return;

  // Studio Coordinates: Los Angeles Design District (34.0825, -118.3825)
  const studioCoords = [34.0825, -118.3825];

  // Initialize Leaflet Map
  const map = L.map('contactMap', {
    center: studioCoords,
    zoom: 14,
    minZoom: 10,
    maxZoom: 18,
    scrollWheelZoom: false, // Prevent wheel capture while scrolling the page
    attributionControl: true
  });

  // ESRI World Gray Canvas (100% Free, No API Key, No Watermark)
  const darkBaseUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}';
  const darkRefUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}';

  const lightBaseUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}';
  const lightRefUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}';

  const tileAttribution = '&copy; <a href="https://www.esri.com/" target="_blank" rel="noopener">Esri</a> &mdash; Esri, DeLorme, NAVTEQ, &copy; OpenStreetMap';

  function createTileLayer(isLight) {
    const base = L.tileLayer(isLight ? lightBaseUrl : darkBaseUrl, {
      attribution: tileAttribution,
      maxNativeZoom: 16,
      maxZoom: 18
    });
    const ref = L.tileLayer(isLight ? lightRefUrl : darkRefUrl, {
      maxNativeZoom: 16,
      maxZoom: 18
    });
    return L.layerGroup([base, ref]);
  }

  const isLightTheme = document.documentElement.getAttribute('data-theme') === 'light';
  let currentTileGroup = createTileLayer(isLightTheme).addTo(map);

  // Sync tiles when light / dark theme changes
  const themeObserver = new MutationObserver(() => {
    const isNowLight = document.documentElement.getAttribute('data-theme') === 'light';
    map.removeLayer(currentTileGroup);
    currentTileGroup = createTileLayer(isNowLight).addTo(map);
  });
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  // Custom Luxury Gold Glowing Marker Pin
  const goldPinIcon = L.divIcon({
    className: 'leaflet-custom-marker',
    html: `
      <div class="custom-map-pin" title="LUMINA &amp; VEIL Design Studio">
        <div class="pin-pulse-ring"></div>
        <div class="pin-marker-core">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a1 1 0 0 1 1 1v2.07c3.61.45 6.48 3.32 6.93 6.93H22a1 1 0 0 1 0 2h-2.07c-.45 3.61-3.32 6.48-6.93 6.93V21a1 1 0 0 1-2 0v-2.07c-3.61-.45-6.48-3.32-6.93-6.93H2a1 1 0 0 1 0-2h2.07c.45-3.61 3.32-6.48 6.93-6.93V3a1 1 0 0 1 1-1zm0 5.1c-2.7 0-4.9 2.2-4.9 4.9s2.2 4.9 4.9 4.9 4.9-2.2 4.9-4.9-2.2-4.9-4.9-4.9z"/>
          </svg>
        </div>
      </div>
    `,
    iconSize: [44, 44],
    iconAnchor: [22, 22],
    popupAnchor: [0, -24]
  });

  const marker = L.marker(studioCoords, { icon: goldPinIcon }).addTo(map);

  // Popup Content Card
  const popupHtml = `
    <div class="map-popup-card">
      <span class="map-popup-badge">Flagship Studio</span>
      <h4 class="map-popup-title">LUMINA &amp; VEIL</h4>
      <p class="map-popup-address">
        742 Luminous Way, Suite 400<br>
        Design District, Los Angeles, CA 90048
      </p>
      <div class="map-popup-meta">
        <strong>(800) 586-4621</strong> &bull; Mon&ndash;Fri 9am&ndash;6pm
      </div>
      <a href="https://maps.google.com/?q=34.0825,-118.3825(LUMINA+%26+VEIL+Design+Studio)" target="_blank" rel="noopener noreferrer" class="map-popup-btn">
        <span>Get Directions in Google Maps</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
      </a>
    </div>
  `;

  marker.bindPopup(popupHtml, {
    className: 'custom-leaflet-popup',
    maxWidth: 320,
    minWidth: 260
  });

  // Open the popup initially after a brief delay so users see where it is
  setTimeout(() => {
    marker.openPopup();
  }, 650);

  // Handle window resizing to keep map centered
  window.addEventListener('resize', () => {
    map.invalidateSize();
  });
}

