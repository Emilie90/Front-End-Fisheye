// Récupération de l'id du photographe via l' URL
// la variable params récupère l'url de la page

let params = new URLSearchParams(document.location.search);

// la variable id va récupérer la valeur du paramètre _id
let id = params.get("_id");
console.log(id);

class App {
  constructor() {
    this.$photographersWrapper = document.querySelector(".photograph-header");
    this.$mediaWrapper = document.querySelector(".photograph-medias-display");
    this.$lightboxWrapper = document.querySelector(".lightbox");
    this.$likeButton = document.querySelector(".btn_like");

    this.photographersApi = new PhotographersApi("/data/photographers.json");
  }

  async main() {
    const { photographers, media } =
      await this.photographersApi.getPhotographers();

    const photographer = photographers
      .map((photographers) => new Photographers(photographers))
      .find((photographers) => photographers.id == id);
    const medias = media
      .map((media) => new MediaFactory(media))
      .filter((media) => media.photographerId == id);
    console.log(medias);
    console.log(photographers);
    const Template = new photographerHeaderTemplate(photographer);
    this.$photographersWrapper.appendChild(Template.getHeaderPhotographer());
    const mediaTemplate = new photographerMediaTemplate(medias, photographer);
    this.$mediaWrapper.appendChild(mediaTemplate.getMediaPhotographer());
    const lightbox = new Lightbox(medias, photographer);
    const links = document.querySelectorAll(".gallery_card a");

    links.forEach((link) =>
      link.addEventListener("click", (e) => {
        lightbox.buildDom(e.currentTarget.dataset.id);
      })
    );

    const like = new DisplayLikes();
    like.getLikes();

    const filter = new Filter();
    filter.getFilter(medias, mediaTemplate);

    // const btnLike = document.querySelectorAll(".btn_like");
    // btnLike.forEach((btn) => {
    //   btn.addEventListener("click", (e) =>
    //     like.getLikes(e.currentTarget.dataset.id)
    //   );
    // });
  }
}

const app = new App();
app.main();
