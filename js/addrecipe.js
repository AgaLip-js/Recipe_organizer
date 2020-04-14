function myFunction() {
  const addPhoto = document.querySelector(".inputfile");
  const label = document.getElementById("fileLabel");

  addPhoto.addEventListener("change", function () {
    let fileName = "";
    if (this.files) {
      fileName = this.files;
      label.innerHTML = this.files[0].name;
    }
  });

  const addItems = document.querySelector(".buttonAddNew");
  const itemsList = document.querySelector(".plates");
  let items = [];

  function addItem(e) {
    e.preventDefault();
    let text = document.querySelector(".testClass").value;
    const item = {
      text,
      done: false,
    };
    items.push(item);
    populateList(items, itemsList);
    let newInput = document.querySelector(".testClass");
    newInput.value = "";
    let account = document.getElementById("ingr_account");
    let currentValue = account.value;
    let itemValue = items.length;
    currentValue = itemValue;
    let numberValue = parseInt(currentValue, 10);
    console.log(numberValue);
    account.setAttribute("value", numberValue);
  }

  addItems.addEventListener("click", addItem);

  function populateList(plates, platesList) {
    platesList.innerHTML = plates
      .map((plate, i) => {
        return `
                      <li>
                      <label for="item${i}" id=${i}>${plate.text}</label>
                      <button class="trash fas fa-trash" id="${i}
                      "></button>
                      </li>
        `;
      })
      .join("");
    trashFunction();
  }
  populateList(items, itemsList);

  function trashFunction() {
    const trash = document.querySelectorAll(".trash");

    function removeItem(e) {
      e.preventDefault();
      const id = e.target.id;
      const newList = [];
      items.forEach((item, i) => {
        if (i != id) {
          newList.push(item);
        }
      });
      items = newList;
      let account = document.getElementById("ingr_account");
      let currentValue = account.value;
      let itemValue = items.length;
      currentValue = itemValue;
      let numberValue = parseInt(currentValue, 10);
      console.log(numberValue);
      account.setAttribute("value", numberValue);
      populateList(items, itemsList);
    }

    function addEventListenerList(list, event, fn) {
      for (var i = 0, len = list.length; i < len; i++) {
        list[i].addEventListener(event, fn, false);
      }
    }

    addEventListenerList(trash, "click", removeItem);
  }
  let ingredients = document.querySelector(".add-ingredients");
  ingredients.addEventListener("keydown", (e) => {
    if (e.keyCode == 13) {
      e.preventDefault();
      return false;
    }
  });
  function submitFn() {
    document.getElementById("saveData").submit();
  }
}
