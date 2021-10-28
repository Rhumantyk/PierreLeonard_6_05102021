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

// Traphotographersent des données
const data = fetchData(file).then((data) => // Puisqu'il y a une function async, .then sert à en attendre la réponse.
{
    // Création de la div contact-details //
    const contactDetails = document.createElement('div'); // Création de div contact-details.
    contactDetails.classList.add('contact-details'); // Ajout de la classe correspondante.
    mainBody.appendChild(contactDetails); // Appartient à Main.

        // Création de la class photographers-details
        const photographersDetails = document.createElement('class'); // Création de class photographers-details.
        photographersDetails.classList.add('photographers-details'); // Ajout de la classe correspondante.
        contactDetails.appendChild(photographersDetails); // Appartient à la div contactDetails.

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
            tagsFiltered.innerHTML += `<a href="#" class="nav-filters">
            #${data.photographers[1].tags[0]}</a>
            <span class="screenreader-text">#${data.photographers[1].tags[0]}</span>`
            + `<a href="#" class="nav-filters">
            #${data.photographers[1].tags[1]}</a>
            <span class="screenreader-text">#${data.photographers[1].tags[1]}</span>`;
            
            // Ajout bouton "Contactez-moi".
            const btnContact = document.createElement('div'); // Création de div tags-filtered.
            // btnContact.classList.add('button'); // Ajout de la classe correspondante.
            photographersDetails.appendChild(btnContact); // Appartient à la div contactDetails.
            btnContact.innerHTML = `<button role="button">Contactez-moi</button>`;

        // Ajout photo photographe
        const picturePhotographer = document.createElement('div'); // Création de div tags-filtered.
        picturePhotographer.classList.add('div-photo'); // Ajout de la classe correspondante.
        contactDetails.appendChild(picturePhotographer); // Appartient à la div contactDetails.
        picturePhotographer.innerHTML =
        `
        <img src="/Photos_FishEye/Sample_Photos/Photographers_ID_Photos/${data.photographers[1].portrait}" alt="${data.photographers[1].name}" class="img-pictures">
        `;
        }
});
console.log(data);



