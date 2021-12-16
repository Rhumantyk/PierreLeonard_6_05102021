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

// FACTORY PATTERN
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
          <img src="../Photos_FishEye/Sample_Photos/${Photographer.name}/${media.image}" alt="${media.title}" class="img-pictures hover-shadow cursor" onclick="openModal();currentSlide()">
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
	} // <p class="nbr-likes" id="${media.id};counter">${media.likes}</p><button onclick="incrementButton(this)" id="${media.id};heart" class="btn-likes"><i class="fas fa-heart" aria-label="likes"></i></button>
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
          <video controls width="300">
            <source src="../Photos_FishEye/Sample_Photos/${Photographer.name}/${media.video}"
                    type="video/mp4" alt="${media.title}" class="img-pictures hover-shadow cursor" onclick="openModal();currentSlide()">              
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
} // <p><button onclick="incrementButton()"><p class="likes-number">${media.likes}</p><i class="fas fa-heart" aria-label="likes"></i></button></p>

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
	factory.showsMediaElements(media); // Chaque media de la liste est envoyé au MediasFactory() qui va faire le tri
});
// -----------------------------------------------

// Ajout like-price (sticky bas-droite)
const likePrice = document.createElement('div'); // Création de div like-price
mainHtml.appendChild(likePrice); // Appartenance à mainHtml
likePrice.setAttribute('id', 'like-price'); // Attribution d'id et son identifiant.
likePrice.innerHTML +=
`
<p id="all-likes">${Medias.likes} <i class="fas fa-heart"></i></p>
<p>${Photographer.price}€</p>
`;














// Function increment

// let addlike = document.querySelectorAll('.btn-likes');

// addlike.forEach((like) =>
// {
//   like.addEventListener("click", (e) =>
//   {
//     let input = e.target.querySelector('.nbr-likes');
//     input.value = parseInt(input.value) + 1;
//   });
// });

// window.onload = function()
//   {
//     let btn = document.getElementsByClassName("btn-likes");
//     let value = document.getElementsByClassName("nbr-likes").innerHTML;
//     btn.onclick = function incrementButton()
//     {
    
//       value ++;
//       value.innerHTML = value;
//     };
//   }


let total = null;
function incrementButton(control) // Single increment for each medias.
{


  // alert(control.id);
  let idMedia = control.id.split(";")[0];
  let value = document.getElementById(idMedia + ";counter").innerText; // Nombre de likes

  value++;
  idMedia.value = value; // document.idMedia.value = value

  let result = document.getElementById(idMedia + ";counter").innerText = value;
  console.log(result);

  total += value;
  let likePrice = document.getElementById("all-likes").innerHTML = total + `<i class="fas fa-heart"></i>`;



  // var num2 = parseInt(document.getElementById("Num2").value); // result
  document.getElementById("all-likes").innerHTML = result + " " + `<i class="fas fa-heart"></i>`;

//   let datas = Object.values(control).reduce((acc,curr) =>
//   {
//     acc.likes += curr[0].likes;
//     return acc;
//   },
//   {likes:null});
// console.log(result);





  // let calc = control[0].map(media => media.likes).reduce((likes, media) => media + likes);
  // result = document.getElementById("all-likes").innerHTML = calc;
  // console.log(result);  


  // let results = control.likes.reduce((a, c) => a + c[Object.keys(c)], 0);
  // let resultss = document.getElementById("all-likes").innerHTML = results;
  // console.log(results);




    const response = Medias.reduce((total, { likes }) =>
    {
      total += likes;
      return total;
    }, 0);
    console.log(response);




}

console.log(incrementButton);










// function totalIncrements(control)
// {
//   let totalLikesPrice = document.getElementById("like-price").innerText;

//   let idMedia = control.id.split(";")[0];
//   let allMediasLikes = parseInt(document.getElementById(idMedia + ";counter").innerText);

//   total += allMediasLikes;


// }



// let i = 0;

// document.getElementsByClassName("nbr-likes").innerHTML = i;

// function incrementButton(number)
// {
//   document.getElementsByClassName("nbr-likes").innerHTML = ++i;
// }
// console.log(i);



// document.getElementById("${medias.id};heart").addEventListener("click", incrementButton);

// function incrementButton()
// {
//   document.getElementById("${medias.id};counter").innerHTML = Date();
// }





























































const modal = document.createElement('div'); // Création de la div modal.
mainHtml.appendChild(modal);
modal.setAttribute('id', 'modal');
modal.classList.add('modalClass');

// Close modal
const closeCursor = document.createElement('span'); // Création du span.
modal.appendChild(closeCursor);
closeCursor.setAttribute('onclick','closeModal();');
closeCursor.classList.add('close', 'cursor');
closeCursor.innerHTML = `&times`; // <span class="close cursor" onclick="closeModal()">&times;</span>

const modalContent = document.createElement('div'); // Création de la div modal-content.
modal.appendChild(modalContent);
modalContent.classList.add('modal-content'); // <div class="modal-content">


Medias.forEach((media) =>
{
// Ajout lightbox
modalContent.innerHTML += 
  `
    <div class="mySlides">
      <div class="numbertext">1 / 4</div>
      <img src="../Photos_FishEye/Sample_Photos/${Photographer.name}/${media.image}" style="width:100%">
    </div>
  `;
});

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

// Close the Modal
function closeModal()
{
	document.getElementById('modal').style.display = 'none';
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n)
{
	showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n)
{
	showSlides((slideIndex = n));
}

function showSlides(n)
{
	var i;
	var slides = document.getElementsByClassName('mySlides');
	var dots = document.getElementsByClassName('demo');
	var captionText = document.getElementById('caption');
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
	for (i = 0; i < dots.length; i++)
  {
		dots[i].className = dots[i].className.replace(' active', '');
	}
	slides[slideIndex - 1].style.display = 'block';
	dots[slideIndex - 1].className += ' active';
	captionText.innerHTML = dots[slideIndex - 1].alt;
}

























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
//   });
// }











