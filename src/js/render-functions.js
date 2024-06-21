export function imagesTemplate(data) {
  //   console.log(data.hits);
  data.hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="gallery-item">
          <div class="gallery-images">
            <a class="gallery-link" href="${webformatURL}">
            // <img
            // class="gallery-image"
            // src=${largeImageURL}
            // data-source="${webformatURL}"
            // alt=${tags}
            // />
            // </a>
          </div>
          <div class="gallery-card-container">
            <h3 class="gallery-card-title">Likes</h3>
            <p class="gallery-card-text">${likes}</p>
                  <h3 class="gallery-card-title">Views</h3>
            <p class="gallery-card-text">${views}</p>
                  <h3 class="gallery-card-title">Comments</h3>
            <p class="gallery-card-text">${comments}</p>
                  <h3 class="gallery-card-title">Downloads</h3>
            <p class="gallery-card-text">${downloads}</p>
          </div>
        </li>`;
      }
    )
    .join('');
}
