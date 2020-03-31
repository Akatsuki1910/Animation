var
  timer = 2000,
  ui = document.getElementById('ui');

setInterval(function() {
  ui.classList.toggle("switch");
  console.log(1);
}, timer);