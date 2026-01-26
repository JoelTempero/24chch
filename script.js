/* ============================================
   24CHCH - JavaScript
   ============================================ */

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
    initCountdown();
    initNavigation();
    initScrollAnimations();
    initSmoothScroll();
});

/* Countdown Timer */
function initCountdown() {
    // Target date: March 27, 2026, 6:00 PM NZDT (when elements are announced)
    const targetDate = new Date('2026-03-27T18:00:00+13:00').getTime();

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            // Event has started or passed
            daysEl.textContent = '00';
            hoursEl.textContent = '00';
            minutesEl.textContent = '00';
            secondsEl.textContent = '00';

            // Change countdown message
            const countdown = document.getElementById('countdown');
            if (countdown && !countdown.classList.contains('event-started')) {
                countdown.classList.add('event-started');
                const message = document.createElement('div');
                message.className = 'countdown-message';
                message.innerHTML = '<span>THE CHAOS HAS BEGUN!</span>';
                countdown.parentNode.insertBefore(message, countdown);
            }
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Animate number changes
        animateValue(daysEl, days);
        animateValue(hoursEl, hours);
        animateValue(minutesEl, minutes);
        animateValue(secondsEl, seconds);
    }

    function animateValue(element, newValue) {
        const formattedValue = String(newValue).padStart(2, '0');
        if (element.textContent !== formattedValue) {
            element.style.transform = 'scale(1.1)';
            element.textContent = formattedValue;
            setTimeout(() => {
                element.style.transform = 'scale(1)';
            }, 100);
        }
    }

    // Update immediately and then every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

/* Mobile Navigation */
function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            navToggle.classList.toggle('active');

            // Animate hamburger to X
            const spans = navToggle.querySelectorAll('span');
            if (navToggle.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close menu when clicking a link
        navLinksItems.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                navToggle.classList.remove('active');
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
                navToggle.classList.remove('active');
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // Navigation background on scroll
    const nav = document.querySelector('.main-nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            nav.style.background = 'rgba(10,10,10,0.98)';
        } else {
            nav.style.background = 'linear-gradient(180deg, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0) 100%)';
        }

        // Hide/show nav on scroll
        if (currentScroll > lastScroll && currentScroll > 500) {
            nav.style.transform = 'translateY(-100%)';
        } else {
            nav.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;
    });
}

/* Scroll Animations */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        '.section-header, .faq-item, .award-card, .film-card, .rule-item, .advice-item, .handin-item, .winner-showcase, .runnerup-showcase, .special-awards, .timeline-item'
    );

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered delay for grid items
                const delay = entry.target.classList.contains('faq-item') ||
                              entry.target.classList.contains('award-card') ||
                              entry.target.classList.contains('film-card') ||
                              entry.target.classList.contains('rule-item')
                    ? index * 50
                    : 0;

                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

/* Smooth Scroll */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                const navHeight = document.querySelector('.main-nav').offsetHeight;
                const targetPosition = target.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* Glitch Effect Enhancement */
function addGlitchEffect() {
    const glitchElements = document.querySelectorAll('.glitch');

    glitchElements.forEach(el => {
        // Random glitch intervals
        setInterval(() => {
            if (Math.random() > 0.95) {
                el.style.animation = 'none';
                el.offsetHeight; // Trigger reflow
                el.style.animation = null;
            }
        }, 100);
    });
}

/* Video Lazy Loading Enhancement */
function initVideoLazyLoad() {
    const videos = document.querySelectorAll('.video-container iframe');

    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const iframe = entry.target;
                // The src is already set, but we could enhance with loading states
                iframe.addEventListener('load', () => {
                    iframe.parentElement.classList.add('loaded');
                });
                videoObserver.unobserve(iframe);
            }
        });
    }, { threshold: 0.1 });

    videos.forEach(video => {
        videoObserver.observe(video);
    });
}

/* Parallax Effect for Hero */
function initParallax() {
    const heroYear = document.querySelector('.hero-year');
    const heroTitle = document.querySelector('.hero-title');

    if (heroYear && heroTitle) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroHeight = document.querySelector('.hero').offsetHeight;

            if (scrolled < heroHeight) {
                heroYear.style.transform = `translateY(${scrolled * 0.3}px)`;
                heroTitle.style.transform = `translateY(${scrolled * 0.1}px)`;
            }
        });
    }
}

// Initialize parallax
initParallax();

/* Easter Egg - Konami Code */
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.keyCode);

    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }

    if (konamiCode.toString() === konamiSequence.toString()) {
        activateChaosMode();
    }
});

function activateChaosMode() {
    document.body.classList.add('chaos-mode');

    // Add some chaotic visual effects
    const style = document.createElement('style');
    style.textContent = `
        .chaos-mode * {
            animation: chaos 0.5s infinite !important;
        }
        @keyframes chaos {
            0%, 100% { filter: hue-rotate(0deg); }
            25% { filter: hue-rotate(90deg); }
            50% { filter: hue-rotate(180deg); }
            75% { filter: hue-rotate(270deg); }
        }
    `;
    document.head.appendChild(style);

    // Remove after 3 seconds
    setTimeout(() => {
        document.body.classList.remove('chaos-mode');
        style.remove();
    }, 3000);
}

/* Console Message */
console.log('%c24CHCH', 'font-size: 48px; font-weight: bold; color: #ff0080; text-shadow: 2px 2px 0 #00d4ff;');
console.log('%cThe Christchurch 24 Hour Film Festival!', 'font-size: 16px; color: #ffd700;');
console.log('%cMake a film in 24 hours. March 27-28, 2026.', 'font-size: 12px; color: #f5f0e8;');
console.log('%cPsst... try the Konami code for a surprise!', 'font-size: 10px; color: #666;');
