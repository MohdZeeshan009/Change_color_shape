import "./styles.css";
const outer = document.getElementById("outer-box");
const inner = document.getElementById("inner-box");
const color = document.getElementById("color-btn");
const shape = document.getElementById("shape-btn");

color.addEventListener("click", function () {
  outer.style.backgroundColor = "green";
});
//

shape.addEventListener("click", function (event) {
  inner.style.borderRadius = "50%";
  event.stopPropagation();
});
