// Sélection des éléments HTML
const modalCloseBtn = document.querySelector(".modalCloseBtn");
const modal = document.getElementById("contact_modal");
const prenom = document.getElementById("prenom");
const nom = document.getElementById("nom");
const email = document.getElementById("email");
const message = document.getElementById("message");
const form = document.getElementById("form");

// Fonction pour afficher la modal
const displayModal = () => {
  modal.style.display = "block";
  modalCloseBtn.focus();
};

// Fonction pour fermer la modal
const closeModal = () => {
  modal.style.display = "none";
};

// Ferme la modal lorsque la touche "Escape" est pressée
modal.addEventListener("keydown", (e) => {
  if (`${e.key}` === "Escape") modal.style.display = "none";
});

// Fonction pour valider le format de l'adresse e-mail
const validerEmail = (inputEmail) => {
  let emailRegExp = new RegExp(
    "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$",
    "g"
  );
  if (!emailRegExp.test(inputEmail.value)) {
    console.log("email incorrect");
    return false;
  } else {
    return true;
  }
};

// Fonction pour valider tous les champs du formulaire
const validInput = () => {
  if (
    prenom.validity.valid &&
    nom.validity.valid &&
    validerEmail(email) === true
  ) {
    return true;
  } else {
    return false;
  }
};

// Ajout d'un écouteur d'événements sur le formulaire pour la soumission
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formDatas = {
    firstName: prenom.value,
    lastName: nom.value,
    email: email.value,
    message: message.value,
  };
  if (validInput(formDatas) === true) {
    console.log(formDatas);
    closeModal();
    form.reset();
    return true;
  } else {
    console.log("erreur");
    return false;
  }
});
