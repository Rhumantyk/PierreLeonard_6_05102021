// Initialisation des variables
// -----------------------------

let photographers = [];
let medias = [];

// Récupération de l'id du photographe sur l'URL
const queryString = window.location.search; // http://127.0.0.1:5500/index.html
const urlParams = new URLSearchParams(queryString);
const idNumber = urlParams.get('id');

// Global data variables
let Photographer = null;
let Medias = null;

// Global likes counter
let totalLikes = 0;

// Global HTML tags
const mainHtml = document.createElement('main');
const mediasDiv = document.createElement('div'); // Création de div media.
const lightBox = document.createElement('div'); // Création de la div modal-content.

// Factories
let mediasfactory = null;
let lightFactory = null;



// Classes
// ---------------

// Factory Pattern de la page photographe 
class mediasFactory
{
	constructor()
  {
		this.showsMediasElements = function (media)
    {
			let formattedMedia;
			// if media.image ou id Media.video -> true si le tag existe dans l'objet Media
			if (media.image != null) formattedMedia = new imageMedia(media);
			else if (media.video != null) formattedMedia = new videoMedia(media);

			return formattedMedia;
		};
	}
}

class imageMedia
{
	constructor(media)
  {
		this._type = 'image';
			// Ajouts des différents médias img
			mediasDiv.innerHTML += 
      `
      <div class="media">
        <a href="#">
          <img id="btn-open-lightbox-${media.image}" src="../Photos_FishEye/Sample_Photos/${Photographer.name}/${media.image}" alt="${media.title}"
          class="img-pictures hover-shadow cursor" onclick="manageModal(this)">
          <span class="screenreader-text">${media.title}</span>
          <div class="media-details">
            <p>${media.title}</p>
              <div>
                <p class="nbr-likes" id="${media.id};counter">${media.likes}</p><button id="${media.id};heart" class="btn-likes" onclick="incrementButton(this); return false;"><i class="fas fa-heart" aria-label="likes"></i></button>
              </div>
            </div>
        </a>
      </div>
    `;
	}
}

class videoMedia
{
	constructor(media)
  {
		this._type = 'video';
    // Ajouts des différents médias video
    mediasDiv.innerHTML += 
    `
      <div class="media">
        <a href="#">
          <video controls width="300" onclick="openModal()">
            <source src="../Photos_FishEye/Sample_Photos/${Photographer.name}/${media.video}"
                    type="video/mp4" alt="${media.title}" class="img-pictures hover-shadow cursor">              
            Sorry, your browser doesn't support embedded videos.
          </video>
          <span class="screenreader-text">${media.title}</span>
          <div class="media-details">
            <p>${media.title}</p>
            <div>
              <p class="nbr-likes" id="${media.id};counter">${media.likes}</p><button id="${media.id};heart" class="btn-likes" onclick="incrementButton(this); return false;"><i class="fas fa-heart" aria-label="likes"></i></button>
            </div>
          </div>
        </a>
      </div>
    `;
	}
}


// Factory Pattern pour la page LightBox
class lightBoxFactory
{
	constructor()
  {
		this.showsLightBoxMediaElements = function (media)
    {
			let formattedMedia;
			// if Media.image ou id Media.video -> true si le tag existe dans l'objet Media
			if (media.image != null) formattedMedia = new imageLightBox(media);
			else if (media.video != null) formattedMedia = new videoLightBox(media);

			return formattedMedia;
		};
	}
}

class imageLightBox
{
	constructor(media)
  {
    this._type = 'image';
    // Ajout lightbox
    lightBox.innerHTML += 
      `
        <div class="mySlides mediaLightBox">
          <img src="../Photos_FishEye/Sample_Photos/${Photographer.name}/${media.image}"
          class="img-pictures alt="${media.title}">
          <span class="screenreader-text">${media.title}</span>
            <div class="media-details">
              <p>${media.title}</p>
            </div>
        </div>
      `;
	}
}

class videoLightBox
{
	constructor(media)
  {
		this._type = 'video';
    // Ajout lightbox
    lightBox.innerHTML += 
      `
        <div class="mySlides mediaLightBox">
          <video controls width="300">
            <source src="../Photos_FishEye/Sample_Photos/${Photographer.name}/${media.video}"
                    type="video/mp4" alt="${media.title}" class="img-pictures>              
            Sorry, your browser doesn't support embedded videos.
          </video>
          <span class="screenreader-text">${media.title}</span>
          <div class="media-details">
            <p>${media.title}</p>
          </div>
        </div>
      `;
	}             
}


// Fonctions
// ---------

function getDataFromLocalStorage()
{

  // Récupération JSON via localStorage
  photographers = localStorage.getItem('photographers');
  photographers = JSON.parse(photographers);
  medias = localStorage.getItem('media');
  medias = JSON.parse(medias);
  console.log(photographers);

}

function getPageData()
{

  // Get required photograppher
  Photographer = photographers.filter(function (photographer)
  {
    return photographer.id === parseInt(idNumber);
  })[0];
  console.log('Photographer - ' + Photographer.name);
  console.log(Photographer);

  // Get photographer Media
  Medias = medias.filter(function (media)
  {
    return media.photographerId === parseInt(idNumber);
  });
  console.log('Medias - ' + Medias[0].photographerId);
  console.log(Medias);

}

function createFactories()
{

  mediasfactory = new mediasFactory();
  Medias.forEach((media) =>
  {
    mediasfactory.showsMediasElements(media); // Chaque media de la liste est envoyé au mediasFactory() qui fera le tri
  });
  // -----------------------------------------------
  
  // -------------------- MediasLightFactory
  lightFactory = new lightBoxFactory();
  Medias.forEach((media) =>
  {
    lightFactory.showsLightBoxMediaElements(media); // Chaque media de la liste est envoyé au lightBoxFactory() qui fera le tri
  });
  
}

function createPageHTML()
{

  // HTML de la page
  const headTagName = document.getElementsByTagName('head')[0]; // Sans [0] --> Rien ne s'affiche.
  document.body.appendChild(mainHtml); // Appartient à body.

  // Nom de l'onglet (Page) //
  const titlePage = document.createElement('title'); // Création de la balise title.
  headTagName.appendChild(titlePage); // Appartient à Head.
  titlePage.innerHTML = Photographer.name;

  // Création de la div contact-details //
  const contactDetails = document.createElement('div'); // Création de div contact-details.
  contactDetails.setAttribute('id', 'contact-details'); // Ajout de l'ID correspondant.
  document.getElementsByTagName('main')[0].appendChild(contactDetails); // Appartient à mainHtml. Sans [0] --> Rien ne s'affiche.

  // Création de la class photographers-details //
  const photographersDetails = document.createElement('div'); // Création de class photographers-details.
  photographersDetails.classList.add('photographers-details'); // Ajout de la classe correspondante.
  contactDetails.appendChild(photographersDetails); // Appartient à la div contactDetails.
  photographersDetails.innerHTML = 
  `
    <h1>${Photographer.name}</h1>
    <p>${Photographer.city}, ${Photographer.country}</p>
    <p>${Photographer.tagline}</p>
  `;

  // Filtre à Tags 
  const tagsFiltered = document.createElement('div'); // Création de div tags-filtered.
  tagsFiltered.classList.add('tags-filtered'); // Ajout de la classe correspondante.
  photographersDetails.appendChild(tagsFiltered); // Appartient à la div contactDetails.

  Photographer.tags.forEach((tag) => // Boucle forEach puisqu'il y a des tableaux dans le fichier JSON.
  {
    tagsFiltered.innerHTML += `<a href="#" id="${Photographer.name};${tag}" class="nav-filters" onclick="LoadHTML(this);">#${tag}</a>`; // Ajout HTML. ${tag} seul puisque string.
  }); // Originel :   tagsFiltered.innerHTML += `<a href="../index.html?tag=${tag}" id="${Photographer.name};${tag}" class="nav-filters">#${tag}</a>`;

  // Bouton "Contactez-moi".
  const btnContact = document.createElement('button'); // Création de button.
  btnContact.classList.add('btn-modal'); // Ajout de la classe correspondante.
  btnContact.setAttribute('id', 'btn-open-contact'); // Ajout de l'ID correspondant.
  btnContact.setAttribute('role', 'button'); // Ajout du rôle correspondant btn. 
  btnContact.setAttribute('onclick', 'manageModal(this);'); // Ajout du rôle correspondant openForm(); 
  photographersDetails.appendChild(btnContact); // Appartient à la div contactDetails.
  btnContact.innerHTML = `Contactez-moi`;

  // Photo du photographe
  const picturePhotographer = document.createElement('div'); // Création de div div-photo.
  picturePhotographer.classList.add('div-photo'); // Ajout de la classe correspondante.
  contactDetails.appendChild(picturePhotographer); // Appartient à la div contactDetails.
  picturePhotographer.innerHTML = `
  <img src="/Photos_FishEye/Sample_Photos/Photographers_ID_Photos/${Photographer.portrait}" alt="${Photographer.name}" class="img-pictures">
  `;

  // Menu déroulant ******** À COMPLÉTER PLUS TARD ********
  const menu = document.createElement('div');
  menu.classList.add('media-nav'); // Ajout de la classe correspondante.
  mainHtml.appendChild(menu);
  menu.innerHTML =
  `
    <p>Trier par</p>
    <nav class="filter-medias">
      <a href="#" class="dropdown">&#10097;</a>
      <ul class="ul-sort">
        <li><a href="#" id="popularity">Popularité</a></li>
        <li><a href="#" id="date">Date</a></li>
        <li><a href="#" id="title">Titre</a></li>
      </ul>
    </nav>
  `;
  //

  // Div medias-div = Contient tous les média du photographe.
  mediasDiv.setAttribute('id', 'medias-div'); // Ajout de l'id correspondant.
  mainHtml.appendChild(mediasDiv); // Appartenance à la div medias.

  // Like-price = Encart en bas à droite de la page
  const likePrice = document.createElement('div'); // Création de div like-price
  mainHtml.appendChild(likePrice); // Appartenance à mainHtml
  likePrice.setAttribute('id', 'like-price'); // Attribution d'id et son identifiant.
  likePrice.innerHTML +=
  `
  <p><span id="all-likes"></span> <i class="fas fa-heart"></i></p>
  <p>${Photographer.price}€</p>
  `;

  // Total avant incrémentation
  totalLikes = Medias.reduce((total, { likes }) =>
  {
    total += likes;
    return total;
  }, 0);
  console.log(totalLikes);

  updateTotalLikes();


  // HTML LightBox
  const modal = document.createElement('div'); // Création de la div modal.
  mainHtml.appendChild(modal);
  modal.setAttribute('id', 'lightbox');
  modal.classList.add('modal');
  modal.classList.add('displayNone'); // <div class="modal-content">

  modal.appendChild(lightBox);
  lightBox.classList.add('modal-content'); // <div class="modal-content">

  // Fermeture modale (X)
  const closeCursor = document.createElement('span'); // Création du span.
  closeCursor.setAttribute('id', 'lightbox-close');
  lightBox.appendChild(closeCursor);
  closeCursor.setAttribute('onclick','manageModal(this);');
  closeCursor.classList.add('close', 'cursor');
  closeCursor.innerHTML = `&times`; // <span class="close cursor" onclick="closeModal()">&times;</span>

  // Previous Controls (<)
  const prevControl = document.createElement('a');
  prevControl.setAttribute('onclick', 'plusSlides(-1)');
  lightBox.appendChild(prevControl);
  prevControl.classList.add('prev');
  prevControl.innerHTML = `&#10094;`; // <a class="prev" onclick="plusSlides(-1)">&#10094;</a>

  // Next Controls (>)
  const nextControl = document.createElement('a');
  nextControl.setAttribute('onclick', 'plusSlides(1)');
  lightBox.appendChild(nextControl);
  nextControl.classList.add('next');
  nextControl.innerHTML = `&#10095;`; // <a class="next" onclick="plusSlides(1)">&#10095;</a>

  // // Caption text
  // const captionContainer = document.createElement('div');
  // modalContent.appendChild(nextControl);
  // captionContainer.classList.add('caption-container');
  // captionContainer.innerHTML = `<p id="caption"></p>`;


  // HTML Modale "Contactez-moi"
  const contactForm = document.createElement('div'); // Création de la div contactForm.
  mainHtml.appendChild(contactForm);
  contactForm.setAttribute('id', 'contact-form');
  contactForm.classList.add('contact-form');
  contactForm.classList.add('displayNone');
  contactForm.innerHTML +=
  `
    <div class="form-elements">

      <div class="tittle-form">
        <h2> CONTACTEZ-MOI </br>${Photographer.name}</h2>
        <span id="contact-form-close" class="close-form cursor" onclick="manageModal(this);">&times</span>
      </div>

      <div class="inputs-form">
        <h3>Prénom</h3>
          <input type="text" size="20">

        <h3>Nom</h3>
          <input type="text" size="20">

        <h3>Email</h3>
          <input type="text" size="20">

        <h3>Votre message</h3>
          <textarea type="text" rows="4" cols="20"></textarea>
        
      </div>

      <div class="btn-form-div">
        <input class="form-btn" type="submit" value="Envoyer">
      </div>

    </div>
  `

  const divBtnContactTM = document.createElement('div'); // Création de div tags-filtered.
  divBtnContactTM.classList.add('div-btn-modal-sticky'); // Ajout de la classe correspondante.
  mainHtml.appendChild(divBtnContactTM); // Appartient à la div contactDetails.
  
  // Bouton "Contactez-moi" pour tablette et mobile
  const btnContactTM = document.createElement('button'); // Création de button.
  btnContactTM.classList.add('btn-modal-sticky'); // Ajout de la classe correspondante.
  btnContactTM.setAttribute('id', 'contact-form-open-mobile'); // Ajout de l'ID correspondant.
  btnContactTM.setAttribute('role', 'button'); // Ajout du rôle correspondant btn. 
  btnContactTM.setAttribute('onclick', 'manageModal(this);'); // Ajout du rôle correspondant openForm(); 
  divBtnContactTM.appendChild(btnContactTM); // Appartient à la div divBtnContactTM.
  btnContactTM.innerHTML = `Contactez-moi`;

}

// Script pour Lightbox et Formulaire.
function manageModal(Element)
{

  let modal = null;

  if (Element.id.indexOf("contact") >= 0) // Si le mot "contact" se trouve dans le tableau de caractère de l'id qui suit
  {
    modal = document.getElementById('contact-form'); // Alors modal = Ceci
  }
  else if (Element.id.indexOf("lightbox") >= 0) // Ou bien si le mot "lightbox" se trouve dans le tableau de caractère de l'id qui suit
  {
    modal = document.getElementById('lightbox'); // Alors modal = Ceci
  }

  // Dès lors

  if (modal.classList.contains("displayNone")) // Si le CSS appliqué est celui-ci
  {
    modal.classList.remove("displayNone"); // Alors il est retiré
  }
  else
  {  
    modal.classList.add("displayNone"); // Ou bien si le CSS  appliqué n'est pas "displayNone", il est appliqué
  }

}

// Likes totaux avant incrémentation
function updateTotalLikes()
{
  const allLikes = document.getElementById("all-likes");
  allLikes.innerHTML = totalLikes;
}

// Incrémentation
function incrementButton(control) // Single increment for each medias.
{

  let idMedia = control.id.split(";")[0]; // Séparation de l'id via le ";"
  let counter = document.getElementById(idMedia + ";counter"); // Element récupéreré
  let counterValue = counter.innerText; // Nombre de likes (propriété de)

  counterValue++;
  idMedia.value = counterValue;
  counter.innerText = counterValue; // Nouvelle valeur counter value.

  totalLikes++;
  updateTotalLikes(); // Like totaux après incrémentation, en ayant appelé la fonction d'origine

}

// // Sorting initial
// function sortInitial(list, sortDescending)
// {
//   var htmlCollection = list.getElementsByClassName("media"),
//       elements = [].slice.call(htmlCollection); // Converti htmlCollection (tous les médias) en tableau (array).

//   // Trier par ...
//   elements.sort(compareLikes);

//   if (sortDescending) elements.reverse();

//   list.innerHtml = ''; // Enlève les éléments qui s'y trouvent.

//   for (var i = 0; i < elements.length; i++)
//   {
//     list.appendChild(elements[i]); // Les rajoute dans un ordre différent.
//   }
// }

// Triage des medias par nombre de likes
function sortLikesList(list, sortDescending) // (list, sortDescending)
{
  var htmlCollection = list.getElementsByClassName("media"),
      elements = [].slice.call(htmlCollection); // Converti htmlCollection (tous les médias) en tableau (array).

  //Trier par ...
  elements.sort(compareLikes);

  if (sortDescending) elements.reverse();

  list.innerHtml = ''; // Enlève les éléments qui s'y trouvent.

  for (var i = 0; i < elements.length; i++)
  {
    list.appendChild(elements[i]); // Les rajoute dans un ordre différent.
  }

  function compareLikes(el1, el2)
  {
    var like1 = parseInt(el1.children[0].children[2].children[1].children[0].innerText),
        like2 = parseInt(el2.children[0].children[2].children[1].children[0].innerText);
    if(isNaN(like1))like1=-1;
    if(isNaN(like2))like2=-1;
    // console.log(el1.children[0].children[2].children[1].children[0].innerText);
    return like1 - like2;
  }
}

// Triage des medias par date
function sortDatesList(list, sortDescending)
{
  var htmlCollection = list.getElementsByClassName("media"),
      elements = [].slice.call(htmlCollection); // Converti htmlCollection (tous les médias) en tableau (array).

  //Trier par ...
  elements.sort(compareDates);

  if (sortDescending) elements.reverse();

  list.innerHtml = ''; // Enlève les éléments qui s'y trouvent.

  for (var i = 0; i < elements.length; i++)
  {
    list.appendChild(elements[i]); // Les rajoute dans un ordre différent.
  }

  function compareDates()
  {

    Medias.forEach((a, b) =>
    {
      var dateA = new Date(a.date), dateB = new Date(b.date)
      return dateA - dateB;
    });

  }

}

// Triage des medias par Titre
function sortTitlesList(list, sortDescending)
{
  var htmlCollection = list.getElementsByClassName("media"),
      elements = [].slice.call(htmlCollection); // Converti htmlCollection (tous les médias) en tableau (array).

  //Trier par ...
  elements.sort(compareTitles);

  if (sortDescending) elements.reverse();

  list.innerHtml = ''; // Enlève les éléments qui s'y trouvent.

  for (var i = 0; i < elements.length; i++)
  {
    list.appendChild(elements[i]); // Les rajoute dans un ordre différent.
  }

  function compareTitles()
  {

    Medias.forEach((a, b) =>
    {
      // var titleA = a.title, titleB = b.title
      console.log(a.title - b.title);
      // return titleA - titleB;
      return b.title - a.title;
    });

  }

}

// Ligne à debugger
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) // Permet la navigation avec les flèches
{
	showSlides((slideIndex += n));
}

// À mettre dans une fontion
function showSlides(n)
{
	let i;
	let slides = document.getElementsByClassName('mySlides');
	// var dots = document.getElementsByClassName('demo');
	// var captionText = document.getElementById('caption');
	if (n > slides.length)
  {
		slideIndex = 1;
	}
	if (n < 1)
  {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++)
  {
		slides[i].style.display = 'none';
	}
	// for (i = 0; i < dots.length; i++)
  // {
	// 	dots[i].className = dots[i].className.replace(' active', '');
	// }

  // Ligne à debugger
	// slides[slideIndex - 1].style.display = 'flex';

	// dots[slideIndex - 1].className += ' active';
	// captionText.innerHTML = dots[slideIndex - 1].alt;
}


// Evènements
// ----------

window.onload = function()
{

  getDataFromLocalStorage();
  getPageData();
  createFactories();
  createPageHTML();
  // manageModal(); // Pourquoi quand je l'applique ici : "Cannot read properties of undefined (reading 'id')" ?

  let descPLikes = false;
  document.getElementById("popularity").onclick = function()
  {
    sortLikesList(document.getElementById('medias-div'), descPLikes);
    descPLikes = !descPLikes;
    return false;
  };

  // let descDate = false;
  // document.getElementById("date").onclick = function()
  // {
  //   sortDatesList(document.getElementById('medias-div'), descDate);
  //   descDate = !descDate;
  //   return false;
  // };

  let descTitle = false;
  document.getElementById("title").onclick = function()
  {
    sortTitlesList(document.getElementById('medias-div'), descTitle);
    descTitle = !descTitle;
    return false;
  };

}