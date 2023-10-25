// Récupération de l'id du photographe via l' URL
// la variable params récupère l'url de la page

let params = new URLSearchParams(document.location.search);

// la variable id va récupérer la valeur du paramètre _id
let id = params.get("_id");

// Sélection des éléments DOM
this.$photographersWrapper = document.querySelector(".photograph-header");
this.$mediaWrapper = document.querySelector(".photograph-medias-display");
this.$lightboxWrapper = document.querySelector(".lightbox");
this.$likeButton = document.querySelector(".btn_like");

// Initialisation de l'API des photographes
this.photographersApi = new PhotographersApi("/data/photographers.json");

// Fonction pour récupérer les informations du photographe et ses médias
const getPhotographerById = async () => {
  const { photographers, media } =
    await this.photographersApi.getPhotographers();

  // Recherche du photographe par ID
  const photographer = photographers
    .map((photographer) => new Photographers(photographer))
    .find((photographer) => photographer.id == id);

  // Filtrage des médias liés au photographe
  const medias = media
    .map((media) => new MediaFactory(media))
    .filter((media) => media.photographerId == id);

  return { photographer, medias };
};

// Fonction pour afficher la page du photographe
const displayPhotographersPage = async () => {
  const { photographer, medias } = await getPhotographerById();

  // Génération de l'en-tête du photographe
  const Template = new photographerHeaderTemplate(photographer);
  this.$photographersWrapper.appendChild(Template.getHeaderPhotographer());

  // Génération des médias du photographe
  const mediaTemplate = new photographerMediaTemplate(medias, photographer);
  mediaTemplate.getMediaPhotographer();

  // Configuration de la Lightbox
  const lightbox = new Lightbox(medias, photographer);
  const links = document.querySelectorAll(".gallery_card a");

  links.forEach((link) =>
    link.addEventListener("click", (e) => {
      lightbox.buildDom(e.currentTarget.dataset.id);
    })
  );

  // Initialisation du gestionnaire de likes
  const like = new DisplayLikes();
  like.getLikes();

  // Affichage du menu et gestion des filtres
  showHideMenu();
  displayMediaWithFilter(mediaTemplate);
};

// Appel de la fonction pour afficher la page du photographe
displayPhotographersPage();
