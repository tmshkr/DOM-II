const funBus = document.querySelector("header.intro img");

funBus.addEventListener("mouseover", e => {
  e.target.style.transform = "scaleX(-1)";
});
funBus.addEventListener("mouseleave", e => {
  e.target.style.transform = null;
});
funBus.addEventListener("mousedown", e => {
  e.target.style.filter = "invert(1)";
});
funBus.addEventListener("mouseup", e => {
  e.target.style.filter = null;
});

document.querySelectorAll("p, h2, h4").forEach(el => {
  el.onmouseover = e => {
    e.target.parentElement.removeChild(e.target);
  };
});

window.addEventListener("load", () => {
  console.log("The page loaded");
});

window.onscroll = () => console.log(window.scrollY);

const header = document.querySelector("header.main-navigation");
const navLinks = document.querySelectorAll(".nav-link");
const colors = ["orange", "skyblue", "teal", "peru"];

navLinks.forEach((el, i) => {
  el.addEventListener("click", e => {
    e.preventDefault();
    e.stopPropagation();
    header.style.background = colors[i];
  });
});

header.addEventListener("click", e => {
  header.style.background = "red";
});
header.addEventListener("mouseleave", e => {
  header.style.background = null;
});

document.body.onkeydown = () => {
  document.body.classList.add("dark");
};

document.body.onkeyup = () => {
  document.body.classList.remove("dark");
};

document.querySelectorAll("div.destination div.btn").forEach(el => {
  el.onclick = e => {
    e.target.parentElement.style.border = "3px solid blue";
  };
});

Draggable.create("section img", {
  type: "x,y",
  inertia: true
});
