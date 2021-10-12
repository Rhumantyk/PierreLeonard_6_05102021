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

function tagsFilter()
{
    let sports = ["Ellie-Rose Wilkens", "Rhode Dubois"];
    let portraits = ["Mimi Keel", "Nabeel Bradford", ];
    let event = ["Mimi Keel", "Tracy Galindo", "Rhode Dubois"];
    let travel = ["Mimi Keel", "Nabeel Bradford", "Marcel Nikolic"]
    let animals = ["Mimi Keel", "Rhode Dubois"];
    let architecture = ["Ellie-Rose Wilkens", "Marcel Nikolic"];
    let art = ["Tracy Galindo"];
    let fashion = ["Tracy Galindo", "Rhode Dubois"]
}