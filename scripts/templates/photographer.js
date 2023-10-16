class photographersTemplate {
  constructor(photographers) {
    this._photographers = photographers;
  }

  getUserCardDOM() {
    const $wrapper = document.createElement("div");
    $wrapper.classList.add("photographer_section_card");

    const displayPhotographers = `
                  <div class="photograph"><article>
                      <a href="./photographer.html?_id=${this._photographers.id}" aria-label="lien vers la fiche du photographe">
                      <img 
                          alt="${this._photographers.name}"
                          src="${this._photographers.portrait}"
                      />
                  
                  <h2 aria-label="nom du photographe">${this._photographers.name}</h2>
                  </a>
                  <p><span aria-label="ville" class="city">${this._photographers.city}, ${this._photographers.country}</span><br>
                      <span aria-label="phrase d'accroche" class="tagline">${this._photographers.tagline}</span>
                      
                      <br>
                      <span class="price" aria-label="prix">${this._photographers.price}</span>
                  </p></article></div>
              `;

    $wrapper.innerHTML = displayPhotographers;
    return $wrapper;
  }
}
