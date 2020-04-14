let modal = document.getElementById("addrecipe");
let btn = document.querySelector(".add_recipes");
let span = document.querySelector(".close-btn");

btn.onclick = function () {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
};

span.onclick = function () {
  modal.style.display = "none";
  document.body.style.overflowX = "hidden";
  document.body.style.overflowY = "auto";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflowX = "hidden";
    document.body.style.overflowY = "auto";
  }
};
