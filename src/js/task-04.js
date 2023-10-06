let counterValue = 0;

const decrBtn = document.querySelector('[data-action="decrement"]');
const incrBtn = document.querySelector('[data-action="increment"]');
const spanValue = document.querySelector("#value");

decrBtn.addEventListener("click", onClick);
incrBtn.addEventListener("click", onClick);

function onClick(event) {
  // console.log(event);
  // console.dir(event.currentTarget);

  const currBtn = event.currentTarget;

  if (currBtn.dataset.action === "decrement") {
    counterValue -= 1;
  } else {
    counterValue += 1;
  }
  spanValue.textContent = counterValue;
}
