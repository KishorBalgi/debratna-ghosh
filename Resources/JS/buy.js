const buyBtn = document.querySelectorAll(".buy-btn");
const buy = document.getElementById("buy");
const buyImg = document.querySelector(".buy-image");
const slider = document.querySelectorAll(".slider");
buyBtn.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    const img = e.target.dataset.img;
    buyImg.setAttribute("src", `Vendors/Images/${img}.jpeg`);
    buy.scrollIntoView({ behavior: "smooth" });
  })
);
// //Album Slider:
const slider1 = function () {
  const slides = document.querySelectorAll(`.slide-0`);
  const btnLeft1 = document.querySelector(".btn-slider-left-1");
  const btnRight1 = document.querySelector(".btn-slider-right-1");
  let currentSlide = 0;
  const maxSlides1 = slides.length;

  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
      s.classList.add("hidden");
      if (i - slide === 0) s.classList.remove("hidden");
    });
  };
  const init = function (currentSlide) {
    goToSlide(currentSlide);
  };
  init(currentSlide);
  btnLeft1.addEventListener("click", function () {
    if (currentSlide === 0) currentSlide = maxSlides1 - 1;
    else currentSlide--;
    goToSlide(currentSlide);
  });
  btnRight1.addEventListener("click", function () {
    if (currentSlide === maxSlides1 - 1) currentSlide = 0;
    else currentSlide++;
    goToSlide(currentSlide);
  });
};
slider1();

const slider2 = function () {
  const slides = document.querySelectorAll(`.slide-1`);
  const btnLeft2 = document.querySelector(".btn-slider-left-2");
  const btnRight2 = document.querySelector(".btn-slider-right-2");
  let currentSlide = 0;
  const maxSlides2 = slides.length;

  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
      s.classList.add("hidden");
      if (i - slide === 0) s.classList.remove("hidden");
    });
  };
  const init = function (currentSlide) {
    goToSlide(currentSlide);
  };
  init(currentSlide);
  btnLeft2.addEventListener("click", function () {
    if (currentSlide === 0) currentSlide = maxSlides2 - 1;
    else currentSlide--;
    goToSlide(currentSlide);
  });
  btnRight2.addEventListener("click", function () {
    if (currentSlide === maxSlides2 - 1) currentSlide = 0;
    else currentSlide++;
    goToSlide(currentSlide);
  });
};
slider2();
