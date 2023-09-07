
import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

const galleryElements = galleryItems
	.map(
		(item) =>
            `<li class="gallery__item">
            <a class="gallery__link" href=${item.original}>
            <img class="gallery__image"
            src=${item.preview} data-source=${item.original} 
            alt=${item.description}/></a></li>`
	)
    .join("");

galleryList.addEventListener("click", onImgShow)

function onImgShow (event) {
	event.preventDefault();

	if (event.target.nodeName !== "IMG") {
		return;
	}
    const url = event.target.dataset.source;
    
    const openUrl = basicLightbox.create(`<img src="${url}">`);
	openUrl.show();

document.addEventListener("keydown", escapeBtn);
function escapeBtn(eventKey) {
    if (eventKey.code === "Escape") {
        openUrl.close();
        document.removeEventListener("keydown", escapeBtn);
    }
}
}

galleryList.insertAdjacentHTML('beforeend', galleryElements);
