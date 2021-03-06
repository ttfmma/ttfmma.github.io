const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const items = document.querySelectorAll(".item");

/* Toggle mobile menu */
function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    toggle.querySelector("a").innerHTML = "<i class='fa fa-bars'></i>";
  } else {
    menu.classList.add("active");
    toggle.querySelector("a").innerHTML = "<i class='fa fa-times'></i>";
  }
}

/* Activate Submenu */
function toggleItem() {
  if (this.classList.contains("submenu-active")) {
    this.classList.remove("submenu-active");
  } else if (menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
    this.classList.add("submenu-active");
  } else {
    this.classList.add("submenu-active");
  }
}

/* Close Submenu From Anywhere */
function closeSubmenu(e) {
  if (menu.querySelector(".submenu-active")) {
    let isClickInside = menu
      .querySelector(".submenu-active")
      .contains(e.target);

    if (!isClickInside && menu.querySelector(".submenu-active")) {
      menu.querySelector(".submenu-active").classList.remove("submenu-active");
    }
  }
}
/* Event Listeners */
toggle.addEventListener("click", toggleMenu, false);
for (let item of items) {
  if (item.querySelector(".submenu")) {
    item.addEventListener("click", toggleItem, false);
  }
  item.addEventListener("keypress", toggleItem, false);
}
document.addEventListener("click", closeSubmenu, false);

/* Coaches slider */

var slideIndex = 1;
var slideInfoIndex = 1;
showSlides(slideIndex);

function nextSlide(x) {
  showSlides(slideIndex += x, slideInfoIndex += x);
}

function currentSlide(x) {
  showSlides(slideIndex = x, slideInfoIndex += x);
}

function showSlides(x, y) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var slideInfos = document.getElementsByClassName("slideInfo");
  if (x > slides.length) {
      slideIndex = 1;
      slideInfoIndex = 1;
    }    
  if (x < 1) {
      slideIndex = slides.length;
      slideInfoIndex = slideInfos.length;
    }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
      slideInfos[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "inline";  
  slideInfos[slideInfoIndex-1].style.display = "inline";  
}
