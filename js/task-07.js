const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

input.addEventListener("input", onInput);

function onInput(event) {
  const targetValue = event.target.value;

  span.style.fontSize = `${targetValue}px`;
}
