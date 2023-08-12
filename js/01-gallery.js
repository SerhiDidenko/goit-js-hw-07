import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

let instance;

const images = galleryItems.map(item => {

    let listItem = document.createElement('li');
    listItem.classList.add('gallery__item');

    let link = document.createElement('a');
    link.classList.add('gallery__link');
    link.href = item.original;

    let img = document.createElement('img');
    img.classList.add('gallery__image');
    img.src = item.preview;
    img.dataset.source = item.original;
    img.alt = item.description;

    link.append(img);
    listItem.append(link);

    return listItem
});

gallery.append(...images);

const closeModal = (evt) => {
    if (evt.code === 'Escape') instance.close()
}

const openModal = (evt) => {
    if (evt.target.nodeName === 'IMG') {
        evt.preventDefault();
        document.addEventListener('keydown', closeModal);

        let options = {
            onClose: () => document.removeEventListener('keydown', closeModal)
        }

        instance = basicLightbox.create(`<img src="${evt.target.dataset.source}">`, options);
        instance.show();
    }
}

gallery.addEventListener('click', openModal);

console.log(galleryItems);
