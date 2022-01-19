//------------------ readBtn Hover--------------------//

var s2_offerbtn = document.querySelector(".s2_offerread_btn")
s2_offerbtn.addEventListener("mouseenter", yellow)
s2_offerbtn.addEventListener("mouseleave", trans)

function yellow() {
    s2_offerbtn.style.background = "rgb(255,221,0)"
}

function trans() {
    s2_offerbtn.style.background = "transparent"
}

//------------------ readBtn Hover--------------------//





//--------------------- hotal slider //----------------

var s2_left = 1;
var s2_right = 3;

if (window.innerWidth <= 750) {
    s2_left = 1;
    s2_right = 2;
}

if (window.innerWidth <= 420) {
    s2_left = 1
    s2_right = 1
}


window.addEventListener("load", s2_show)

var s2_a = 0

setInterval(s2_moveleft, 6000)

function s2_show() {

    for (var i = s2_left; i <= s2_right; i++) {
        document.getElementById("s2_img" + i).style.display = "inline-block"
    }
}

function s2_moveleft() {
    if (s2_left <= 2 && s2_right <= 6) {
        document.getElementById("s2_img" + s2_left).style.display = "none"
        s2_left++;
        s2_right++;
        for (var i = s2_left; i <= s2_right; i++) {
            document.getElementById("s2_img" + i).style.display = "inline-block"
        }
    } else {
        return
    }
    s2_a++
    if (s2_a >= 2 && s2_a <= 5) {
        setTimeout(s2_moveright, 6000)
    }
}

function s2_moveright() {
    if (s2_left >= 2 && s2_right >= 3) {
        document.getElementById("s2_img" + s2_right).style.display = "none"
        s2_left--;
        s2_right--;
        for (var i = s2_left; i <= s2_right; i++) {
            document.getElementById("s2_img" + i).style.display = "inline-block"
        }
    } else {
        return
    }
}


//--------------------- hotal slider //----------------


//--------------------- guest slider //----------------

var s2_guestleft = 1;
var s2_guestright = 1;

window.addEventListener("load", s2_guestshow)

var s2_b = 0

setInterval(s2_guestmoveleft, 6000)

function s2_guestshow() {
    for (var i = s2_guestleft; i <= s2_guestright; i++) {
        document.getElementById("s2guest" + i).style.display = "inline-block"
    }
}


function s2_guestmoveleft() {
    if (s2_guestleft <= 2 && s2_guestright <= 2) {
        document.getElementById("s2guest" + s2_guestleft).style.display = "none"
        s2_guestleft++;
        s2_guestright++;
        for (var i = s2_guestleft; i <= s2_guestright; i++) {
            document.getElementById("s2guest" + i).style.display = "inline-block"
        }
    } else {
        return
    }
    s2_b++
    if (s2_b >= 2 && s2_b <= 5) {
        setTimeout(s2_guestmoveright, 6000)
    }
}

function s2_guestmoveright() {
    if (s2_guestleft >= 2 && s2_guestright >= 2) {
        document.getElementById("s2guest" + s2_guestright).style.display = "none"
        s2_guestleft--;
        s2_guestright--;
        for (var i = s2_guestleft; i <= s2_guestright; i++) {
            document.getElementById("s2guest" + i).style.display = "inline-block"
        }
    } else {
        return
    }
}



//--------------------- guest slider //----------------