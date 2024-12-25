document.querySelectorAll('.alphabet').forEach(alphabet => {
    alphabet.addEventListener('mouseover', () => {
      const sound = alphabet.getAttribute('data-sound');
      const audio = new Audio(`audio/${sound}`);
      audio.play();
    });
  });