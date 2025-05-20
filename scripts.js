// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', e => {
        navLinks.forEach(l => l.classList.remove('active'));
        e.target.classList.add('active');
      });
    });
  });

  document.addEventListener('mousemove', (e) => {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = `${e.clientX}px`;
    sparkle.style.top = `${e.clientY}px`;
    document.body.appendChild(sparkle);
  
    setTimeout(() => {
      sparkle.remove();
    }, 1000); // match animation duration
  });
  
  // Create the shimmer element
const shimmer = document.createElement('div');
shimmer.className = 'mouse-shimmer';
document.body.appendChild(shimmer);

// Move shimmer with the mouse
document.addEventListener('mousemove', (e) => {
  shimmer.style.left = `${e.clientX - 9}px`; // Center the shimmer
  shimmer.style.top = `${e.clientY - 9}px`;

  // Optional sparkles
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.style.left = `${e.clientX}px`;
  sparkle.style.top = `${e.clientY}px`;
  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 1000);
});
