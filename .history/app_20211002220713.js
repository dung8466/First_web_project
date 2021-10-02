var menuIcon = document.querySelector(".menu-icon");
var slidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

menuIcon.onclick = function(){
  slidebar.classList.toggle("small-sidebar");
  container.classList.toggle("large-container");
}
