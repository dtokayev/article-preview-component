const shareButton = document.getElementById('share-button');
const shareMenu   = document.getElementById('share-menu');
shareButton.addEventListener('click', () => {
  shareMenu.classList.toggle('menu-active');
  shareButton.classList.toggle('button-active');
});
