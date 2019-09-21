var overlay = document.getElementById('overlay');
var closeMenu = document.getElementById('close-menu');
document.getElementById('open-menu').addEventListener('click', function() {
  overlay.classList.remove('inactive');
  overlay.classList.add('active');
});
document.getElementById('close-menu').addEventListener('click', function() {
  overlay.classList.remove('active');
  overlay.classList.add('inactive');
});
