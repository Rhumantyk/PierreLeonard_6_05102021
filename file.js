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



// const jsonFile = '/FishEyeData.json';



// fetch('/FishEyeData.json')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.log(error))






// let data = [];

// fetch('/FishEyeData.json')
//   .then(response => response.json())
//   .then((value) => 
// // tu affectes les données à la variable data  
// data = value
// // ou tu affectes les données à une fonction
// // function deployFishEyeData(data) 
// // ou tu mappes tes données (Une fonction qui appelle une classe qui crée un object js à partir du json - moins utile ici, mais en gros tu les réorganises en un nouvel objet javascript adapté à tes besoins)
// // mapFishEyeData(data)
// )


  // if(data.length)
  // {
  //   let divPhotographers = document.getElementById("photographers");
  //   divPhotographers.innerHTML = data.photographers[3];
  //   console.log(data);
  // }










// let data = [];

  fetch('/FishEyeData.json')
  .then(response => response.json())
  .then(function (data) {
      appendData(data);
    }) 
  // data = value;

  function appendData(data)
  {
    var mainContainer = document.getElementById("photographers");
    for (var i = 0; i < data.length; i++)
    {
      var div = document.createElement("div");
      div.innerHTML = 'Name: ' + data[i].firstName + ' ' + data[i].lastName;
      mainContainer.appendChild(div);
    }
  }


  

// let divPhotographers = document.querySelector("photographers");
// divPhotographers.innerHTML = data.photographers[3];




























































































// // Version initiale manuelle à supprimer plus tard

// // Clic sur #Tag = photographes ciblés apparaissent.
// const ellieRoseWilkens = document.getElementById("ellie-rose-wilkens");
// const tracyGalindo = document.getElementById("tracy-galindo");
// const rhodeDubois = document.getElementById("rhode-dubois");
// const marcelNikolic = document.getElementById("marcel-nikolic");
// const nabeelBradford = document.getElementById("nabeel-bradford");
// const mimiKeel = document.getElementById("mimi-keel");

//   // #Portraits
// const portraitTag = document.getElementById("portrait-tag");
// portraitTag.addEventListener("click", () =>
// {
//   ellieRoseWilkens.style.display = "none";
//   tracyGalindo.style.display = "none";
//   rhodeDubois.style.display = "none";
//   marcelNikolic.style.display = "none";
//   nabeelBradford.style.display = "block";
//   mimiKeel.style.display = "block";
// });

//   // #Art
// const artTag = document.getElementById("art-tag");
// artTag.addEventListener("click", () =>
// {
//   ellieRoseWilkens.style.display = "none";
//   rhodeDubois.style.display = "none";
//   marcelNikolic.style.display = "none";
//   nabeelBradford.style.display = "none";
//   mimiKeel.style.display = "none";
//   tracyGalindo.style.display = "block";
// });

//   // #Fashion
// const fashionTag = document.getElementById("fashion-tag");
// fashionTag.addEventListener("click", () =>
// {
//   ellieRoseWilkens.style.display = "none";
//   rhodeDubois.style.display = "block";
//   marcelNikolic.style.display = "none";
//   nabeelBradford.style.display = "none";
//   mimiKeel.style.display = "none";
//   tracyGalindo.style.display = "block";
// });

//   // #Architecture
// const architectureTag = document.getElementById("architecture-tag");
// architectureTag.addEventListener("click", () =>
// {
//   ellieRoseWilkens.style.display = "block";
//   rhodeDubois.style.display = "none";
//   marcelNikolic.style.display = "block";
//   nabeelBradford.style.display = "none";
//   mimiKeel.style.display = "none";
//   tracyGalindo.style.display = "none";
// });

//   // #Travel
// const travelTag = document.getElementById("travel-tag");
// travelTag.addEventListener("click", () =>
// {
//   ellieRoseWilkens.style.display = "none";
//   rhodeDubois.style.display = "none";
//   marcelNikolic.style.display = "block";
//   nabeelBradford.style.display = "block";
//   mimiKeel.style.display = "block";
//   tracyGalindo.style.display = "none";
// });

//   // #Sport
// const sportTag = document.getElementById("sport-tag");
// sportTag.addEventListener("click", () =>
// {
//   ellieRoseWilkens.style.display = "block";
//   rhodeDubois.style.display = "block";
//   marcelNikolic.style.display = "none";
//   nabeelBradford.style.display = "none";
//   mimiKeel.style.display = "none";
//   tracyGalindo.style.display = "none";
// });

//   // #Animals
// const animalsTag = document.getElementById("animals-tag");
// animalsTag.addEventListener("click", () =>
// {
//   ellieRoseWilkens.style.display = "none";
//   rhodeDubois.style.display = "block";
//   marcelNikolic.style.display = "none";
//   nabeelBradford.style.display = "none";
//   mimiKeel.style.display = "block";
//   tracyGalindo.style.display = "none";
// });

//   // #Events
// const eventsTag = document.getElementById("events-tag");
// eventsTag.addEventListener("click", () =>
// {
//   ellieRoseWilkens.style.display = "none";
//   rhodeDubois.style.display = "block";
//   marcelNikolic.style.display = "none";
//   nabeelBradford.style.display = "none";
//   mimiKeel.style.display = "block";
//   tracyGalindo.style.display = "block";
// });