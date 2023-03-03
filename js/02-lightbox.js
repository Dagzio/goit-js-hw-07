import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryDiv = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);


function createGalleryMarkup() {
	return galleryItems.map(item => {
		return `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" title="${item.description}" />
</a>`})
.join('')
};

galleryDiv.innerHTML = galleryMarkup;



galleryDiv.addEventListener('click', onImageClick);

function onImageClick(event) {
    event.preventDefault();
};

const optionsforLightbox = {
    captionDelay: 250,
    showCounter: false
};

const lightbox = new SimpleLightbox('.gallery a', optionsforLightbox);