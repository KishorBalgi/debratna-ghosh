const buyBtn = document.querySelectorAll(".buy-btn");
const buy = document.getElementById("buy");
const buyImg = document.querySelector(".buy-image");

buyBtn.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    const img = e.target.dataset.img;
    buyImg.setAttribute("src", `Vendors/Images/${img}.jpeg`);
    buy.scrollIntoView({ behavior: "smooth" });
  })
);
