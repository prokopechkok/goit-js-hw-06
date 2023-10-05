const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const galleryUl = document.querySelector(".gallery");

const markup = images
  .map(
    ({ url, alt }) =>
      `<li class="js3-item"><img class="js3-img" src="${url}" alt="${alt}"></li>`
  )
  .join("");

galleryUl.insertAdjacentHTML("beforeend", markup);

galleryUl.style.display = "flex";
galleryUl.style.listStyle = "none";
galleryUl.style.flexDirection = "column";
galleryUl.style.alignItems = "center";

const items = document.getElementsByClassName("js3-item");
const imgs = document.getElementsByClassName("js3-img");

[...items].forEach((element) => {
  element.style.width = "200px";
  element.style.marginRight = "10px";
});

[...imgs].forEach((image) => (image.style.width = "200px"));
