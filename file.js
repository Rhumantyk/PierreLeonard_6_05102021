window.onscroll = function(e) // L'élément scroll est déclenché quand l'utilisateur fait défiler le contenu.
{ 
    // Renvoie le nbr de pixel que le document défile (pour les 2).
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;
    var content = document.querySelector('#link-content'); // #id ciblé

    scrollY <= this.lastScroll // Si nbr de pixels (de la page) défilés est <= (à) 0
      ? content.style.visibility = 'hidden' // alors
      : content.style.visibility = 'visible'; // (...) si non

    this.lastScroll = scrollY ;
}





// Clic sur #Tag = photographes ciblés apparaissent.
const ellieRoseWilkens = document.getElementById("ellie-rose-wilkens");
const tracyGalindo = document.getElementById("tracy-galindo");
const rhodeDubois = document.getElementById("rhode-dubois");
const marcelNikolic = document.getElementById("marcel-nikolic");
const nabeelBradford = document.getElementById("nabeel-bradford");
const mimiKeel = document.getElementById("mimi-keel");

  // #Portraits
const portraitTag = document.getElementById("portrait-tag");
portraitTag.addEventListener("click", () =>
{
  ellieRoseWilkens.style.display = "none";
  tracyGalindo.style.display = "none";
  rhodeDubois.style.display = "none";
  marcelNikolic.style.display = "none";
  nabeelBradford.style.display = "block";
  mimiKeel.style.display = "block";
});

  // #Art
const artTag = document.getElementById("art-tag");
artTag.addEventListener("click", () =>
{
  ellieRoseWilkens.style.display = "none";
  rhodeDubois.style.display = "none";
  marcelNikolic.style.display = "none";
  nabeelBradford.style.display = "none";
  mimiKeel.style.display = "none";
  tracyGalindo.style.display = "block";
});

  // #Fashion
const fashionTag = document.getElementById("fashion-tag");
fashionTag.addEventListener("click", () =>
{
  ellieRoseWilkens.style.display = "none";
  rhodeDubois.style.display = "block";
  marcelNikolic.style.display = "none";
  nabeelBradford.style.display = "none";
  mimiKeel.style.display = "none";
  tracyGalindo.style.display = "block";
});

  // #Architecture
const architectureTag = document.getElementById("architecture-tag");
architectureTag.addEventListener("click", () =>
{
  ellieRoseWilkens.style.display = "block";
  rhodeDubois.style.display = "none";
  marcelNikolic.style.display = "block";
  nabeelBradford.style.display = "none";
  mimiKeel.style.display = "none";
  tracyGalindo.style.display = "none";
});

  // #Travel
const travelTag = document.getElementById("travel-tag");
travelTag.addEventListener("click", () =>
{
  ellieRoseWilkens.style.display = "none";
  rhodeDubois.style.display = "none";
  marcelNikolic.style.display = "block";
  nabeelBradford.style.display = "block";
  mimiKeel.style.display = "block";
  tracyGalindo.style.display = "none";
});

  // #Sport
const sportTag = document.getElementById("sport-tag");
sportTag.addEventListener("click", () =>
{
  ellieRoseWilkens.style.display = "block";
  rhodeDubois.style.display = "block";
  marcelNikolic.style.display = "none";
  nabeelBradford.style.display = "none";
  mimiKeel.style.display = "none";
  tracyGalindo.style.display = "none";
});

  // #Animals
const animalsTag = document.getElementById("animals-tag");
animalsTag.addEventListener("click", () =>
{
  ellieRoseWilkens.style.display = "none";
  rhodeDubois.style.display = "block";
  marcelNikolic.style.display = "none";
  nabeelBradford.style.display = "none";
  mimiKeel.style.display = "block";
  tracyGalindo.style.display = "none";
});

  // #Events
const eventsTag = document.getElementById("events-tag");
eventsTag.addEventListener("click", () =>
{
  ellieRoseWilkens.style.display = "none";
  rhodeDubois.style.display = "block";
  marcelNikolic.style.display = "none";
  nabeelBradford.style.display = "none";
  mimiKeel.style.display = "block";
  tracyGalindo.style.display = "block";
});