document.querySelectorAll('.alphabet').forEach(alphabet => {
    alphabet.addEventListener('mouseover', () => {
      const sound = alphabet.getAttribute('data-sound');
      console.log(sound); 
      const audio = new Audio(`${sound}`);
      audio.play();
    });
  });