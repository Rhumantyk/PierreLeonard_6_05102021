window.onscroll = function() // L'élément scroll est déclenché quand l'utilisateur fait défiler le contenu.
{ 
    // Renvoie le nbr de pixel que le document défile (pour les 2).
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;
    var content = document.querySelector('#link-content'); // #id ciblé

    scrollY <= this.lastScroll // Si nbr de pixels (de la page) défilés est <= (à) 0
      ? content.style.visibility = 'hidden' // alors
      : content.style.visibility = 'visible'; // (...) si non

    this.lastScroll = scrollY ;
}


const file = '/FishEyeData.json';
let photographers = [];
let medias = [];

fetch(file)
  .then(function(response)
  {
    return response.json();
  })
  .then(function(json)
  {
    photographers = json["photographers"]; // Renvoie à la variable "let photographers = []".
    addPhotographersToHTML();
    medias = json["media"]; // Renvoie à la variable "let media = []".
    addPhotographersToHTML();
  });

  // local storage pour "page_photographers"
  let photographersLinea = JSON.stringify(photographers); // Récupération de la variable photographers. 
  localStorage.setItem("photographers",photographersLinea); // Serialisation/linearisation = Transformation en chaîne de caractères.
  let mediasLinea = JSON.stringify(medias); // Récupération de la variable medias.
  localStorage.setItem("media",mediasLinea); // Serialisation/linearisation = Transformation en chaîne de caractères.

  // .catch(function(err) {
  //   console.log("Error while fetching " + err.message);
  // });

  // fetch(file)
  // .then(function(response)
  // {
  //   return response.json();
  // })
  // .then(function(json)
  // {
  //   medias = json["media"]; // Renvoie à la variable "let media = []".
  //   addPhotographersToHTML();
  // });
  // .catch(function(err) {
  //   console.log("Error while fetching " + err.message);
  // });


  

function addPhotographersToHTML(tagFilter=null)
{
  // get tag filter
  let filter = "";
  if(tagFilter != null) 
  {
    filter = tagFilter.id.substr(tagFilter.id.indexOf(";")+1);
    // substr() retourne une sous-chaîne de la chaîne courante, entre un indice de début et un indice de fin (prend un morceau 
    // du tableau. sous-morceau d'un tableau défini ci-dessous).
    // indexOf() renvoie le premier indice d'un élément dans un tableau de caractères.
  }

  // Main div contenant les div des photographes.
  const divPhotographers = document.getElementById('photographers');
  divPhotographers.innerHTML = "";

  console.clear();
  photographers.forEach((photographer) =>
  {

    // Si on a un filtre actif, on vérifie que le photographe possède ce filtre dans ses tags
    if(filter == "" || photographer.tags.includes(filter))
    {
      // Création de la main div des photographes //
      const photographersCard = document.createElement('div'); // Création de div photographers-card.
      photographersCard.classList.add('photographers-card'); // Ajout de la classe correspondante.
      divPhotographers.appendChild(photographersCard); // Appartient à la div divPhotographers.

      const photographerLink = document.createElement('div'); // Création de div contenant le lien du photographe.
      photographersCard.appendChild(photographerLink); // Appartient à la div photographersCard.
      photographersCard.innerHTML = // ${photographer.id}
      `<a href="/Page_Photographes/page_photographers.html?${photographer.id}" class="photographers-link">
          <img src="Photos_FishEye/Sample_Photos/Photographers_ID_Photos/${photographer.portrait}" alt="${photographer.name}" class="img-pictures">
          <h2>${photographer.name}</h2>
          <span class="screenreader-text">Mimi Keel</span>
      </a>`; // Ajout HTML.

      const photographersDetails = document.createElement('div'); // Création de div photographers-details.
      photographersDetails.classList.add('photographers-details'); // Ajout de la classe correspondante.
      photographersCard.appendChild(photographersDetails); // Appartient à la div photographersCard.
      photographersDetails.innerHTML = `<p>${photographer.city}, ${photographer.country}</p><p>${photographer.tagline}</p><p>${photographer.price}€</p>`; // Ajout HTML.

      // Tags + Suppression virgules contenues dans la liste JSON de "tags" [] //
      const tagsFiltered = document.createElement('div'); // Création de div tags-filtered.
      tagsFiltered.classList.add('tags-filtered'); // Ajout de la classe correspondante.
      photographersCard.appendChild(tagsFiltered); // Appartient à la div photographersCard.

      photographer.tags.forEach((tag) => // Boucle forEach puisqu'il y a des tableaux dans le fichier JSON.
      {
        tagsFiltered.innerHTML += `<a href="#" id="${photographer.name};${tag}" class="nav-filters" onclick="addPhotographersToHTML(this);">#${tag}</a>`; // Ajout HTML. ${tag} seul puisque string.
      });
    }

  });

  medias.forEach(() =>
  {
    // Ajout uniquement pour Page_photographers.js
  });

}