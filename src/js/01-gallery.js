// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryList = document.querySelector(".gallery");

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
       <a class="gallery__link" href="${original}">
         <img
         class="gallery__image"
         src="${preview}"
         data-source="${original}"
         alt="${description}"/>
       </a>
     </li>`
    )
    .join("");
}

galleryList.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

galleryList.addEventListener("click", (evt) => {
  evt.preventDefault();

  const clickedImage = evt.target.closest(".gallery__image");
  if (!clickedImage) return;

  const instance = basicLightbox.create(
    `<img src="${clickedImage.dataset.source}">`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", closeModal);
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", closeModal);
      },
    }
  );

  function closeModal(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }

  instance.show();
});