let photographers = [];
let medias = [];

// Récupération de l'id du photographe sur l'URL
const queryString = window.location.search; // http://127.0.0.1:5500/index.html
// console.log(queryString); // Donne donc le ?${photographer.id}
const urlParams = new URLSearchParams(queryString);
const idNumber = urlParams.get('id');
// console.log(idNumber);

// Récupération JSON via localStorage
photographers = localStorage.getItem('photographers');
photographers = JSON.parse(photographers);
// console.log('photographers ' + photographers);
medias = localStorage.getItem('media');
medias = JSON.parse(medias);

// Cette fonction te servira a recuperer le nom du photographe pour un Id donné
// function getPhotograph(id) {
// 	// for each sur la liste des photographes je compare jusqua trouver le photographe qui a l'id voulu
// 	//return le nom du photographe;
// }

// FACTORIES PATTERNS
class MediasFactory
{
	constructor()
  {
		this.showsMediaElements = function (media)
    {
			let FormattedMedia;
			// if Media.image ou id Media.video -> true si le tag existe dans l'objet Media
			if (media.image != null) FormattedMedia = new ImageMedia(media);
			else if (media.video != null) FormattedMedia = new VideoMedia(media);

			return FormattedMedia;
		};
	}
}

// Il faut faire en sorte que ImageMedia puisse etre crée en recevant un objet media
class ImageMedia
{
	constructor(media)
  {
		this._type = 'image';
			// Ajouts des différents médias img
			mediasDiv.innerHTML += 
      `
      <div class="media">
        <a href="#">
          <img src="../Photos_FishEye/Sample_Photos/${Photographer.name}/${media.image}" alt="${media.title}" class="img-pictures hover-shadow cursor" onclick="openModal()">
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



class VideoMedia
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

// filter Photographes
let Photographer = photographers.filter(function (photographer)
{
	return photographer.id === parseInt(idNumber);
})[0];
console.log('Photographer - ' + Photographer.name);
console.log(Photographer);

// filter Medias
let Medias = medias.filter(function (media)
{
	return media.photographerId === parseInt(idNumber);
});
console.log('Medias - ' + Medias[0].photographerId);
console.log(Medias);

// HTML
const headTagName = document.getElementsByTagName('head')[0]; // Sans [0] --> Rien ne s'affiche.

const mainHtml = document.createElement('main');
document.body.appendChild(mainHtml); // Appartient à body. 2 jours pour trouver "document."

// Création de la div contact-details //
const contactDetails = document.createElement('div'); // Création de div contact-details.
contactDetails.setAttribute('id', 'contact-details'); // Ajout de l'ID correspondant.
document.getElementsByTagName('main')[0].appendChild(contactDetails); // Appartient à mainHtml. Sans [0] --> Rien ne s'affiche.

// Création de la class photographers-details //
const photographersDetails = document.createElement('div'); // Création de class photographers-details.
photographersDetails.classList.add('photographers-details'); // Ajout de la classe correspondante.
contactDetails.appendChild(photographersDetails); // Appartient à la div contactDetails.

// title tag name //
const titlePage = document.createElement('title'); // Création de la balise title.
headTagName.appendChild(titlePage); // Appartient à Head.
titlePage.innerHTML = Photographer.name;

photographersDetails.innerHTML = 
`
  <h1>${Photographer.name}</h1>
  <p>${Photographer.city}, ${Photographer.country}</p>
  <p>${Photographer.tagline}</p>
`;

// Tags + Suppression virgules contenues dans la liste JSON de "tags" [] + Ajout individuel sans boucle forEach.
const tagsFiltered = document.createElement('div'); // Création de div tags-filtered.
tagsFiltered.classList.add('tags-filtered'); // Ajout de la classe correspondante.
photographersDetails.appendChild(tagsFiltered); // Appartient à la div contactDetails.

Photographer.tags.forEach((tag) => // Boucle forEach puisqu'il y a des tableaux dans le fichier JSON.
{
  tagsFiltered.innerHTML += `<a href="../index.html?tag=${tag}" id="${Photographer.name};${tag}" class="nav-filters">#${tag}</a>`; // Ajout HTML. ${tag} seul puisque string.
}); // id="${Photographer.name};${tag}" --> N'est pas l'évènement href, donc partie non fonctionnelle/necessaire.



// Ajout bouton "Contactez-moi".
const btnContact = document.createElement('button'); // Création de button.
btnContact.setAttribute('role', 'button'); // Ajout du rôle correspondant.
photographersDetails.appendChild(btnContact); // Appartient à la div contactDetails.
btnContact.innerHTML = `Contactez-moi`;

// Ajout photo photographe
const picturePhotographer = document.createElement('div'); // Création de div div-photo.
picturePhotographer.classList.add('div-photo'); // Ajout de la classe correspondante.
contactDetails.appendChild(picturePhotographer); // Appartient à la div contactDetails.
picturePhotographer.innerHTML = `
<img src="/Photos_FishEye/Sample_Photos/Photographers_ID_Photos/${Photographer.portrait}" alt="${Photographer.name}" class="img-pictures">
`;

// Ajout menu déroulant ******** À COMPLÉTER PLUS TARD ********
const menu = document.createElement('div');
mainHtml.appendChild(menu);
menu.innerHTML = `<p>Trier par</p>`;
//

// Ajout de la div medias
const mediasDiv = document.createElement('div'); // Création de div media.
mediasDiv.setAttribute('id', 'medias-div'); // Ajout de l'id correspondant.
mainHtml.appendChild(mediasDiv); // Appartenance à la div medias.

// -------------------- MediasFactory
const factory = new MediasFactory();
Medias.forEach((media) =>
{
	factory.showsMediaElements(media); // Chaque media de la liste est envoyé au MediasFactory() qui fera le tri
});
// -----------------------------------------------

// Ajout like-price (sticky bas-droite)
const likePrice = document.createElement('div'); // Création de div like-price
mainHtml.appendChild(likePrice); // Appartenance à mainHtml
likePrice.setAttribute('id', 'like-price'); // Attribution d'id et son identifiant.
likePrice.innerHTML +=
`
<p><span id="all-likes"></span> <i class="fas fa-heart"></i></p>
<p>${Photographer.price}€</p>
`;

// Total avant incrémentation
let totallikes = Medias.reduce((total, { likes }) =>
{
  total += likes;
  return total;
}, 0);
console.log(totallikes);

const allLikes = document.getElementById("all-likes");
updateTotalLikes();

function updateTotalLikes()
{
  allLikes.innerHTML = totallikes;
}

// Function increment
function incrementButton(control) // Single increment for each medias.
{
  let idMedia = control.id.split(";")[0];
  let counter = document.getElementById(idMedia + ";counter"); // Element récupéreré
  let counterValue = counter.innerText; // Nombre de likes (propriété de)

  counterValue++;
  idMedia.value = counterValue;
  counter.innerText = counterValue; // Nouvelle valeur counter value.

  totallikes++;
  updateTotalLikes();
}




































// FACTORIES PATTERNS
class LightBoxFactory
{
	constructor()
  {
		this.showsMediaElements = function (media)
    {
			let FormattedMedia;
			// if Media.image ou id Media.video -> true si le tag existe dans l'objet Media
			if (media.image != null) FormattedMedia = new ImageLightBox(media);
			else if (media.video != null) FormattedMedia = new VideoLightBox(media);

			return FormattedMedia;
		};
	}
}

class ImageLightBox
{
	constructor(media)
  {
    this._type = 'image';
    // Ajout lightbox
    modalContent.innerHTML += 
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

class VideoLightBox
{
	constructor(media)
  {
		this._type = 'video';
    // Ajout lightbox
    modalContent.innerHTML += 
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

























const modal = document.createElement('div'); // Création de la div modal.
mainHtml.appendChild(modal);
modal.setAttribute('id', 'modal');
modal.classList.add('modal');

// Close modal
const closeCursor = document.createElement('span'); // Création du span.
modal.appendChild(closeCursor);
closeCursor.setAttribute('onclick','closeModal();');
closeCursor.classList.add('close', 'cursor');
closeCursor.innerHTML = `&times`; // <span class="close cursor" onclick="closeModal()">&times;</span>

const modalContent = document.createElement('div'); // Création de la div modal-content.
modal.appendChild(modalContent);
modalContent.classList.add('modal-content'); // <div class="modal-content">

// -------------------- MediasLightFactory
const lightFactory = new LightBoxFactory();
Medias.forEach((media) =>
{
	lightFactory.showsMediaElements(media); // Chaque media de la liste est envoyé au LightBoxFactory() qui fera le tri
});
// -----------------------------------------------

// Next/Previous Controls
const prevControl = document.createElement('a');
prevControl.setAttribute('onclick', 'plusSlides(-1)');
modalContent.appendChild(prevControl);
prevControl.classList.add('prev');
prevControl.innerHTML = `&#10094;`; // <a class="prev" onclick="plusSlides(-1)">&#10094;</a>

const nextControl = document.createElement('a');
nextControl.setAttribute('onclick', 'plusSlides(1)');
modalContent.appendChild(nextControl);
nextControl.classList.add('next');
nextControl.innerHTML = `&#10095;`; // <a class="next" onclick="plusSlides(1)">&#10095;</a>

// Caption text
const captionContainer = document.createElement('div');
modalContent.appendChild(nextControl);
captionContainer.classList.add('caption-container');
captionContainer.innerHTML = `<p id="caption"></p>`;




// Script pour Lightbox
// Ouverture Modal
function openModal()
{
	document.getElementById('modal').style.display = 'block';
}

// Fermeture Modal
function closeModal()
{
	document.getElementById('modal').style.display = 'none';
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) // Permet la navigation avec les flèches
{
	showSlides((slideIndex += n));
}

// Thumbnail image controls -- À SUPPRIMER --
// function currentSlide(n) // Permet la navigation en cliquant sur les médias disposés en dessous du média affiché
// {
// 	showSlides((slideIndex = n));
// }

function showSlides(n)
{
	var i;
	var slides = document.getElementsByClassName('mySlides');
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
	slides[slideIndex - 1].style.display = 'block';
	// dots[slideIndex - 1].className += ' active';
	// captionText.innerHTML = dots[slideIndex - 1].alt;
}