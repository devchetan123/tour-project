
var offerbtn = document.querySelector(".s2_offerread_btn")
offerbtn.addEventListener("mouseenter",yellow)
offerbtn.addEventListener("mouseleave",trans)

function yellow(){
  offerbtn.style.background = "rgb(255,221,0)"
}

function trans(){
  offerbtn.style.background = "transparent"
}