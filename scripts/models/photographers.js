class Photographers {
  constructor(photographers) {
    this._id = photographers.id;
    this._name = photographers.name;
    this._tagline = photographers.tagline;
    this._city = photographers.city;
    this._price = photographers.price;
    this._portrait = photographers.portrait;
    this._country = photographers.country;

    // id, tagline, city
  }

  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get tagline() {
    return this._tagline;
  }
  get city() {
    return this._city;
  }
  get country() {
    return this._country;
  }
  get price() {
    return `${this._price}€ / jour`;
  }
  get portrait() {
    return `assets/photographers/${this._portrait}`;
  }
}
