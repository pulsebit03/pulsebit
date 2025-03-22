'use client';

export function initAnimations() {
  if (typeof window === 'undefined') return;

  // Reset any existing animations
  document.querySelectorAll('.visible').forEach(el => {
    el.classList.remove('visible');
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '50px'
    }
  );

  const observeElements = () => {
    const elements = document.querySelectorAll(
      '.scroll-trigger, .scale-trigger, .fade-trigger, .slide-right'
    );
    elements.forEach((el) => observer.observe(el));
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observeElements);
  } else {
    observeElements();
  }
}