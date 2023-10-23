class photographersTemplate {
  constructor(photographers) {
    // Initialise la classe avec les données du photographe
    this._photographers = photographers;
  }

  // Méthode pour créer et retourner l'élément DOM du photographe
  getUserCardDOM() {
    // Crée un conteneur div pour le photographe
    const $wrapper = document.createElement("div");
    $wrapper.classList.add("photographer_section_card");

    // Génère le contenu HTML pour le photographe
    const displayPhotographers = `
      <div class="photograph">
        <article>
          <a href="./photographer.html?_id=${this._photographers.id}" aria-label="lien vers la fiche du photographe">
            <img 
              alt="${this._photographers.name}"
              src="${this._photographers.portrait}"
            />
            <h2 aria-label="${this._photographers.name}">${this._photographers.name}</h2>
          </a>
          <p>
            <span aria-label="ville" class="city">${this._photographers.city}, ${this._photographers.country}</span><br>
            <span aria-label="phrase d'accroche" class="tagline">${this._photographers.tagline}</span>
            <br>
            <span class="price" aria-label="prix">${this._photographers.price}</span>
          </p>
        </article>
      </div>
    `;

    // Injecte le contenu généré dans le conteneur div
    $wrapper.innerHTML = displayPhotographers;

    // Retourne le conteneur div avec les données du photographe
    return $wrapper;
  }
}
