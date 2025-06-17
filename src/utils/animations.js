// Simple animation utility functions

// Fade in element
export const fadeIn = (element, duration = 1000, delay = 0) => {
  if (!element) return;
  
  element.style.opacity = '0';
  element.style.transition = `opacity ${duration}ms ease ${delay}ms`;
  
  setTimeout(() => {
    element.style.opacity = '1';
  }, 10);
};

// Slide in element from direction
export const slideIn = (element, direction = 'left', duration = 1000, delay = 0, distance = '50px') => {
  if (!element) return;
  
  let transform = '';
  
  switch (direction) {
    case 'left':
      transform = `translateX(-${distance})`;
      break;
    case 'right':
      transform = `translateX(${distance})`;
      break;
    case 'top':
      transform = `translateY(-${distance})`;
      break;
    case 'bottom':
      transform = `translateY(${distance})`;
      break;
    default:
      transform = `translateY(${distance})`;
  }
  
  element.style.opacity = '0';
  element.style.transform = transform;
  element.style.transition = `opacity ${duration}ms ease ${delay}ms, transform ${duration}ms ease ${delay}ms`;
  
  setTimeout(() => {
    element.style.opacity = '1';
    element.style.transform = 'translate(0)';
  }, 10);
};

// Reveal on scroll
export const createScrollReveal = () => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const handleIntersect = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const animation = element.dataset.animation || 'fade';
        const delay = parseInt(element.dataset.delay || 0, 10);
        
        if (animation === 'fade') {
          fadeIn(element, 1000, delay);
        } else if (animation.startsWith('slide')) {
          const direction = animation.split('-')[1] || 'bottom';
          slideIn(element, direction, 1000, delay);
        }
        
        observer.unobserve(element);
      }
    });
  };
  
  return new IntersectionObserver(handleIntersect, observerOptions);
};