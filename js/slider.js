document.addEventListener('DOMContentLoaded', function () {
    let slider = new SimpleAdaptiveSlider('.slider', {
      loop: true,
      autoplay: true,
      interval: 3000,
      swipe: true,
    });
  });