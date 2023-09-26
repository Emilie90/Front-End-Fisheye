//Mettre le code JavaScript lié à la page photographer.html
// Récupération de l'id du produit via l' URL
//la variable params récupère l'url de la page

let params = new URLSearchParams(document.location.search);

// la variable id va récupérer la valeur du paramètre _id
let id = params.get("_id");
console.log(id);
