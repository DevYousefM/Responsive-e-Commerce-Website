let ClassActive = document.querySelectorAll("#addRemoveClass"),
  navbarbtn = document.getElementById("navBtn"),
  listGroup = document.getElementById("list-group"),
  navRemove = document.getElementById("navRemove"),
  navbar = document.getElementById("navBar");

navbarbtn.addEventListener("click", () => {
  ClassActive.forEach((ele) => {
    ele.classList.add("active");
    navRemove.classList.add("active");
  });
});
navRemove.addEventListener("click", () => {
  ClassActive.forEach((ele) => {
    ele.classList.remove("active");
    navRemove.classList.remove("active");
  });
});
document.onclick = (e) => {
  if (e.target.classList[0] === "removeMenu") {
    ClassActive.forEach((ele) => {
      ele.classList.remove("active");
      navRemove.classList.remove("active");
    });
  }
};
window.onscroll = (e) => {
  if (window.scrollY >= 30) {
    navbar.classList.replace("bg-dark", "scrolled");
    navbar.style.boxShadow = "rgb(0 0 0) 0px -7px 10px 5px";
  } else {
    navbar.classList.replace("scrolled", "bg-dark");
    navbar.style.boxShadow = "";
  }
};
// Scroll To Section
let GeToScroll = document.querySelectorAll(".GeToScroll");

GeToScroll.forEach((links) => {
  links.addEventListener("click", function (e) {
    if (e.target.dataset.secid) {
      let target = document.getElementById(`${e.target.dataset.secid}`);
      target.scrollIntoView({ behavior: "smooth", inline: "start" });
      ClassActive.forEach((ele) => {
        ele.classList.remove("active");
        navRemove.classList.remove("active");
      });
    }
  });
});
