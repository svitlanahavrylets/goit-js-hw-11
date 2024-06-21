// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getImages } from './js/pixabay-api';
import { imagesTemplate } from './js/render-functions';

const refs = {
  form: document.querySelector('.form'),
  input: document.querySelector('.input'),
  button: document.querySelector('button'),
  //   gallery: document.querySelector('.images-gallery'),
};

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  const inputValue = e.target.elements.text.value.trim();

  getImages(inputValue)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.show({
          //   title: '',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        console.log(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      }
      const galleryEl = document.querySelector('.images-gallery');
      const markup = imagesTemplate(data);
      console.log(markup);
      galleryEl.insertAdjacentElement('beforeend', markup);
    })
    .catch(err => {});
});
