const input = document.querySelector("#name-input");
const spanOutput = document.querySelector("#name-output");

input.addEventListener("input", onInput);

function onInput(event) {
  const inputValue = event.currentTarget.value;

  if (inputValue) {
    spanOutput.textContent = inputValue;
  } else {
    spanOutput.textContent = "Anonymous";
  }
}
