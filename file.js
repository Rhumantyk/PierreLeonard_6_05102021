
function myScrollFunc() // Scroll page
{
    myID = document.getElementById("#link-content"); 
    let y = window.scrollY;
    if (y >= 10)
    {
        myID.classList.add = "show";
        myID.classList.remove = "hide";
    }
    else
    {
        myID.classList.add = "hide";
        myID.classList.remove = "show";
    }
};

window.addEventListener("scroll", myScrollFunc);