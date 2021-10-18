window.onscroll = function(e) // L'élément scroll est déclenché quand l'utilisateur fait défiler le contenu.
{ 
    // Renvoie le nbr de pixel que le document défile (pour les 2).
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;
    var content = document.querySelector('#link-content'); // #id ciblé

    scrollY <= this.lastScroll // Si nbr de pixels (de la page) défilés est <= (à) 0
      ? content.style.visibility = 'hidden'
      : content.style.visibility = 'visible';

    this.lastScroll = scrollY ;
}





// Clic sur tag = photographes ciblés apparaissent.
// Div avec les classes associées soient spécifiées dans la function

// function tagsFilter()
// {
//   // let sports = ["Ellie-Rose Wilkens", "Rhode Dubois"];
//   // let portraits = ["Mimi Keel", "Nabeel Bradford", ];
//   // let event = ["Mimi Keel", "Tracy Galindo", "Rhode Dubois"];
//   // let travel = ["Mimi Keel", "Nabeel Bradford", "Marcel Nikolic"]
//   // let animals = ["Mimi Keel", "Rhode Dubois"];
//   // let architecture = ["Ellie-Rose Wilkens", "Marcel Nikolic"];
//   // let art = ["Tracy Galindo"];
//   // let fashion = ["Tracy Galindo", "Rhode Dubois"];

//   // document.getElementsByClassName("nav-header").onclick = function tagsFilter(e)
//   // {
//   //   mimiKeelDiv = document.getElementsByClassName("mimi-keel");

//   //   if(e.target = document.getElementsByClassName("portrait-tag"))
//   //   {
//   //     // Rien
//   //           // display : none; pour les photographes non tagués.
//   //           mimiKeelDiv.style.display = 'none';     
//   //   }
//   //   else
//   //   {
//   //   //   // display : none; pour les photographes non tagués.
//   //   //   mimiKeelDiv.style.display = 'none';
//   //   }




//   // div 1 = text
//   // <a> 2 = link

//   document.getElementsByClassName("portrait-tag").addEventListener('click',function(e)
//   {
//     document.getElementById("mimi-keel").style.display = 'none';
//   });
// }



// Test function 2
// querySelectorAll("#mimi-keel, #nabeel-bradford", #etc ...);   --> Pourquoi ça ne fonctionne pas ?
const ellieRoseWilkens = document.getElementById("ellie-rose-wilkens");
const tracyGalindo = document.getElementById("tracy-galindo");
const rhodeDubois = document.getElementById("rhode-dubois");
const marcelNikolic = document.getElementById("marcel-nikolic");
const nabeelBradford = document.getElementById("nabeel-bradford");
const mimiKeel = document.getElementById("mimi-keel");



// const portraitTag = document.getElementById("portrait-tag"); // tagBtn#
// portraitTag.onclick = function ()
// {
//   if (ellieRoseWilkens.style.display !== "none") // portraitTag.clicked == true
//   {
//     ellieRoseWilkens.style.display = "none";
//     tracyGalindo.style.display = "none";
//     rhodeDubois.style.display = "none";
//     marcelNikolic.style.display = "none";
//   }
//   else
//   {
//     nabeelBradford.style.display = "block";
//     mimiKeel.style.display = "block";
//   }
// };


const portraitTag = document.getElementById("portrait-tag"); // tagBtn#
portraitTag.addEventListener("click", () =>
{
  ellieRoseWilkens.style.display = "none";
  tracyGalindo.style.display = "none";
  rhodeDubois.style.display = "none";
  marcelNikolic.style.display = "none";
  nabeelBradford.style.display = "block";
  mimiKeel.style.display = "block";
});


const artTag = document.getElementById("art-tag"); // tagBtn#
artTag.addEventListener("click", () =>
{
  ellieRoseWilkens.style.display = "none";
  rhodeDubois.style.display = "none";
  marcelNikolic.style.display = "none";
  nabeelBradford.style.display = "none";
  mimiKeel.style.display = "none";
  tracyGalindo.style.display = "block";
});


// const artTag = document.getElementById("art-tag"); // tagBtn#
// artTag.onclick = function ()
// {
//   if (ellieRoseWilkens.style.display !== "none")
//   {
//     ellieRoseWilkens.style.display = "none";
//     rhodeDubois.style.display = "none";
//     marcelNikolic.style.display = "none";
//     nabeelBradford.style.display = "none";
//     mimiKeel.style.display = "none";
//   }
//   else
//   {
//     tracyGalindo.style.display = "block";
//   }
// };



// const targetDiv = document.getElementById("third");
// const btn = document.getElementById("toggle");
// btn.onclick = function () {
//   if (targetDiv.style.display !== "none") {
//     targetDiv.style.display = "none";
//   } else {
//     targetDiv.style.display = "block";
//   }
// };



























// // Lien : https://codepen.io/leandrino/pen/bdEajV
// var items = document.querySelectorAll('#photographers div');

// // Filtrage au clic
// each('.nav-header a', function(el)
// {
//   el.addEventListener('click', function(e)
//   {
//     e.preventDefault();
//     filterLinks(el);
//   });
// });

// // filter links functions
// function filterLinks(element)
// {
//   // get text 
//   var el = element.textContent,
//     // convert to lowercase
//     linksTolowerCase = el.toLowerCase();
//   // if all remove all elements
//   if (el === 'All')
//   {
//     // first show all view class
//     each('.view', function(e)
//     {
//       e.classList.remove('view');
//     });
//   } else {
//     // if not click all remove all elements
//     each('.view', function(e)
//     {
//       e.classList.remove('view');
//     });
//   }
// };
// // forech arrays
// function each(el, callback)
// {
//   var allDivs = document.querySelectorAll(el),
//     alltoArr = Array.prototype.slice.call(allDivs);
//   Array.prototype.forEach.call(alltoArr, function(selector, index)
//   {
//     if (callback) return callback(selector);
//   });
// };