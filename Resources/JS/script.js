// JAVASCRIPT CODE:
// SELECTORS:
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const logoLink = document.querySelector(".logo-link");
const logo = document.querySelector(".logo");
const navLinks = document.querySelectorAll(".nav-links");
const navMob = document.querySelector(".nav-mobile");
const sections = document.querySelectorAll("section");
const about = document.querySelector(".about-btn");
const mobLink = document.querySelectorAll(".nav-mobile-link");
const modalNav = document.querySelector(".nav-mobile-modal");
const overlay = document.querySelector(".overlay");
const emailbtn = document.querySelector(".email-btn");

// SCROLL INTO VIEW:
navLinks.forEach((nav) =>
  nav.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("nav-link")) {
      const id = e.target.getAttribute("href");
      if (id[0] === "#") {
        document.querySelector(id).scrollIntoView({ behavior: "smooth" });
      } else {
        open(id);
      }
    }
  })
);
logoLink.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector("#home").scrollIntoView({ behavior: "smooth" });
});
about.addEventListener("click", function (e) {
  e.preventDefault;
  document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
});
// STICKY NAV:
const navHeight = nav.getBoundingClientRect().height;
const sticky = function (entry) {
  const [entries] = entry;
  if (!entries.isIntersecting) {
    nav.classList.add("sticky");
    logo.setAttribute("src", "Resources/Images/Logo-White.png");
  } else {
    nav.classList.remove("sticky");
    logo.setAttribute("src", "Resources/Images/Logo.png");
  }
};
const observerHeader = new IntersectionObserver(sticky, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

observerHeader.observe(header);
// SECTION SCROLL ANIMATION:
const sectionScroll = function (entry, observer) {
  const [entries] = entry;
  if (!entries.isIntersecting) return;
  entries.target.classList.remove("section-hidden");
  observer.unobserve(entries.target);
};
const ObserverSection = new IntersectionObserver(sectionScroll, {
  root: null,
  threshold: 0.05,
});
sections.forEach((section) => {
  ObserverSection.observe(section);
  section.classList.add("section-hidden");
});
// MOBILE NAV:
navMob.addEventListener("click", function () {
  modalNav.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
mobLink.forEach((link) => {
  link.addEventListener("click", function () {
    modalNav.classList.add("hidden");
    overlay.classList.add("hidden");
  });
});

overlay.addEventListener("click", function () {
  modalNav.classList.add("hidden");
  overlay.classList.add("hidden");
});
// Copy to CLip Board
function copy() {
  alert("E-Mail: debcorps17@gmail.com");
}
emailbtn.addEventListener("click", copy);
