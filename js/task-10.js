function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// const controls = document.querySelector("#controls");
// const input = document.querySelector("input");
// const createBtn = document.querySelector("[data-create]");
// const destroyBtn = document.querySelector("[data-destroy]");
// const boxesDiv = document.querySelector("#boxes");

// createBtn.addEventListener("click", createBoxes);
// destroyBtn.addEventListener("click", destroyBoxes);

// // boxesDiv.classList.add(".js10-boxes");

// function createBoxes() {
//   let boxesArr = [];
//   boxesArr.length = input.value;

//   for (let i = 0; i < input.value; i++) {
//     const divBox = document.createElement("div");
//     divBox.classList.add("js10-box");
//     divBox.style.backgroundColor = getRandomHexColor();
//     divBox.style.width = `${30 + i * 10}px`;
//     divBox.style.height = `${30 + i * 10}px`;
//     boxesArr.push(divBox);
//   }

//   boxesDiv.append(...boxesArr);
// }
// function destroyBoxes() {
//   boxesDiv.innerHTML = "";
// }
