document.getElementById('year').textContent = new Date().getFullYear();

// Mobile index nav toggle
const toggle = document.getElementById('indexToggle');
const nav = document.getElementById('indexNav');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Scroll reveal
const sections = document.querySelectorAll('.section');
if ('IntersectionObserver' in window && !prefersReduced) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  sections.forEach(el => io.observe(el));
} else {
  sections.forEach(el => el.classList.add('in-view'));
}

// Active index link on scroll
const navLinks = Array.from(document.querySelectorAll('.index-list a'));
const idToLink = {};
navLinks.forEach(a => { idToLink[a.getAttribute('href').slice(1)] = a; });

if ('IntersectionObserver' in window) {
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const link = idToLink[entry.target.id];
      if (!link) return;
      if (entry.isIntersecting) {
        navLinks.forEach(a => a.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }, { rootMargin: '-45% 0px -45% 0px' });
  [document.getElementById('top'), ...sections].forEach(el => el && navObserver.observe(el));
}
