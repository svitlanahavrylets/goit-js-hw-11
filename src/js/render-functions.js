// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

import { refs } from '../main';
export function imagesTemplate(imagesObj) {
  const markup = imagesObj
    .map(image => {
      return `<li class="gallery-item">  
      <a class="gallery-link" 
      href="${image.largeImageURL}">
      <img class="gallery-image" 
      src="${image.webformatURL}"
      alt="${image.tags}"/>
      </a> 
<div class="gallery-card-container">
<p><strong>Likes:</strong> ${image.likes}</p>
<p><strong>Views:</strong> ${image.views}</p>
<p><strong>Comments:</strong> ${image.comments}</p>
<p><strong>Downloads:</strong> ${image.downloads}</p>
<p><strong>Likes:</strong> ${image.likes}</p>
</div>
</li>`;
    })
    .join('');
  refs.gallery.innerHTML = markup;

  const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  }).refresh();
}

export function showLoader() {
  refs.loader.classList.remove('hidden');
}
export function hideLoader() {
  refs.loader.classList.add('hidden');
}
