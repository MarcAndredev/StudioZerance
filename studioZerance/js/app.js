// création du slider 
var slider = document.querySelector(".slider")
var imgSlider = document.querySelectorAll(".slider img")
var nbSlider = imgSlider.length
var btnNext = document.querySelector(".btn-next")

var count = 0

function slideNext() {
   
    imgSlider[count].classList.remove("active")
    count++
    if (count < nbSlider) {
        imgSlider[count].classList.add("active")
      
    } else {
        count = 0
        imgSlider[count].classList.add("active")
      
    }
}
btnNext.addEventListener("click", slideNext)

// popup 

var btnPopup = document.getElementById("btn_popup")
var overlay = document.getElementById("overlay")
var btnClose = document.getElementById("btnClose")
var menu = document.getElementById("menu")
var menuBurger = document.getElementById("menu_burger")
btnPopup.addEventListener("click",open)
function open() {
overlay.style.display="block"
btnClose.style.display="block"
menuBurger.style.display="none"
}

btnClose.addEventListener("click",close)
function close() {
    overlay.style.display="none"
    btnClose.style.display="none"
}
// ouverture et fermeture du burger au click


menu.addEventListener("click", function() {
    if(menuBurger.style.display=="block"){
        menuBurger.style.display="none"
    }
    else {
        menuBurger.style.display="block"
    }
    
    
})
//  ouverture et ferme du popup

