class photographerMediaTemplate {
  constructor(media, photographers) {
    // Initialise la classe avec les données des médias et du photographe
    this._photographers = photographers;
    this._media = media;
  }

  // Méthode pour afficher les médias du photographe
  getMediaPhotographer() {
    // Sélectionne le conteneur où afficher les médias
    const $wrapper = document.querySelector(".content_media");
    $wrapper.classList.add("photographer_medias");

    // Génère le contenu HTML pour afficher les médias
    const displayMediaPhotographers = `
      <div class="photograph-media">
        ${this._media
          .map((media) => {
            const mediaContent = media.image
              ? ` <img class="gallery_thumbnail" src="./assets/images/${media.photographerId}/${media.image}" alt="${media.title}">`
              : ` <video class="gallery_thumbnail" aria-label="${media.title}">
                  <source src="./assets/images/${media.photographerId}/${media.video}" type="video/mp4">
              </video>`;

            return `
              <article class="gallery_card">                           
                  <a href="#" data-id=${media.id} role="link" aria-label="View media large">
                      <figure>${mediaContent}</figure>
                  </a>
                  <figcaption>
                      <h2>${media.title}</h2>
                      <div class="likes" role="group" aria-label="Like button and number of likes">
                          <span class="nbLike">${media.likes}</span> 
                          <button class="btn_like" type="button" aria-label="Like" data-id="${media.title}">
                              <span class="fas fa-heart" aria-hidden="true"></span>
                          </button> 
                      </div>
                  </figcaption>
              </article>
            `;
          })
          .join("")}
      </div>
      <aside>
        <p class="photographer_Likes">
          <span class="photographer_likes_count"></span>
          <span class="fas fa-heart" aria-label="likes" aria-hidden="true"></span>
        </p>
        <span>${this._photographers.price}</span>
      </aside>
    `;

    // Injecte le contenu généré dans le conteneur
    $wrapper.innerHTML = displayMediaPhotographers;

    // Retourne le conteneur avec les médias du photographe
    return $wrapper;
  }
}
