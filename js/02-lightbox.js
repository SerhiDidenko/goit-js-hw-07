import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const images = galleryItems.map(item => {

    let listItem = document.createElement('li');
    listItem.classList.add('gallery__item');

    let link = document.createElement('a');
    link.classList.add('gallery__link');
    link.href = item.original;

    let img = document.createElement('img');
    img.classList.add('gallery__image');
    img.src = item.preview;
    img.alt = item.description;

    link.append(img);
    listItem.append(link);

    return listItem
});

gallery.append(...images);

let options = {
    captionsData: 'alt',
    captionDelay: 250,
};

new SimpleLightbox('.gallery a', options);

console.log(galleryItems);
