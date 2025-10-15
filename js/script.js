const navbar = document.querySelector(".navbar");
const headerIcon = document.querySelector(".header-icon");
const footerNavWrapper = document.querySelector(".footer-nav-wraaper");

function updateNavbar() {
    if (window.innerWidth <= 990) {
        navbar.innerHTML = `<span class="hamburger">&#9776;</span>`;
        headerIcon.classList.remove("gap-30px");
        headerIcon.classList.add("gap-20px");
        footerNavWrapper.classList.remove("justify-content-between");
        footerNavWrapper.classList.add("flex-wrap");
    } else {
        navbar.innerHTML = `<ul class="list-style-unset flex gap-20px">
                                <li><a href="#">Learn</a></li>
                                <li><a href="#">Shop</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Connect</a></li>
                                <li><a href="#">My account</a></li>
                                <li><a href="#">Store Locater</a></li>
                            </ul>`
        headerIcon.classList.remove("gap-20px");
        footerNavWrapper.classList.add("justify-content-between");
        footerNavWrapper.classList.remove("flex-wrap");
        headerIcon.classList.add("gap-30px");
    }
}
updateNavbar();
window.addEventListener("resize", updateNavbar)

// swiper //
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