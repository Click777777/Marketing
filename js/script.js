let BAR = document.querySelectorAll(".barCls")[0];
let outlines = document.querySelectorAll(".outlines")[0];
let home = document.getElementById("1");
let loaderPage = document.querySelectorAll(".loaderPage")[0];

BAR.addEventListener("click", () => {
  if (BAR.classList.contains("fa-bars")) {
    BAR.classList.remove("fa-bars");
    BAR.classList.add("fa-times");
  } else {
    BAR.classList.remove("fa-times");
    BAR.classList.add("fa-bars");
  }
});

let move = () => {
  let scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 180;
    let currentId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      let iddd = document.querySelector(".payHtar a[href*=" + currentId + "]");
      let widthClicked = iddd.offsetWidth;
      let leftClicked = iddd.offsetLeft;
      outlines.style.width = `${widthClicked}px`;
      outlines.style.transform = `translateX(${leftClicked}px)`;
    }
  });
};

const sections = document.querySelectorAll("section[id]");
let firstHome = document.querySelector(`.payHtar a[href*=home]`);
let widthClicked = home.offsetWidth;
let leftClicked = home.offsetLeft;
outlines.style.width = `${widthClicked}px`;
outlines.style.transform = `translateX(${leftClicked}px)`;
window.addEventListener("scroll", move);

window.addEventListener("load", () => {
  console.log("Loaded");
  loaderPage.classList.add("animate__animated", "animate__fadeOut");
  loaderPage.remove();
});
