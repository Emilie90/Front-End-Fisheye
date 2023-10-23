class App {
  constructor() {
    // Sélection de l'élément DOM correspondant à la classe CSS .photographer_section
    this.$photographersWrapper = document.querySelector(
      ".photographer_section"
    );

    this.photographersApi = new PhotographersApi("/data/photographers.json");
  }

  async main() {
    // Récupération des données des photographes de manière asynchrone
    const photographersData = await this.photographersApi.getPhotographers();

    // Extraction de la liste des photographes depuis les données
    const photographers = photographersData.photographers;

    // Affichage des photographes
    photographers
      .map((photographer) => new Photographers(photographer))
      .forEach((photographer) => {
        const template = new photographersTemplate(photographer);
        this.$photographersWrapper.appendChild(template.getUserCardDOM());
      });
  }
}

const app = new App();

// Appel de la méthode principale pour lancer l'application
app.main();
