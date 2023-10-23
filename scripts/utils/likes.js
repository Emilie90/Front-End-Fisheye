class DisplayLikes {
  constructor() {
    // Initialise la classe DisplayLikes avec l'API des photographes
    this.photographersApi = new PhotographersApi("/data/photographers.json");
  }

  // Méthode pour obtenir les likes des médias
  async getLikes() {
    const { media } = await this.photographersApi.getPhotographers();

    const likesElement = document.querySelector(".photographer_likes_count");

    // Fonction pour mettre à jour le nombre total de likes
    const updateTotalLikes = () => {
      // Filtre les médias du photographe en cours
      const medias = media
        .map((media) => new MediaFactory(media))
        .filter((media) => media.photographerId == id);

      // Calcule le nombre total de likes pour ces médias
      const totalLikes = medias.reduce((acc, media) => acc + media.likes, 0);
      likesElement.innerHTML = `${totalLikes}`;
    };
    updateTotalLikes();

    // Sélectionne tous les boutons "Like"
    const btnLike = document.querySelectorAll(".btn_like");

    // Ajoute des écouteurs d'événements pour chaque bouton "Like"
    btnLike.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Trouve le média correspondant au bouton "Like" en fonction de son ID
        const nbLikes = media.find((media) => media.title == btn.dataset.id);

        // Incrémente ou décrémente le nombre de likes en fonction de l'état "liked" du bouton
        !btn.classList.contains("liked") ? nbLikes.likes++ : nbLikes.likes--;

        // Bascule la classe "liked" sur le bouton pour indiquer s'il est "liké" ou non
        btn.classList.toggle("liked");

        // Sélectionne l'élément précédent qui affiche le nombre de likes
        const likesElement = btn.previousElementSibling;
        likesElement.innerHTML = `${nbLikes.likes}`;

        // Met à jour le nombre total de likes
        updateTotalLikes();
      });
    });
  }
}
