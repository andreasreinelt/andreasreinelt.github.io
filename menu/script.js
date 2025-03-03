document.getElementById("menu-toggle").addEventListener("click", function () {
  document.querySelector(".nav-menu").classList.toggle("open");
});

document.addEventListener("click", function (event) {
  var menu = document.querySelector(".nav-menu");
  var button = document.getElementById("menu-toggle");
  if (!menu.contains(event.target) && event.target !== button) {
    menu.classList.remove("open");
  }
});