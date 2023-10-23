class photographerHeaderTemplate {
  constructor(photographers) {
    // Initialise la classe avec les données du photographe
    this._photographers = photographers;
  }

  // Méthode pour afficher l'en-tête du profil du photographe
  getHeaderPhotographer() {
    // Crée un conteneur pour l'en-tête
    const $wrapper = document.createElement("div");
    const modalName = document.getElementById("modalName");

    // Ajoute des classes au conteneur
    $wrapper.classList.add("photographer_section_header");

    // Définit le nom du photographe dans le modal
    modalName.textContent = `${this._photographers.name}`;

    // Génère le contenu HTML pour l'en-tête du profil
    const displayHeaderPhotographers = `
      <section class="photograph-header-profile">
        <span>
          <h2 aria-label="nom du photographe">${this._photographers.name}</h2>
          <p>
            <span aria-label="ville" class="city-profile">${this._photographers.city}, ${this._photographers.country}</span><br>
            <span aria-label="phrase d'accroche" class="tagline-profile">${this._photographers.tagline}</span>
          </p>
        </span>
        <button class="contact_button" aria-label="Contact me" onclick="displayModal()">
          Contactez-moi
        </button>
        <img class="profile-header"
          alt="${this._photographers.name}"
          src="${this._photographers.portrait}"
        />
      </section>
    `;

    // Injecte le contenu généré dans le conteneur
    $wrapper.innerHTML = displayHeaderPhotographers;

    // Retourne le conteneur avec l'en-tête du profil du photographe
    return $wrapper;
  }
}
