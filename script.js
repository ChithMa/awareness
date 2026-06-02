const learnMoreButton = document.getElementById('learnMoreBtn');

if (learnMoreButton) {
  learnMoreButton.addEventListener('click', () => {
    const target = document.getElementById('warning-signs');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    learnMoreButton.blur();
  });
}
