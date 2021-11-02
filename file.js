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

// fetch(file)
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.log(error))

// Récupération des données
async function fetchData(file)
{
  const getData = await fetch(file);
  const json = await getData.json();
  return json;
}

// Main div contenant les div des photographes.
const divPhotographers = document.getElementById('photographers');

// Traphotographersent des données
const data = fetchData(file).then((data) => // Puisqu'il y a une function async, .then sert à en attendre la réponse.
{
  data.photographers.forEach((photographer) => // Boucle forEach puisqu'il y a des tableaux dans le fichier JSON.
  {
    // Création de la main div des photographes //
    const photographersCard = document.createElement('div'); // Création de div photographers-card.
    photographersCard.classList.add('photographers-card'); // Ajout de la classe correspondante.
    divPhotographers.appendChild(photographersCard); // Appartient à la div divPhotographers.

      const photographerLink = document.createElement('div'); // Création de div contenant le lien du photographe.
      photographersCard.appendChild(photographerLink); // Appartient à la div photographersCard.
      photographersCard.innerHTML =
      `<a href="/Page_Photographes/${photographer.name.replace(' ', '_')}.html" class="photographers-link">
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
        tagsFiltered.innerHTML += `<a href="#" class="nav-filters ${tag}-tag">#${tag}</a>`; // Ajout HTML. ${tag} seul puisque string.
      });
  });

  // Filtre des #Tags balise header
  const ellieRoseWilkens = divPhotographers.children[0];
  const mimiKeel = divPhotographers.children[1];
  const tracyGalindo = divPhotographers.children[2];
  const nabeelBradford = divPhotographers.children[3];
  const rhodeDubois = divPhotographers.children[4];
  const marcelNikolic = divPhotographers.children[5];

    // #Portraits
  const portraitTag0 = document.getElementsByClassName("portrait-tag")[0];
  portraitTag0.addEventListener("click", () =>
  {
    ellieRoseWilkens.style.display = "none";
    tracyGalindo.style.display = "none";
    rhodeDubois.style.display = "none";
    marcelNikolic.style.display = "none";
    nabeelBradford.style.display = "block";
    mimiKeel.style.display = "block";
  });

  const portraitTag1 = document.getElementsByClassName("portrait-tag")[1];
  portraitTag1.addEventListener("click", () =>
  {
    ellieRoseWilkens.style.display = "none";
    tracyGalindo.style.display = "none";
    rhodeDubois.style.display = "none";
    marcelNikolic.style.display = "none";
    nabeelBradford.style.display = "block";
    mimiKeel.style.display = "block";
  });
  
    // #Art
  const artTag0 = document.getElementsByClassName("art-tag")[0];
  artTag0.addEventListener("click", () =>
  {
    ellieRoseWilkens.style.display = "none";
    rhodeDubois.style.display = "none";
    marcelNikolic.style.display = "none";
    nabeelBradford.style.display = "none";
    mimiKeel.style.display = "none";
    tracyGalindo.style.display = "block";
  });

  const artTag1 = document.getElementsByClassName("art-tag")[1];
  artTag1.addEventListener("click", () =>
  {
    ellieRoseWilkens.style.display = "none";
    rhodeDubois.style.display = "none";
    marcelNikolic.style.display = "none";
    nabeelBradford.style.display = "none";
    mimiKeel.style.display = "none";
    tracyGalindo.style.display = "block";
  });

    // #Fashion
  const fashionTag0 = document.getElementsByClassName("fashion-tag")[0];
  fashionTag0.addEventListener("click", () =>
  {
    ellieRoseWilkens.style.display = "none";
    rhodeDubois.style.display = "block";
    marcelNikolic.style.display = "none";
    nabeelBradford.style.display = "none";
    mimiKeel.style.display = "none";
    tracyGalindo.style.display = "block";
  });

  const fashionTag1 = document.getElementsByClassName("fashion-tag")[1];
  fashionTag1.addEventListener("click", () =>
  {
    ellieRoseWilkens.style.display = "none";
    rhodeDubois.style.display = "block";
    marcelNikolic.style.display = "none";
    nabeelBradford.style.display = "none";
    mimiKeel.style.display = "none";
    tracyGalindo.style.display = "block";
  });

    // #Architecture
  const architectureTag0 = document.getElementsByClassName("architecture-tag")[0];
  architectureTag0.addEventListener("click", () =>
  {
    ellieRoseWilkens.style.display = "block";
    rhodeDubois.style.display = "none";
    marcelNikolic.style.display = "block";
    nabeelBradford.style.display = "none";
    mimiKeel.style.display = "none";
    tracyGalindo.style.display = "none";
  });

  const architectureTag1 = document.getElementsByClassName("architecture-tag")[1];
  architectureTag1.addEventListener("click", () =>
  {
    ellieRoseWilkens.style.display = "block";
    rhodeDubois.style.display = "none";
    marcelNikolic.style.display = "block";
    nabeelBradford.style.display = "none";
    mimiKeel.style.display = "none";
    tracyGalindo.style.display = "none";
  });

    // #Travel
  const travelTag0 = document.getElementsByClassName("travel-tag")[0];
  travelTag0.addEventListener("click", () =>
  {
    ellieRoseWilkens.style.display = "none";
    rhodeDubois.style.display = "none";
    marcelNikolic.style.display = "block";
    nabeelBradford.style.display = "block";
    mimiKeel.style.display = "block";
    tracyGalindo.style.display = "none";
  });

  const travelTag1 = document.getElementsByClassName("travel-tag")[1];
  travelTag1.addEventListener("click", () =>
  {
    ellieRoseWilkens.style.display = "none";
    rhodeDubois.style.display = "none";
    marcelNikolic.style.display = "block";
    nabeelBradford.style.display = "block";
    mimiKeel.style.display = "block";
    tracyGalindo.style.display = "none";
  });

    // #Sport
  const sportTag0 = document.getElementsByClassName("sport-tag")[0];
  sportTag0.addEventListener("click", () =>
  {
    ellieRoseWilkens.style.display = "block";
    rhodeDubois.style.display = "block";
    marcelNikolic.style.display = "none";
    nabeelBradford.style.display = "none";
    mimiKeel.style.display = "none";
    tracyGalindo.style.display = "none";
  });

  const sportTag1 = document.getElementsByClassName("sport-tag")[1];
  sportTag1.addEventListener("click", () =>
  {
    ellieRoseWilkens.style.display = "block";
    rhodeDubois.style.display = "block";
    marcelNikolic.style.display = "none";
    nabeelBradford.style.display = "none";
    mimiKeel.style.display = "none";
    tracyGalindo.style.display = "none";
  });

    // #Animals
  const animalsTag0 = document.getElementsByClassName("animals-tag")[0];
  animalsTag0.addEventListener("click", () =>
  {
    ellieRoseWilkens.style.display = "none";
    rhodeDubois.style.display = "block";
    marcelNikolic.style.display = "none";
    nabeelBradford.style.display = "none";
    mimiKeel.style.display = "block";
    tracyGalindo.style.display = "none";
  });

  const animalsTag1 = document.getElementsByClassName("animals-tag")[1];
  animalsTag1.addEventListener("click", () =>
  {
    ellieRoseWilkens.style.display = "none";
    rhodeDubois.style.display = "block";
    marcelNikolic.style.display = "none";
    nabeelBradford.style.display = "none";
    mimiKeel.style.display = "block";
    tracyGalindo.style.display = "none";
  });

    // #Events
  const eventsTag0 = document.getElementsByClassName("events-tag")[0];
  eventsTag0.addEventListener("click", () =>
  {
    ellieRoseWilkens.style.display = "none";
    rhodeDubois.style.display = "block";
    marcelNikolic.style.display = "none";
    nabeelBradford.style.display = "none";
    mimiKeel.style.display = "block";
    tracyGalindo.style.display = "block";
  });

  const eventsTag1 = document.getElementsByClassName("events-tag")[1];
  eventsTag1.addEventListener("click", () =>
  {
    ellieRoseWilkens.style.display = "none";
    rhodeDubois.style.display = "block";
    marcelNikolic.style.display = "none";
    nabeelBradford.style.display = "none";
    mimiKeel.style.display = "block";
    tracyGalindo.style.display = "block";
  });
});
console.log(data);