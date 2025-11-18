

// Initialize scroll animations
export const initScrollAnimations = () => {
  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) return;

  // Create intersection observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Optional: unobserve after reveal to improve performance
          // observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of element is visible
      rootMargin: '0px 0px -50px 0px' // Start animation slightly before element enters viewport
    }
  );

  // Observe all elements with scroll-reveal classes
  const scrollElements = document.querySelectorAll(
    '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale'
  );
  
  scrollElements.forEach((el) => observer.observe(el));

  // Return cleanup function
  return () => observer.disconnect();
};

// Stagger animation helper
export const addStaggerDelay = (elements, baseDelay = 100) => {
  elements.forEach((el, index) => {
    el.style.animationDelay = `${index * baseDelay}ms`;
  });
};