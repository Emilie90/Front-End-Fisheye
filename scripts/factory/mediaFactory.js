class MediaFactory {
  constructor(data) {
    if (data.image) {
      return new Image(data);
    } else if (data.video) {
      return new Video(data);
      // throw une erreur si le format n'est pas reconnu
    } else {
      throw "Unknown";
    }
  }
}
