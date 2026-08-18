let navBtn=document.querySelector("nav button"),navLinks=document.querySelector("nav"),media=window.matchMedia("(min-width:992px)");navBtn.addEventListener("click",()=>{navLinks.classList.toggle("active")}),media.addEventListener("resize",e=>{e.matches?(navLinks.classList.remove("active"),navBtn.style.display="none"):navBtn.style.display="block"});
//# sourceMappingURL=script.js.map
