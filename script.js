
document.querySelectorAll('.feature-box').forEach(box => {
  box.addEventListener('touchstart', () => {
    box.classList.add('tapped');
    setTimeout(() => box.classList.remove('tapped'), 300);
  });

  box.addEventListener('mouseenter', () => {
    box.classList.add('hovered');
  });

  box.addEventListener('mouseleave', () => {
    box.classList.remove('hovered');
  });
});
document.querySelectorAll('.contact-btn').forEach(button => {
  button.addEventListener('click', function (e) {
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.left = ${e.offsetX}px;
    ripple.style.top = ${e.offsetY}px;
    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });

  button.addEventListener('touchstart', () => {
    button.classList.add('touched');
    setTimeout(() => button.classList.remove('touched'), 300);
  });
});
