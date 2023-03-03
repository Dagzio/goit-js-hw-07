import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryDiv = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);


function createGalleryMarkup() {
	return galleryItems.map(item => {
		return `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`})
.join('')
};

galleryDiv.innerHTML = galleryMarkup;


galleryDiv.addEventListener('click', onImageClick);


function onImageClick(event) {
	event.preventDefault();

const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`);
	instance.show();

	document.addEventListener('keydown', onPressEsc);
	function onPressEsc(event){
		if (event.code === 'Escape' && instance.visible) {
			instance.close();
			document.removeEventListener('keydown');
		}
	};

};





	









