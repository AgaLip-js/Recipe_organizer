let imgObject = [
  "recipe1.jpg",
  "recipe2.jpg",
  "recipe6.jpg",
  "recipe4.jpg",
  "recipe5.jpg",
  "recipe3.jpg",
];
let titleObj = [
  "Przepis 1",
  "Przepis 2",
  "Przepis 3",
  "Przepis 4",
  "Przepis 5",
  "Przepis 6",
];

let mainImg = 0;
let prevImg = imgObject.length - 1;
let nextImg = 1;

function loadGallery() {
  let mainView = document.getElementById("mainView");
  let mainTitle = document.getElementById("mainTitle");
  mainView.style.backgroundImage = "url(" + imgObject[mainImg] + ")";
  mainTitle.innerHTML = titleObj[mainImg];

  let leftView = document.getElementById("leftView");
  leftView.style.backgroundImage = "url(" + imgObject[prevImg] + ")";
  let leftTitle = document.getElementById("leftTitle");
  leftTitle.innerHTML = titleObj[prevImg];

  let rightView = document.getElementById("rightView");
  rightView.style.backgroundImage = "url(" + imgObject[nextImg] + ")";
  let rightTitle = document.getElementById("rightTitle");
  rightTitle.innerHTML = titleObj[nextImg];
}
function scrollRight() {
  prevImg = mainImg;
  mainImg = nextImg;
  if (nextImg >= imgObject.length - 1) {
    nextImg = 0;
  } else {
    nextImg++;
  }
  loadGallery();
}

function scrollLeft() {
  clicked = true;
  nextImg = mainImg;
  mainImg = prevImg;

  if (prevImg === 0) {
    prevImg = imgObject.length - 1;
  } else {
    prevImg--;
  }
  loadGallery();
}

document.getElementById("navRight").addEventListener("click", scrollRight);
document.getElementById("navLeft").addEventListener("click", scrollLeft);

document.addEventListener("keyup", function (e) {
  if (e.keyCode === 37) {
    scrollLeft();
  } else if (e.keyCode === 39) {
    scrollRight();
  }
});
loadGallery();
startFunction();

function startFunction() {
  window.setInterval(scrollRight, 6000);
}
