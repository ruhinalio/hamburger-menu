const hamburger = document.getElementById("menu-bar");
const menu = document.querySelector(".nav-links");
const opacity = document.querySelector("opacity");
const body = document.body;

function toggleMenu() {
  hamburger.classList.toggle("change");
  menu.classList.toggle("change");
  menu.classList.toggle("active");
  body.classList.toggle("changeBg");
}
// .addEventListener("click",()=>{
//     hamburger.classList.remove("change")
//     menu.classList.remove("change")
//     menu.classList.remove("opacity")
// })
// function removeMenu() {
//   hamburger.classList.toggle("change");
//   menu.classList.toggle("change");
//   menu.classList.toggle("active");
//   body.classList.toggle("changeBg");
// }



// seyfeni scroll edende menu avtomatik baglanmasi
 window.addEventListener("scroll",()=>{
    hamburger.classList.remove("change");
  menu.classList.remove("change");
  menu.classList.remove("active");
  body.classList.remove("changeBg");
 })

 
