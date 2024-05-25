const button = document.getElementById('get-started');

button.addEventListener('click', () => {
  button.classList.add('clicked');
  setTimeout(() => {
    button.classList.remove('clicked');
  }, 200);
});
