// window.onload = function test ()
// {
let photographers = [];
let medias = [];

// Récupération de l'id du photographe sur l'URL
const queryString = window.location.search; // http://127.0.0.1:5500/index.html
const urlParams = new URLSearchParams(queryString);
const idNumber = urlParams.get('id');

// Récupération JSON via localStorage
photographers = localStorage.getItem('photographers');
photographers = JSON.parse(photographers);
medias = localStorage.getItem('media');
medias = JSON.parse(medias);
console.log(photographers);

// Factory Pattern de la page photographe 
class mediasFactory
{
	constructor()
  {
		this.showsMediaElements = function (media)
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
          <img src="../Photos_FishEye/Sample_Photos/${Photographer.name}/${media.image}" alt="${media.title}"
          class="img-pictures hover-shadow cursor" onclick="openModal();currentSlide(n)">
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

// Filtre Photographes
let Photographer = photographers.filter(function (photographer)
{
	return photographer.id === parseInt(idNumber);
})[0];
console.log('Photographer - ' + Photographer.name);
console.log(Photographer);

// Filtre Medias
let Medias = medias.filter(function (media)
{
	return media.photographerId === parseInt(idNumber);
});
console.log('Medias - ' + Medias[0].photographerId);
console.log(Medias);

// HTML
const headTagName = document.getElementsByTagName('head')[0]; // Sans [0] --> Rien ne s'affiche.
const mainHtml = document.createElement('main');
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
  tagsFiltered.innerHTML += `<a href="../index.html?tag=${tag}" id="${Photographer.name};${tag}" class="nav-filters">#${tag}</a>`; // Ajout HTML. ${tag} seul puisque string.
}); // id="${Photographer.name};${tag}" --> N'est pas l'évènement href, donc partie non fonctionnelle/necessaire.

// Bouton "Contactez-moi".
const btnContact = document.createElement('button'); // Création de button.
btnContact.setAttribute('role', 'button'); // Ajout du rôle correspondant.
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
    <ul>
      <li><a href="#" id="test">Popularité</a></li>
      <li><a href="#" onclick="showDate()">Date</a></li>
      <li><a href="#" onclick="showTitle()">Titre</a></li>
    </ul>
  </nav>
`;
//

// Div medias-div = Contient tous les média du photographe.
const mediasDiv = document.createElement('div'); // Création de div media.
mediasDiv.setAttribute('id', 'medias-div'); // Ajout de l'id correspondant.
mainHtml.appendChild(mediasDiv); // Appartenance à la div medias.

// -------------------- mediasFactory
const factory = new mediasFactory();
Medias.forEach((media) =>
{
	factory.showsMediaElements(media); // Chaque media de la liste est envoyé au mediasFactory() qui fera le tri
});
// -----------------------------------------------

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

// Incrémentation
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
  console.log(counterValue);
}
// window.onload = incrementButton();
// };















// Triage des medias par nombre de likes ******** À COMPLÉTER PLUS TARD ********
// function showPopular()
// {
//   Medias.forEach(() =>
//   {








    // let mediasSort = media.likes; // media.likes
    // console.log(mediasSort); // Donne le nombre du 1er media uniquement
    
    // mediasSort.sort(function(a, b){return a - b});
    // mediasDiv.innerHTML = mediasSort; // document.getElementById('medias-div')
    // console.log(mediasSort);



// ***************** Oui mais incomplet *********************

//     var elems = document.getElementsByClassName("nbr-likes");

//     // convert nodelist to array
//     var array = [];
//     for (var i = elems.length >>> 0; i--;)
//     { 
//       array[i] = elems[i];
//     }

//     // perform sort
//     array.sort(function(a, b)
//     {
//       return Number(a.innerHTML) - Number(b.innerHTML);      
//     });

//     // join the array back into HTML
//     var output = "";
//     for (var i = 0; i < array.length; i++)
//     { 
//       output += array[i].outerHTML;
//     }

//     // append output to div 'myDiv'
//     document.getElementById('medias-div').innerHTML = output;

//   });
// }
// ***************** Oui mais incomplet *********************





// var elems = document.getElementsByClassName("nbr-likes");

// // convert nodelist to array
// var array = [];
// for (var i = elems.length >>> 0; i--;)
// { 
//   array[i] = elems[i];
// }

// // perform sort
// array.sort(function(a, b)
// {
//   return Number(a.innerHTML) - Number(b.innerHTML);      
// });

// // join the array back into HTML
// var output = "";
// for (var i = 0; i < array.length; i++)
// { 
//   output += array[i].outerHTML;
// }

// // append output to div 'myDiv'
// document.getElementById('medias-div').innerHTML = output;



function sortUnorderedList(list, sortDescending)
{
  var htmlCollection = list.getElementsByClassName("media"),
    elements = [].slice.call(htmlCollection); //convert htmlCollection to array.

  //sort by ...
  elements.sort(compareAges);

  if (sortDescending) elements.reverse();

  list.innerHtml = ''; //remove current contents

  for (var i = 0; i < elements.length; i++)
  {
    list.appendChild(elements[i]); //add them again in different order
  }

  function compareAges(el1, el2)
  {
    var age1 = parseInt(el1.children[0].children[2].children[1].children[0].innerText),
        age2 = parseInt(el2.children[0].children[2].children[1].children[0].innerText);
    if(isNaN(age1))age1=-1;
    if(isNaN(age2))age2=-1;
    console.log(el1.children[0].children[2].children[1].children[0].innerText);
    return age1 - age2;
  }
}

window.onload = function click() // Ici le onload est NECESSAIRE, si non, rien ne se passe.
{
  var desc = false;
  document.getElementById("test").onclick = function()
  {
    sortUnorderedList(document.getElementById('medias-div'), desc);
    desc = !desc;
    return false;
  };
}













// Factory Pattern pour la page LightBox
class LightBoxFactory
{
	constructor()
  {
		this.showsMediaElements = function (media)
    {
			let formattedMedia;
			// if Media.image ou id Media.video -> true si le tag existe dans l'objet Media
			if (media.image != null) formattedMedia = new ImageLightBox(media);
			else if (media.video != null) formattedMedia = new VideoLightBox(media);

			return formattedMedia;
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

// HTML
const modal = document.createElement('div'); // Création de la div modal.
mainHtml.appendChild(modal);
modal.setAttribute('id', 'modal');
modal.classList.add('modal');

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

// Fermeture modale (X)
const closeCursor = document.createElement('span'); // Création du span.
modalContent.appendChild(closeCursor);
closeCursor.setAttribute('onclick','closeModal();');
closeCursor.classList.add('close', 'cursor');
closeCursor.innerHTML = `&times`; // <span class="close cursor" onclick="closeModal()">&times;</span>

// Previous Controls (<)
const prevControl = document.createElement('a');
prevControl.setAttribute('onclick', 'plusSlides(-1)');
modalContent.appendChild(prevControl);
prevControl.classList.add('prev');
prevControl.innerHTML = `&#10094;`; // <a class="prev" onclick="plusSlides(-1)">&#10094;</a>

// Next Controls (>)
const nextControl = document.createElement('a');
nextControl.setAttribute('onclick', 'plusSlides(1)');
modalContent.appendChild(nextControl);
nextControl.classList.add('next');
nextControl.innerHTML = `&#10095;`; // <a class="next" onclick="plusSlides(1)">&#10095;</a>

// // Caption text
// const captionContainer = document.createElement('div');
// modalContent.appendChild(nextControl);
// captionContainer.classList.add('caption-container');
// captionContainer.innerHTML = `<p id="caption"></p>`;




// Script pour Lightbox
// Ouverture Modal
function openModal()
{
	document.getElementById('modal').style.display = 'flex';
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
function currentSlide(n) // Permet la navigation en cliquant sur les médias disposés en dessous du média affiché
{
	showSlides((slideIndex = n));
}

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
	slides[slideIndex - 1].style.display = 'flex';
	// dots[slideIndex - 1].className += ' active';
	// captionText.innerHTML = dots[slideIndex - 1].alt;
}