const input = document.querySelector("#validation-input");

input.addEventListener("blur", onBlur);

function onBlur(event) {
  const target = event.currentTarget;
  const { length } = target.dataset;

  const classList = input.classList;

  if (target.value.length === Number(length)) {
    if (classList.contains("invalid")) {
      classList.remove("invalid");
    }
    classList.add("valid");
  } else {
    classList.add("invalid");
  }
}
