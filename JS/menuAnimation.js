const debounce = function (func, wait, immediate) {
  let timeout;
  return function (...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};





const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
  target.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < window.innerHeight * 0.87) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  });
}
animeScroll()
if (target.length) {
  window.addEventListener('scroll', debounce(function () {
    animeScroll();
  }, 5));
}