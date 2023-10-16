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

// async function getPhotographers() {
//   const reponse = await fetch("./data/photographers.json");
//   const photographers = await reponse.json();

//   // et bien retourner le tableau photographers seulement une fois récupéré
//   return console.log(photographers.photographers);
// }

// async function displayData(photographers) {
//   const photographersSection = document.querySelector(".photographer_section");

//   photographers.forEach((photographer) => {
//     const photographerModel = photographerTemplate(photographer);
//     const userCardDOM = photographerModel.getUserCardDOM();
//     photographersSection.appendChild(userCardDOM);
//   });
// }

// async function init() {
//   // Récupère les datas des photographes
//   const { photographers } = await getPhotographers();
//   displayData(photographers.photographers);
// }

// init();
