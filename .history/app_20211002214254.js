var menuIcon = document.querySelector(".menu-icon");
var slidebar = document.querySelector(".sidebar");

menuIcon.onclick = function(){
  slidebar.classList.toggle("small-sidebar");
}
