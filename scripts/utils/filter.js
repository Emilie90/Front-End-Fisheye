const showHideMenu = () => {
  //Show Hide menu
  const btnDrop = document.querySelector(".btn_drop");
  const menu = document.querySelector(".dropdown_content");
  btnDrop.addEventListener("click", () => {
    menu.classList.toggle("active");
    document.querySelector(".arrow").classList.toggle("rotate");
  });
};

const displayMediaWithFilter = (mediaTemplate) => {
  const currentSort = document.querySelector("#currentSort");
  const allFilters = Array.from(
    document.querySelectorAll(".dropdown_content li button")
  );

  let SelectedFilter = allFilters.find(
    (filter) => filter.id == currentSort.textContent
  );

  SelectedFilter.style.display = "none";

  allFilters.forEach((filter) => {
    filter.addEventListener("click", () => {
      currentSort.textContent = filter.id;
      if (SelectedFilter) SelectedFilter.style.display = "block";

      SelectedFilter = filter;
      SelectedFilter.style.display = "none";

      sortByFilter(filter.id);
    });
  });

  const sortByFilter = (filterValue) => {
    switch (filterValue) {
      case "Titre":
        mediaTemplate._media.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Popularité":
        mediaTemplate._media.sort((a, b) => b.likes - a.likes);
        break;
      case "Date":
        mediaTemplate._media.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        break;
    }
    mediaTemplate.getMediaPhotographer();

    const mediasfiltered = mediaTemplate._media;
    const lightbox = new Lightbox(mediasfiltered);
    const links = document.querySelectorAll(".gallery_card a");

    links.forEach((link) =>
      link.addEventListener("click", (e) => {
        lightbox.buildDom(e.currentTarget.dataset.id);
      })
    );
    const like = new DisplayLikes();
    like.getLikes();
  };
};
