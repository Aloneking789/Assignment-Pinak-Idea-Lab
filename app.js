const serviceBoxes = document.querySelectorAll('.service-box');

serviceBoxes.forEach((box) => {
  box.addEventListener('mouseenter', () => {
    anime({
      targets: box,
      rotateY: '+=360deg',  // Rotate on Y-axis
      duration: 1000,  // Smooth 1-second rotation
      easing: 'easeInOutQuad',  // Easing for smooth effect
    });
  });
});
