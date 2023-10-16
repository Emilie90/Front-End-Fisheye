class Filter {
  constructor(media, photographers) {
    this._photographers = photographers;
    this._media = media;
    this.manageEvent();
  }
  manageEvent() {
    const btnDrop = document.querySelector(".btn_drop");
    btnDrop.addEventListener("click", this.showHideMenu.bind(this));
  }
  showHideMenu() {
    //Show Hide menu
    const menu = document.querySelector(".dropdown_content");
    menu.classList.toggle("active");
    document.querySelector(".arrow").classList.toggle("rotate");

    const medias = document.querySelectorAll(".gallery_container article");
    medias.forEach((media, index) => {
      setTimeout(() => {
        media.classList.add("animate");
      }, 100 * index);
    });
  }
  getFilter(media) {
    //Filter Datas

    const sortByFilter = (filterValue) => {
      switch (filterValue) {
        case "Titre":
          media.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case "Popularité":
          media.sort((a, b) => b.likes - a.likes);
          break;
        case "Date":
          media.sort((a, b) => new Date(b.date) - new Date(a.date));
          break;
      }
    };

    const allFilter = Array.from(
      document.querySelectorAll(".dropdown_content li button")
    );
    const currentSort = document.querySelector("#currentSort");

    let filterAlreadySelected = allFilter.find(
      (filter) => filter.textContent == currentSort.textContent
    );
    filterAlreadySelected.style.display = "none";

    allFilter.forEach((filter) => {
      filter.addEventListener("click", () => {
        currentSort.textContent = filter.textContent;
        if (filterAlreadySelected)
          filterAlreadySelected.style.display = "block";

        filterAlreadySelected = filter;
        filterAlreadySelected.style.display = "none";

        sortByFilter(filter.textContent);
      });
    });
  }

  //   getSort(media, sortType) {
  //     switch (sortType) {
  //       case "Popularité":
  //         media.sort((a, b) => b.likes - a.likes);
  //         break;
  //       case "Titre":
  //         media.sort((a, b) => a.title.localeCompare(b.title));
  //         break;
  //       case "Date":
  //         media.sort((a, b) => new Date(b.date) - new Date(a.date));
  //         break;
  //     }
  //   }
}
