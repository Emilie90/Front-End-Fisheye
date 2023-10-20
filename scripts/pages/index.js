class App {
  constructor() {
    this.$photographersWrapper = document.querySelector(
      ".photographer_section"
    );
    this.photographersApi = new PhotographersApi("/data/photographers.json");
  }
  async main() {
    const photographersData = await this.photographersApi.getPhotographers();
    const photographers = photographersData.photographers;
    console.log(photographers);
    photographers
      .map((photographers) => new Photographers(photographers))
      .forEach((photographers) => {
        const Template = new photographersTemplate(photographers);
        this.$photographersWrapper.appendChild(Template.getUserCardDOM());
      });
  }
}
const app = new App();
app.main();
