const file = '/FishEyeData.json';

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
  // Création de la div contact-details //
  const contactDetails = document.createElement('div'); // Création de div contact-details.
  contactDetails.setAttribute('id','contact-details'); // Ajout de l'ID correspondant.
  mainBody.appendChild(contactDetails); // Appartient à Main.

      // Création de la class photographers-details //
      const photographersDetails = document.createElement('div'); // Création de class photographers-details.
      photographersDetails.classList.add('photographers-details'); // Ajout de la classe correspondante.
      contactDetails.appendChild(photographersDetails); // Appartient à la div contactDetails.

      // Page Mimi Keel
      if (window.location.pathname =='/Page_Photographes/Mimi_Keel.html') // Majuscules obligatoires pour l'URL si non le JS ne s'affiche pas
      {
        // title tag name //
        const titlePage = document.createElement('title'); // Création de la balise title.
        headTagName.appendChild(titlePage); // Appartient à Head.
        titlePage.innerHTML = `${data.photographers[0].name}`;

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
          #${data.photographers[0].tags[0]}</a>
          <span class="screenreader-text">#${data.photographers[0].tags[0]}</span>`
          +
          `<a href="#" class="nav-filters">
          #${data.photographers[0].tags[1]}</a>
          <span class="screenreader-text">#${data.photographers[0].tags[1]}</span>`
          +
          `<a href="#" class="nav-filters">
          #${data.photographers[0].tags[2]}</a>
          <span class="screenreader-text">#${data.photographers[0].tags[2]}</span>`
          +
          `<a href="#" class="nav-filters">
          #${data.photographers[0].tags[3]}</a>
          <span class="screenreader-text">#${data.photographers[0].tags[3]}</span>`
          ;
        
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
      <img src="/Photos_FishEye/Sample_Photos/Photographers_ID_Photos/${data.photographers[0].portrait}" alt="${data.photographers[0].name}" class="img-pictures">
      `;
      }

      // Page Ellie-Rose_Wilkens
      if (window.location.pathname =='/Page_Photographes/Ellie-Rose_Wilkens.html')
      {
        // title tag name //
        const titlePage = document.createElement('title'); // Création de la balise title.
        headTagName.appendChild(titlePage); // Appartient à Head.
        titlePage.innerHTML = `${data.photographers[1].name}`;

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

      // Page Tracy Galindo
      if (window.location.pathname =='/Page_Photographes/Tracy_Galindo.html')
      {
        // title tag name //
        const titlePage = document.createElement('title'); // Création de la balise title.
        headTagName.appendChild(titlePage); // Appartient à Head.
        titlePage.innerHTML = `${data.photographers[2].name}`;

        photographersDetails.innerHTML = 
        `
        <h1>${data.photographers[2].name}</h1>
        <p>${data.photographers[2].city}, ${data.photographers[2].country}</p>
        <p>${data.photographers[2].tagline}</p>
        `

        // Tags + Suppression virgules contenues dans la liste JSON de "tags" [] + Ajout individuel sans boucle forEach.
        const tagsFiltered = document.createElement('div'); // Création de div tags-filtered.
        tagsFiltered.classList.add('tags-filtered'); // Ajout de la classe correspondante.
        photographersDetails.appendChild(tagsFiltered); // Appartient à la div contactDetails.
        tagsFiltered.innerHTML +=
          `<a href="#" class="nav-filters">
          #${data.photographers[2].tags[0]}</a>
          <span class="screenreader-text">#${data.photographers[2].tags[0]}</span>`
          +
          `<a href="#" class="nav-filters">
          #${data.photographers[2].tags[1]}</a>
          <span class="screenreader-text">#${data.photographers[2].tags[1]}</span>`
          +
          `<a href="#" class="nav-filters">
          #${data.photographers[2].tags[2]}</a>
          <span class="screenreader-text">#${data.photographers[2].tags[2]}</span>`;
          
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
      <img src="/Photos_FishEye/Sample_Photos/Photographers_ID_Photos/${data.photographers[2].portrait}" alt="${data.photographers[2].name}" class="img-pictures">
      `;
      }

      // Page Nabeel Bradford
      if (window.location.pathname =='/Page_Photographes/Nabeel_Bradford.html')
      {
        // title tag name //
        const titlePage = document.createElement('title'); // Création de la balise title.
        headTagName.appendChild(titlePage); // Appartient à Head.
        titlePage.innerHTML = `${data.photographers[3].name}`;

        photographersDetails.innerHTML = 
        `
        <h1>${data.photographers[3].name}</h1>
        <p>${data.photographers[3].city}, ${data.photographers[3].country}</p>
        <p>${data.photographers[3].tagline}</p>
        `

        // Tags + Suppression virgules contenues dans la liste JSON de "tags" [] + Ajout individuel sans boucle forEach.
        const tagsFiltered = document.createElement('div'); // Création de div tags-filtered.
        tagsFiltered.classList.add('tags-filtered'); // Ajout de la classe correspondante.
        photographersDetails.appendChild(tagsFiltered); // Appartient à la div contactDetails.
        tagsFiltered.innerHTML +=
          `<a href="#" class="nav-filters">
          #${data.photographers[3].tags[0]}</a>
          <span class="screenreader-text">#${data.photographers[3].tags[0]}</span>`
          +
          `<a href="#" class="nav-filters">
          #${data.photographers[3].tags[1]}</a>
          <span class="screenreader-text">#${data.photographers[3].tags[1]}</span>`;
        
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
      <img src="/Photos_FishEye/Sample_Photos/Photographers_ID_Photos/${data.photographers[3].portrait}" alt="${data.photographers[3].name}" class="img-pictures">
      `;
      }

      // Page Rhode Dubois
      if (window.location.pathname =='/Page_Photographes/Rhode_Dubois.html')
      {
        // title tag name //
        const titlePage = document.createElement('title'); // Création de la balise title.
        headTagName.appendChild(titlePage); // Appartient à Head.
        titlePage.innerHTML = `${data.photographers[4].name}`;

        photographersDetails.innerHTML = 
        `
        <h1>${data.photographers[4].name}</h1>
        <p>${data.photographers[4].city}, ${data.photographers[4].country}</p>
        <p>${data.photographers[4].tagline}</p>
        `

        // Tags + Suppression virgules contenues dans la liste JSON de "tags" [] + Ajout individuel sans boucle forEach.
        const tagsFiltered = document.createElement('div'); // Création de div tags-filtered.
        tagsFiltered.classList.add('tags-filtered'); // Ajout de la classe correspondante.
        photographersDetails.appendChild(tagsFiltered); // Appartient à la div contactDetails.
        tagsFiltered.innerHTML +=
          `<a href="#" class="nav-filters">
          #${data.photographers[4].tags[0]}</a>
          <span class="screenreader-text">#${data.photographers[4].tags[0]}</span>`
          +
          `<a href="#" class="nav-filters">
          #${data.photographers[4].tags[1]}</a>
          <span class="screenreader-text">#${data.photographers[4].tags[1]}</span>`
          +
          `<a href="#" class="nav-filters">
          #${data.photographers[4].tags[2]}</a>
          <span class="screenreader-text">#${data.photographers[4].tags[2]}</span>`
          +
          `<a href="#" class="nav-filters">
          #${data.photographers[4].tags[3]}</a>
          <span class="screenreader-text">#${data.photographers[4].tags[3]}</span>`;
        
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
      <img src="/Photos_FishEye/Sample_Photos/Photographers_ID_Photos/${data.photographers[4].portrait}" alt="${data.photographers[4].name}" class="img-pictures">
      `;
      }

      // Page Marcel Nikolic
      if (window.location.pathname =='/Page_Photographes/Marcel_Nikolic.html')
      {
        // title tag name //
        const titlePage = document.createElement('title'); // Création de la balise title.
        headTagName.appendChild(titlePage); // Appartient à Head.
        titlePage.innerHTML = `${data.photographers[5].name}`;

        photographersDetails.innerHTML = 
        `
        <h1>${data.photographers[5].name}</h1>
        <p>${data.photographers[5].city}, ${data.photographers[5].country}</p>
        <p>${data.photographers[5].tagline}</p>
        `

        // Tags + Suppression virgules contenues dans la liste JSON de "tags" [] + Ajout individuel sans boucle forEach.
        const tagsFiltered = document.createElement('div'); // Création de div tags-filtered.
        tagsFiltered.classList.add('tags-filtered'); // Ajout de la classe correspondante.
        photographersDetails.appendChild(tagsFiltered); // Appartient à la div contactDetails.
        tagsFiltered.innerHTML +=
          `<a href="#" class="nav-filters">
          #${data.photographers[5].tags[0]}</a>
          <span class="screenreader-text">#${data.photographers[5].tags[0]}</span>`
          +
          `<a href="#" class="nav-filters">
          #${data.photographers[5].tags[1]}</a>
          <span class="screenreader-text">#${data.photographers[5].tags[1]}</span>`;
        
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
      <img src="/Photos_FishEye/Sample_Photos/Photographers_ID_Photos/${data.photographers[5].portrait}" alt="${data.photographers[5].name}" class="img-pictures">
      `;
      }
});
console.log(data);