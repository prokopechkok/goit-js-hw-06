const categories = document.querySelector("#categories");
console.log(`Number of categories: ${categories.children.length}`);

[...categories.children].forEach((li) => {
  console.log(`Category: ${li.firstElementChild.textContent}`);
  const innerUl = li.querySelector("ul");
  console.log(`Elements: ${innerUl.children.length}`);
});
