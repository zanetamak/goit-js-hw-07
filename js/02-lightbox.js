
import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

const galleryElements = galleryItems
	.map(
		(item) =>
            `<a class="gallery__link" href=${item.original}>
            <img class="gallery__image"
            src=${item.preview} data-source=${item.original} 
            alt=${item.description}/></a></li>`
	)
    .join("");
newFunction();
    
const lightBox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
    captionPosition: "bottom",
    
});   

lightBox.on('show.simplelightbox');

function newFunction() {
    galleryList.insertAdjacentHTML('beforeend', galleryElements);
 
}

