const navbar = document.querySelector(".navbar");
const headerIcon = document.querySelector(".header-icon");
const bannerContent = document.querySelector(".banner-content");

function updateNavbar() {
    if (window.innerWidth <= 1024) {
        navbar.innerHTML = `<span class="hamburger">&#9776;</span>`;
        headerIcon.classList.remove("gap-30px");
        headerIcon.classList.add("gap-20px");
        bannerContent.classList.remove("color-scheme-4");
    } else {
        navbar.innerHTML = `<ul class="list-style-unset flex gap-20px">
                                <li><a href="#">Learn</a></li>
                                <li><a href="#">Shop</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Connect</a></li>
                                <li><a href="#">My account</a></li>
                                <li><a href="#">Store Locater</a></li>
                            </ul>`
        bannerContent.classList.add("color-scheme-4");
        headerIcon.classList.remove("gap-20px");
        headerIcon.classList.add("gap-30px");
    }
}
updateNavbar();
window.addEventListener("resize", updateNavbar)

// swiper //
// let swiper = new Swiper(".mySwiper", {
//     pagination: {
//         el: ".swiper-pagination",
//     },
// });
let swiper = new Swiper(".mySwiper", {
  loop: true, 
  speed: 700,
  pagination: {
    el: ".swiper-pagination",
    clickable: true, 
  },
  autoplay: {
    delay: 3000, 
    disableOnInteraction: false,
  },
});