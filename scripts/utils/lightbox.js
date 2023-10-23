class Lightbox {
  constructor(listElement) {
    // Initialise la classe Lightbox avec une liste d'éléments multimédias
    this.currentElement = null;
    this.listElement = listElement;
    this.manageEvent();
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  // Méthode pour trouver l'indice d'un élément par son ID
  getElementById(id) {
    return this.listElement.findIndex((element) => element.id == id);
  }

  // Méthode pour afficher la lightbox
  display() {
    this.$lightboxWrapper = document.querySelector(".lightbox");
    this.$lightboxWrapper.style.display = "block";
    const btnClose = document.querySelector(".lightbox__close");
    btnClose.focus();
  }

  // Méthode pour construire le contenu de la lightbox en fonction de l'ID
  buildDom(id) {
    this.display();
    document.addEventListener("keyup", this.onKeyUp);
    const container = document.querySelector(".lightbox__container");
    this.currentElement = this.getElementById(id);
    const currentMedia = this.listElement[this.currentElement];
    const mediaContent = currentMedia.image
      ? ` <img class="gallery_thumbnail" src="./assets/images/${currentMedia.photographerId}/${currentMedia.image}" alt="${currentMedia.title}">`
      : ` 
      <video controls aria-label="${currentMedia.alt}"><source src="./assets/images/${currentMedia.photographerId}/${currentMedia.video}" type="video/mp4"></video>`;
    const lightboxMedia = ` <figure
              class="lightbox__media"
              role="media"
              aria-label="Media closeup view"
              >${mediaContent}</figure>
              <h2>${currentMedia.title}</h2>`;
    container.innerHTML = lightboxMedia;
  }

  // Méthode pour gérer les événements de la lightbox
  manageEvent() {
    document
      .querySelector(".lightbox__close")
      .addEventListener("click", this.close.bind(this));
    document
      .querySelector(".lightbox__next")
      .addEventListener("click", this.next.bind(this));
    document
      .querySelector(".lightbox__prev")
      .addEventListener("click", this.prev.bind(this));
  }

  // Méthode pour gérer les événements liés aux touches (Escape, gauche, droite)
  onKeyUp(e) {
    if (e.key === "Escape") {
      this.close(e);
    } else if (e.key === "ArrowLeft") {
      this.prev(e);
    } else if (e.key === "ArrowRight") {
      this.next(e);
    }
  }

  // Méthode pour fermer la lightbox
  close(e) {
    e.preventDefault();
    this.$lightboxWrapper = document.querySelector(".lightbox");
    this.lightbox__container = document.querySelector(".lightbox__container");
    this.$lightboxWrapper.style.display = "none";
    this.lightbox__container.innerHTML = "";
    document.removeEventListener("keyup", this.onKeyUp);
  }

  // Méthode pour afficher l'image suivante
  next(e) {
    e.preventDefault();
    let index = this.currentElement;
    if (index == this.listElement.length - 1) {
      this.currentMedia = this.listElement[0];
    } else {
      this.currentMedia = this.listElement[index + 1];
    }
    this.buildDom(this.currentMedia.id);
  }

  // Méthode pour afficher l'image précédente
  prev(e) {
    e.preventDefault();
    let index = this.currentElement;
    if (index == 0) {
      this.currentMedia = this.listElement[this.listElement.length - 1];
    } else {
      this.currentMedia = this.listElement[index - 1];
    }
    this.buildDom(this.currentMedia.id);
  }
}
