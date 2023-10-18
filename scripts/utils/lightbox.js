class Lightbox {
  constructor(listElement) {
    this.currentElement = null;
    this.listElement = listElement;
    this.manageEvent();
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  getElementById(id) {
    return this.listElement.findIndex((element) => element.id == id);
  }
  display() {
    this.$lightboxWrapper = document.querySelector(".lightbox");
    this.$lightboxWrapper.style.display = "block";
    const btnClose = document.querySelector(".lightbox__close");
    btnClose.focus();
  }

  buildDom(id) {
    this.display();

    document.addEventListener("keyup", this.onKeyUp);

    const container = document.querySelector(".lightbox__container");
    this.currentElement = this.getElementById(id);

    const currentMedia = this.listElement[this.currentElement];

    const mediaContent = currentMedia.image
      ? ` <img class="gallery_thumbnail" src="./assets/images/${currentMedia.photographerId}/${currentMedia.image}" alt="${currentMedia.title}">`
      : ` 
      <video controls aria-label="${currentMedia.alt}"><source src="./assets/images/${currentMedia.photographerId}/${currentMedia.video}" type="video/mp4"></video>
                      `;
    const lightboxMedia = ` <figure
              class="lightbox__media"
              role="media"
              aria-label="Media closeup view"
              >${mediaContent}</figure>
              <h2>${currentMedia.title}</h2>`;

    container.innerHTML = lightboxMedia;
  }

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

  onKeyUp(e) {
    if (e.key === "Escape") {
      this.close(e);
    } else if (e.key === "ArrowLeft") {
      this.prev(e);
    } else if (e.key === "ArrowRight") {
      this.next(e);
    }
  }

  /**
   * Ferme la lightbox
   *@param {MouseEvent/KeyboardEvent} e
   */
  close(e) {
    e.preventDefault();

    this.$lightboxWrapper = document.querySelector(".lightbox");
    this.lightbox__container = document.querySelector(".lightbox__container");

    this.$lightboxWrapper.style.display = "none";
    this.lightbox__container.innerHTML = "";
    document.removeEventListener("keyup", this.onKeyUp);
  }
  /**
   * Image suivant
   *@param {MouseEvent/KeyboardEvent} e
   */

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
  /**
   * Image précedente
   *@param {MouseEvent/KeyboardEvent} e
   */
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
