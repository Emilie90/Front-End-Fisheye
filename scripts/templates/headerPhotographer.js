class photographerHeaderTemplate {
  constructor(photographers) {
    this._photographers = photographers;
  }

  getHeaderPhotographer() {
    const $wrapper = document.createElement("div");
    const modalName = document.getElementById("modalName");

    $wrapper.classList.add("photographer_section_header");

    modalName.textContent = `${this._photographers.name}`;

    const displayHeaderPhotographers = `
                    <section class="photograph-header-profile"><span><h2 aria-label="nom du photographe">${this._photographers.name}</h2>
                         <p><span aria-label="ville" class="city-profile">${this._photographers.city}, ${this._photographers.country}</span><br>
                        <span aria-label="phrase d'accroche" class="tagline-profile">${this._photographers.tagline}</span>
                    </p> </span><button class="contact_button" aria-label="Open contact form" onclick="displayModal()">
                    Contactez-moi
                  </button>
                    
                        <img class="profile-header"
                            alt="${this._photographers.name}"
                            src="${this._photographers.portrait}"
                        />

                  </section>
                `;

    $wrapper.innerHTML = displayHeaderPhotographers;
    return $wrapper;
  }
}
