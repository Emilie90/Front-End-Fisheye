class DisplayLikes {
  constructor() {
    this.photographersApi = new PhotographersApi("/data/photographers.json");
  }

  async getLikes() {
    const { media } = await this.photographersApi.getPhotographers();

    const likesElement = document.querySelector(".photographer_likes_count");

    const updateTotalLikes = () => {
      const medias = media
        .map((media) => new MediaFactory(media))
        .filter((media) => media.photographerId == id);

      const totalLikes = medias.reduce((acc, media) => acc + media.likes, 0);
      likesElement.innerHTML = `${totalLikes}`;
    };
    updateTotalLikes();

    const btnLike = document.querySelectorAll(".btn_like");
    btnLike.forEach((btn) => {
      btn.addEventListener("click", () => {
        const nbLikes = media.find((media) => media.title == btn.dataset.id);
        !btn.classList.contains("liked") ? nbLikes.likes++ : nbLikes.likes--;
        btn.classList.toggle("liked");
        const likesElement = btn.previousElementSibling;
        likesElement.innerHTML = `${nbLikes.likes}`;

        updateTotalLikes();
      });
    });
  }
}
