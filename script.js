setTimeout(() => {
  window.onmousemove = (e) => handleOnMove(e);

  window.ontouchmove = (e) => handleOnMove(e.touches[0]);
}, 3500);

const images = document.getElementsByClassName("image");

let Index = 0;

last = { x: 0, y: 0 };
const activate = (img, x, y) => {
  img.style.left = `${x}px`;
  img.style.top = `${y}px`;
  img.style.zIndex = Index;

  img.dataset.status = "active";

  last = { x, y };
};

const lengthfromend = (x, y) => {
  return Math.hypot(x - last.x, y - last.y);
};

window.handleOnMove = (e) => {
  if (lengthfromend(e.clientX, e.clientY) > window.innerWidth / 20) {
    const first = images[Index % 10],
      tail = images[(Index - 5) % 10];
    document.getElementById("image-text").innerText = first.getAttribute("alt");
    activate(first, e.clientX, e.clientY);

    if (tail) tail.dataset.status = "inactive";
    Index++;
  }
};

var cursor = document.querySelector(".cursor");
var cursorinner = document.querySelector(".cursor2");
var a = document.querySelectorAll("a");
document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
  cursorinner.style.left = x + "px";
  cursorinner.style.top = y + "px";
});

document.addEventListener("mousedown", function () {
  cursor.classList.add("click");
  cursorinner.classList.add("cursorinnerhover");
});

document.addEventListener("mouseup", function () {
  cursor.classList.remove("click");
  cursorinner.classList.remove("cursorinnerhover");
});

a.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cursor.classList.add("hover");
  });
  item.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover");
  });
});
