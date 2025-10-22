const navbar = document.querySelector(".navbar");
const headerIcon = document.querySelector(".header-icon");
const footerNavWrapper = document.querySelector(".footer-nav-wraaper");
const ageFormSubmitBtn = document.getElementById("age-form-submit-btn");
const popUpWrapper = document.querySelector(".pop-up-wrapper");
const welPopUpWrapper = document.querySelector(".wel-pop-up-wrapper");
const invalidAgeWrapper = document.querySelector(".invalid-age-wrapper");

function updateNavbar() {
  if (window.innerWidth <= 990) {
    navbar.innerHTML = `<span class="hamburger">&#9776;</span>`;
    headerIcon.classList.remove("gap-30px");
    headerIcon.classList.add("gap-20px");
    footerNavWrapper.classList.remove("justify-content-between");
    footerNavWrapper.classList.add("flex-wrap");
  } else {
    navbar.innerHTML = `<ul class="list-style-unset flex gap-10px">
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
let swiper1 = new Swiper(".mySwiper1", {
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
let swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 20,
  slidesPerView: 1.5,
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});
let swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 1.5,
  spaceBetween: 20,
  observer: true,
  observeParents: true,
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    }
  }
});
let swiper4 = new Swiper(".mySwiper4", {
  slidesPerView: 1,
  spaceBetween: 20,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: ".swiper-button-next4",
    prevEl: ".swiper-button-prev4",
  },
});
// pop up //
window.addEventListener("load", () => {
  if (localStorage.getItem("User-age") == null) {
    document.body.style.overflow = 'hidden';
    welPopUpWrapper.style.display = "none";
    popUpWrapper.style.display = "flex";
  } else {
    popUpWrapper.style.display = "none";
    document.body.style.overflow = 'auto';
  }
});
ageFormSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const Age = document.getElementById("age").value.trim();
  if(Age >= 18 && Age <= 100){
     localStorage.setItem("User-age", Age);
      document.body.style.overflow = 'auto';
      popUpWrapper.style.display = "none";
      invalidAgeWrapper.style.display = "none";
      welPopUpWrapper.style.display = "flex";
      setTimeout(() => {
        welPopUpWrapper.style.display = "none";
      }, 2000);
  } else{
    popUpWrapper.style.display = "none";
    invalidAgeWrapper.style.display = "flex";
    setTimeout(() => {
      popUpWrapper.style.display = "flex";
      invalidAgeWrapper.style.display = "none";
    }, 2000);
  };
});