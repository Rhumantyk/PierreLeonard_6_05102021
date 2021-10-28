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
const mainBody = document.getElementsByTagName('main')[0]; // Sans [0] --> Rien ne s'affiche.
const headTagName = document.getElementsByTagName('head')[0]; // Sans [0] --> Rien ne s'affiche.

// Traphotographersent des données
const data = fetchData(file).then((data) => // Puisqu'il y a une function async, .then sert à en attendre la réponse.
{
  // title tag name //
  const titlePage = document.createElement('title'); // Création de la balise title.
  headTagName.appendChild(titlePage); // Appartient à Head.
  titlePage.innerHTML = `${data.photographers[1].name}`;

  // Création de la div contact-details //
  const contactDetails = document.createElement('div'); // Création de div contact-details.
  contactDetails.setAttribute('id','contact-details'); // Ajout de l'ID correspondant.
  mainBody.appendChild(contactDetails); // Appartient à Main.

      // Création de la class photographers-details //
      const photographersDetails = document.createElement('div'); // Création de class photographers-details.
      photographersDetails.classList.add('photographers-details'); // Ajout de la classe correspondante.
      contactDetails.appendChild(photographersDetails); // Appartient à la div contactDetails.

      // Page Mimi Keel
      if (window.location.pathname =='/Page_Photographes/mimi_keel.html')
      {
          photographersDetails.innerHTML = 
          `
          <h1>${data.photographers[0].name}</h1>
          <p>${data.photographers[0].city}, ${data.photographers[0].country}</p>
          <p>${data.photographers[0].tagline}</p>
          `

          // Tags + Suppression virgules contenues dans la liste JSON de "tags" [] + Ajout individuel sans boucle forEach.
          const tagsFiltered = document.createElement('div'); // Création de div tags-filtered.
          tagsFiltered.classList.add('tags-filtered'); // Ajout de la classe correspondante.
          photographersDetails.appendChild(tagsFiltered); // Appartient à la div contactDetails.
          tagsFiltered.innerHTML +=
            `<a href="#" class="nav-filters">
            #${data.photographers[1].tags[0]}</a>
            <span class="screenreader-text">#${data.photographers[1].tags[0]}</span>`
            +
            `<a href="#" class="nav-filters">
            #${data.photographers[1].tags[1]}</a>
            <span class="screenreader-text">#${data.photographers[1].tags[1]}</span>`;
          
          // Ajout bouton "Contactez-moi".
          const btnContact = document.createElement('button'); // Création de button.
          btnContact.setAttribute('role', 'button'); // Ajout du rôle correspondant.
          photographersDetails.appendChild(btnContact); // Appartient à la div contactDetails.
          btnContact.innerHTML = `Contactez-moi`;

      // Ajout photo photographe
      const picturePhotographer = document.createElement('div'); // Création de div div-photo.
      picturePhotographer.classList.add('div-photo'); // Ajout de la classe correspondante.
      contactDetails.appendChild(picturePhotographer); // Appartient à la div contactDetails.
      picturePhotographer.innerHTML =
      `
      <img src="/Photos_FishEye/Sample_Photos/Photographers_ID_Photos/${data.photographers[1].portrait}" alt="${data.photographers[1].name}" class="img-pictures">
      `;
      }

      // Page Ellie-Rose_Wilkens
      if (window.location.pathname =='/Page_Photographes/Ellie-Rose_Wilkens.html')
      {
          photographersDetails.innerHTML = 
          `
          <h1>${data.photographers[1].name}</h1>
          <p>${data.photographers[1].city}, ${data.photographers[1].country}</p>
          <p>${data.photographers[1].tagline}</p>
          `

          // Tags + Suppression virgules contenues dans la liste JSON de "tags" [] + Ajout individuel sans boucle forEach.
          const tagsFiltered = document.createElement('div'); // Création de div tags-filtered.
          tagsFiltered.classList.add('tags-filtered'); // Ajout de la classe correspondante.
          photographersDetails.appendChild(tagsFiltered); // Appartient à la div contactDetails.
          tagsFiltered.innerHTML +=
            `<a href="#" class="nav-filters">
            #${data.photographers[1].tags[0]}</a>
            <span class="screenreader-text">#${data.photographers[1].tags[0]}</span>`
            +
            `<a href="#" class="nav-filters">
            #${data.photographers[1].tags[1]}</a>
            <span class="screenreader-text">#${data.photographers[1].tags[1]}</span>`;
          
          // Ajout bouton "Contactez-moi".
          const btnContact = document.createElement('button'); // Création de button.
          btnContact.setAttribute('role', 'button'); // Ajout du rôle correspondant.
          photographersDetails.appendChild(btnContact); // Appartient à la div contactDetails.
          btnContact.innerHTML = `Contactez-moi`;

      // Ajout photo photographe
      const picturePhotographer = document.createElement('div'); // Création de div div-photo.
      picturePhotographer.classList.add('div-photo'); // Ajout de la classe correspondante.
      contactDetails.appendChild(picturePhotographer); // Appartient à la div contactDetails.
      picturePhotographer.innerHTML =
      `
      <img src="/Photos_FishEye/Sample_Photos/Photographers_ID_Photos/${data.photographers[1].portrait}" alt="${data.photographers[1].name}" class="img-pictures">
      `;
      }
});
console.log(data);



