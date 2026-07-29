const navbarButton=document.querySelector(".navbar-button")
const navbar=document.querySelector("nav")
navbarButton.addEventListener("click",()=>{
    navbar.classList.toggle("full-nav-mobile");
})
 document.querySelector(".copyright").textContent +=
        ` ${new Date().getFullYear()}`;