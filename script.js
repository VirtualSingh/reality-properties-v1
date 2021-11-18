const menuBtn = document.querySelector("#menu-btn");
const mobileNav = document.querySelector(".mobile-nav");
const list = document.querySelectorAll(".featured__grid-col");
const loadMoreBtn = document.getElementById("loadMore");

// ========show-menu==========
menuBtn.addEventListener("click", () => {
  console.log("menu btn clicked");
  mobileNav.classList.toggle("activate");
});

// ========load-more==========
let cards = 2;
loadMoreBtn.addEventListener("click", (e) => {
  for (let i = cards; i < cards + 2; i++) {
    if (list[i]) {
      list[i].style.display = "block";
    } else {
      console.log("failed");
    }
  }
  cards = cards + 2;
  if (cards >= list.length) {
    e.target.style.display = "none";
  }
});

// ==========carousel===================
const moveLeft = document.querySelector(".arrow__left");
const moveRight = document.querySelector(".arrow__right");
const carouselTrack = document.querySelector("#carousel__track");
const slides = [...document.querySelectorAll("#slide")];

const slideWidth = slides[0].getBoundingClientRect().width;
console.log(slides);
console.log(slideWidth);
