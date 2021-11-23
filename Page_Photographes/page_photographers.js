
let photographers = [];
let medias = [];

// Récupération de l'id du photographe sur l'URL
const queryString = window.location.search; // http://127.0.0.1:5500/index.html
// console.log(queryString); // Donne donc le ?${photographer.id}
const urlParams = new URLSearchParams(queryString);
const idNumber = urlParams.get('id'); 
// console.log(idNumber);


// Récupération JSON via localStorage
photographers = localStorage.getItem("photographers");
photographers = JSON.parse(photographers);
// console.log('photographers ' + photographers);
medias = localStorage.getItem("media");
medias = JSON.parse(medias);

// filter Photographes
let Photographer = photographers.filter(function(photographer) 
  {
    return photographer.id === parseInt(idNumber);
  }
)[0];
console.log("Photographer - " + Photographer.name);
console.log(Photographer);

// filter Medias
let Medias = medias.filter(function(media) 
  {
    return media.photographerId === parseInt(idNumber);
  }
)[0];
console.log("Medias - " + Medias.photographerId);
console.log(Medias);


// let filterOutput = document.createElement('p');
// filterOutput.innerHTML = JSON.stringify(Photographer);
// document.querySelector('#filtered').appendChild(filterOutput);



// Main div contenant les div des photographes.
// const mainHtml = document.getElementsByTagName('main')[0]; // Sans [0] --> Rien ne s'affiche.
// const headTagName = document.getElementsByTagName('head')[0]; // Sans [0] --> Rien ne s'affiche.



const headTagName = document.getElementsByTagName('head')[0]; // Sans [0] --> Rien ne s'affiche.
// const mainHtml = document.getElementsByTagName('main')[0]; // Sans [0] --> Rien ne s'affiche.

const mainHtml = document.createElement('main');
document.body.appendChild(mainHtml); // Appartient à body.

  // Création de la div contact-details //
  const contactDetails = document.createElement("div"); // Création de div contact-details.
  contactDetails.setAttribute("id","contact-details"); // Ajout de l'ID correspondant.
  document.getElementsByTagName("main")[0].appendChild(contactDetails); // Appartient à mainHtml. Sans [0] --> Rien ne s'affiche.

    // Création de la class photographers-details //
    const photographersDetails = document.createElement("div"); // Création de class photographers-details.
    photographersDetails.classList.add('photographers-details'); // Ajout de la classe correspondante.
    contactDetails.appendChild(photographersDetails); // Appartient à la div contactDetails.

      // title tag name //
      const titlePage = document.createElement("title"); // Création de la balise title.
      headTagName.appendChild(titlePage); // Appartient à Head.
      titlePage.innerHTML = Photographer.name;

      photographersDetails.innerHTML =
      `
      <h1>${Photographer.name}</h1>
      <p>${Photographer.city}, ${Photographer.country}</p>
      <p>${Photographer.tagline}</p>
      `;

      // Tags + Suppression virgules contenues dans la liste JSON de "tags" [] + Ajout individuel sans boucle forEach.
      const tagsFiltered = document.createElement("div"); // Création de div tags-filtered.
      tagsFiltered.classList.add("tags-filtered"); // Ajout de la classe correspondante.
      photographersDetails.appendChild(tagsFiltered); // Appartient à la div contactDetails.
      Photographer.tags.forEach((tag) => // Boucle forEach puisqu'il y a des tableaux dans le fichier JSON.
      {
        tagsFiltered.innerHTML += `<a href="#" id="${Photographer.name};${tag}" class="nav-filters" onclick="addPhotographersToHTML(this);">#${tag}</a>`; // Ajout HTML. ${tag} seul puisque string.
      });
          
      // Ajout bouton "Contactez-moi".
      const btnContact = document.createElement("button"); // Création de button.
      btnContact.setAttribute("role", "button"); // Ajout du rôle correspondant.
      photographersDetails.appendChild(btnContact); // Appartient à la div contactDetails.
      btnContact.innerHTML = `Contactez-moi`;

      // Ajout photo photographe
      const picturePhotographer = document.createElement("div"); // Création de div div-photo.
      picturePhotographer.classList.add("div-photo"); // Ajout de la classe correspondante.
      contactDetails.appendChild(picturePhotographer); // Appartient à la div contactDetails.
      picturePhotographer.innerHTML =
      `
      <img src="/Photos_FishEye/Sample_Photos/Photographers_ID_Photos/${Photographer.portrait}" alt="${Photographer.name}" class="img-pictures">
      `;

      // Ajout menu déroulant ******** À COMPLÉTER PLUS TARD ********
      const menu = document.createElement("div");
      mainHtml.appendChild(menu);
      menu.innerHTML = `<p>Trier par</p>`;

      // Ajout de la div medias
      const mediasDiv = document.createElement("div"); // Création de div media.
      mainHtml.appendChild(mediasDiv); // Appartenance à la div medias.
      mediasDiv.setAttribute("id", "medias-div"); // Ajout de l'id correspondant.

      Medias.forEach((element) => // Boucle forEach puisqu'il y a des tableaux dans le fichier JSON.
      {
        // Ajouts des différents médias
        mediasDiv.innerHTML +=
            `
            <div class="media">
              <a href="#">
                <img src="../Photos_FishEye/Sample_Photos/Mimi/${medias.image}" alt="${medias.title}" class="img-pictures hover-shadow" onclick="openModal();currentSlide(1)">
                <span class="screenreader-text">$medias.title}</span>
                <div class="media-details">
                  <p>${medias.title}</p>
                  <p>${medias.likes}<i class="fas fa-heart"></i></p>
                </div>
              </a>
            </div>
            `
      });






// function addPhotographersToHTML(tagFilter=null)
// {
//   // get tag filter
//   let filter = "";
//   if(tagFilter != null) 
//   {
//     filter = tagFilter.id.substr(tagFilter.id.indexOf(";")+1);
//     // substr() retourne une sous-chaîne de la chaîne courante, entre un indice de début et un indice de fin (prend un morceau 
//     // du tableau. sous-morceau d'un tableau défini ci-dessous).
//     // indexOf() renvoie le premier indice d'un élément dans un tableau de caractères.
//   }

//       // ********** Dans le if à l'origine ************** //
//       Photographer.forEach((photographer) =>
//       {
//         // Si on a un filtre actif, on vérifie que le photographe possède ce filtre dans ses tags
//         if(filter == "" || photographer.tags.includes(filter))
//         {

//         }
//       });
//       // ********** Dans le if à l'origine ************** //
//   medias.forEach(() =>
//   {
//     console.log(photographers[3].id);
//   });
// }





  //       // data.media.forEach((element) => // Boucle forEach puisqu'il y a des tableaux dans le fichier JSON.
  //       // {
  //         // Ajouts des différents médias
  //         medias.innerHTML +=
  //           `<div class="media">
  //             <a href="#">
  //               <img src="../Photos_FishEye/Sample_Photos/Mimi/${data.media[37].image}" alt="${data.media[37].title}" class="img-pictures hover-shadow" onclick="openModal();currentSlide(1)">
  //               <span class="screenreader-text">${data.media[37].title}</span>
  //               <div class="media-details">
  //                 <p>${data.media[37].title}</p>
  //                 <p>${data.media[37].likes}<i class="fas fa-heart"></i></p>
  //               </div>
  //             </a>
  //           </div>

  //           <div class="media">
  //             <a href="#">
  //                 <video controls width="300">

  //                 <source src="../Photos_FishEye/Sample_Photos/Mimi/${data.media[36].video}"
  //                         type="video/mp4" alt="${data.media[36].title}" class="img-pictures hover-shadow" onclick="openModal();currentSlide(2)">              
  //                 Sorry, your browser doesn't support embedded videos.
  //               </video>
  //               <span class="screenreader-text">${data.media[36].title}</span>
  //               <div class="media-details">
  //                 <p>${data.media[36].title}</p>
  //                 <p>${data.media[36].likes}<i class="fas fa-heart"></i></p>
  //               </div>
  //             </a>
  //           </div>`; // Ajout HTML.
  //       // });

  //       // Ajout lightbox (Avec 2 estampes pour le moment)
  //       const modal = document.createElement('div'); // Création de la div modal.
  //       mainHtml.appendChild(modal);
  //       modal.setAttribute('id', 'modal');
  //       modal.classList.add('modalClass')
  //       modal.innerHTML +=
  //       `
  //       <!-- The Modal/Lightbox -->
  //       <span class="close cursor" onclick="closeModal()">&times;</span>
  // <div class="modal-content">

  //   <div class="mySlides">
  //     <div class="numbertext">1 / 4</div>
  //     <img src="../Photos_FishEye/Sample_Photos/Mimi/${data.media[37].image}" style="width:100%">
  //   </div>

  //   <div class="mySlides">
  //     <div class="numbertext">2 / 4</div>
  //     <video src="../Photos_FishEye/Sample_Photos/Mimi/${data.media[36].video}" style="width:100%"></video>
  //   </div>

  //   <!-- Next/previous controls -->
  //   <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  //   <a class="next" onclick="plusSlides(1)">&#10095;</a>

  //   <!-- Caption text -->
  //   <div class="caption-container">
  //     <p id="caption"></p>
  //   </div>

  //   <!-- Thumbnail image controls -->
  //   <div class="column">
  //     <img class="demo" src="../Photos_FishEye/Sample_Photos/Mimi/${data.media[37].image}" onclick="currentSlide(1)" alt="${data.media[37].title}">
  //   </div>

  //   <div class="column">
  //     <img class="demo" src="../Photos_FishEye/Sample_Photos/Mimi/${data.media[36].video}" onclick="currentSlide(2)" alt="${data.media[36].title}">
  //   </div>
  // </div>
  //       `

        


  //       // Ajout like-price (sticky bas-droite)
  //       const likePrice = document.createElement('div'); // Création de div like-price
  //       mainHtml.appendChild(likePrice); // Appartenance à mainHtml
  //       likePrice.setAttribute('id', 'like-price'); // Attribution d'id et son identifiant.
  //       likePrice.innerHTML +=
  //       `
  //       <p>${data.media[36].likes}(Trouver le calcul correct)<i class="fas fa-heart"></i></p>
  //       <p>${data.photographers[0].price}€</p>
  //       `
  //     }

      

  //     // Page Ellie-Rose_Wilkens
  //     if (window.location.pathname =='/Page_Photographes/930.html')
  //     {
  //       // title tag name //
  //       const titlePage = document.createElement('title'); // Création de la balise title.
  //       headTagName.appendChild(titlePage); // Appartient à Head.
  //       titlePage.innerHTML = `${data.photographers[1].name}`;

  //       photographersDetails.innerHTML = 
  //       `
  //       <h1>${data.photographers[1].name}</h1>
  //       <p>${data.photographers[1].city}, ${data.photographers[1].country}</p>
  //       <p>${data.photographers[1].tagline}</p>
  //       `

  //       // Tags + Suppression virgules contenues dans la liste JSON de "tags" [] + Ajout individuel sans boucle forEach.
  //       const tagsFiltered = document.createElement('div'); // Création de div tags-filtered.
  //       tagsFiltered.classList.add('tags-filtered'); // Ajout de la classe correspondante.
  //       photographersDetails.appendChild(tagsFiltered); // Appartient à la div contactDetails.
  //       tagsFiltered.innerHTML +=
  //         `<a href="#" class="nav-filters">
  //         #${data.photographers[1].tags[0]}</a>
  //         <span class="screenreader-text">#${data.photographers[1].tags[0]}</span>`
  //         +
  //         `<a href="#" class="nav-filters">
  //         #${data.photographers[1].tags[1]}</a>
  //         <span class="screenreader-text">#${data.photographers[1].tags[1]}</span>`;
        
  //       // Ajout bouton "Contactez-moi".
  //       const btnContact = document.createElement('button'); // Création de button.
  //       btnContact.setAttribute('role', 'button'); // Ajout du rôle correspondant.
  //       photographersDetails.appendChild(btnContact); // Appartient à la div contactDetails.
  //       btnContact.innerHTML = `Contactez-moi`;

  //     // Ajout photo photographe
  //     const picturePhotographer = document.createElement('div'); // Création de div div-photo.
  //     picturePhotographer.classList.add('div-photo'); // Ajout de la classe correspondante.
  //     contactDetails.appendChild(picturePhotographer); // Appartient à la div contactDetails.
  //     picturePhotographer.innerHTML =
  //     `
  //     <img src="/Photos_FishEye/Sample_Photos/Photographers_ID_Photos/${data.photographers[1].portrait}" alt="${data.photographers[1].name}" class="img-pictures">
  //     `;
  //     }






// // Script pour Lightbox

// // Ouverture Modal
// function openModal()
// {
//   document.getElementById("modal").style.display = "block";
// }

// // Close the Modal
// function closeModal() {
//   document.getElementById("Modal").style.display = "none";
// }

// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("demo");
//   var captionText = document.getElementById("caption");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
//   captionText.innerHTML = dots[slideIndex-1].alt;
// }  
// });
// console.log(data);