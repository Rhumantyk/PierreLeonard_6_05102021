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
const mainBody = document.getElementsByTagName('main')[0]; // Sans [0] = Rien ne s'affiche.

// Traphotographersent des données
const data = fetchData(file).then((data) => // Puisqu'il y a une function async, .then sert à en attendre la réponse.
{
    data.photographers.forEach((photographer) => // Boucle forEach puisqu'il y a des tableaux dans le fichier JSON.
    {
        // Création de la div contact-details //
        const contactDetails = document.createElement('div'); // Création de div contact-details.
        contactDetails.classList.add('contact-details'); // Ajout de la classe correspondante.
        mainBody.appendChild(contactDetails); // Appartient à Main.

                // Création de la class photographers-details //
                const photographersDetails = document.createElement('class'); // Création de class photographers-details.
                photographersDetails.classList.add('photographers-details'); // Ajout de la classe correspondante.
                mainBody.appendChild(photographersDetails); // Appartient à la div contactDetails.
                if (window.location.pathname =='/Page_Photographes/Ellie-Rose_Wilkens.html') // Changer les caractère cf JS Main !!!!!!
                {
                    mainBody.innerHTML = 
                    `
                    <h1>${photographer.name}</h1>
                    <p>London, UK</p>
                    <p>Voir le beau dans le quotidien</p>
                    `
                }
    });
});
console.log(data);



