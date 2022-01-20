let image = document.getElementById("image");
// document.getElementById("image").style.background ( linear-gradient( rgba(0, 0, 0, 0.6) ,rgba(0, 0, 0, 0.3)))
let arrOfImage = ["image10.webp", "image11.webp", "image12.webp", "image13.webp"]
image.src = "image21.webp"
let text1 =["2 DAYS TOUR","10 DAYS CRUISE","EXPLORE OUR MOST TRAVEL AGENCY","EXPERIENCE THE"]
let text2 = ["Amazing Maldives Tour","From Greece to Spain","Our Travel Agency","Best Trip Ever"]

setInterval(function () {
    let random = Math.floor(Math.random() *4)
    let centerText1=document.getElementById("S1_div_centertext1")
    centerText1.textContent=text1[random]
    let centerText2=document.getElementById("S1_div_centertext2")
    centerText2.textContent=text2[random]
    image.src = arrOfImage[random]
    // image.style.filter = "brightness(0.5)";
    // image.style.filter = "opacity(0.2)";
}, 2000)


var tabButtons=document.querySelectorAll(".S1_tab .S1_button_container button");
var S1_tab_pannels=document.querySelectorAll(".S1_tab  .S1_tab_pannel");

function showPanel(panelIndex,colorCode) {
    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color="white";
    S1_tab_pannels.forEach(function(node){
        node.style.display="none";
    });
    S1_tab_pannels[panelIndex].style.display="block";
    S1_tab_pannels[panelIndex].style.backgroundColor=colorCode;
}
showPanel(0,'#2c2e3e');


