// function photographerTemplate(data) {
//     const { name, portrait } = data;

//     const picture = `assets/photographers/${portrait}`;

//     function getUserCardDOM() {
//         const article = document.createElement( 'article' );
//         const img = document.createElement( 'img' );
//         img.setAttribute("src", picture)
//         const h2 = document.createElement( 'h2' );
//         h2.textContent = name;
//         article.appendChild(img);
//         article.appendChild(h2);
//         return (article);
//     }
//

class photographersTemplate {
  constructor(photographers) {
    this._photographers = photographers;
  }

  getUserCardDOM() {
    const $wrapper = document.createElement("div");
    $wrapper.classList.add("photographer_section_card");

    const displayPhotographers = `
                  <a href="./photographer.html?_id=${this._photographers.id}" aria-label="lien vers la fiche du photographe"><div class="photograph"><article>
                      <img 
                          alt="${this._photographers.name}"
                          src="${this._photographers.portrait}"
                      />
                  
                  <h2 aria-label="nom du photographe">${this._photographers.name}</h2>
                  <p><span aria-label="ville" class="city">${this._photographers.city}, ${this._photographers.country}</span><br>
                      <span aria-label="phrase d'accroche" class="tagline">${this._photographers.tagline}</span>
                      
                      <br>
                      <span class="price" aria-label="prix">${this._photographers.price}€/jour</span>
                  </p></article></div></a>
              `;

    $wrapper.innerHTML = displayPhotographers;
    return $wrapper;
  }
}
