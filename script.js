// Smooth scroll on "Get in Touch" button
document.querySelector('.btn').addEventListener('click', () => {
  document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
});
