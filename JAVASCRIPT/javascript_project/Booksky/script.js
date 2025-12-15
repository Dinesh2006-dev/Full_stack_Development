var popup_overlay=document.querySelector(".popup-overlay")
var popup_box=document.querySelector(".popup-box")
var addpopup_btn=document.getElementById("add-popup-button")

addpopup_btn.addEventListener("click",function(){
    popup_overlay.style.display="block"
    popup_box.style.display="block"
})
var cancelpopup=document.getElementById("cancel-popup")

cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
     popup_overlay.style.display="none"
    popup_box.style.display="none"
})

