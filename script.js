const gallery = document.getElementById("gallery")

for(let i=0;i<200;i++){

const photo = document.createElement("div")

photo.className="photo"

photo.innerHTML=`

<div class="polaroid"></div>

<img class="pin" src="images/Adobe Express - file.png">

`

gallery.appendChild(photo)

}

/* CLICK INTERACTION */

document.querySelectorAll(".photo").forEach(photo=>{

photo.addEventListener("click",()=>{

document.querySelectorAll(".photo").forEach(p=>p.classList.remove("active"))

photo.classList.add("active")

})

})

/* AUTO SCROLL */

let autoScrollSpeed=.8

function autoScroll(){

gallery.scrollLeft+=autoScrollSpeed

requestAnimationFrame(autoScroll)

}

autoScroll()

/* MANUAL CONTROLS */

function scrollLeft(){

gallery.scrollBy({

left:-600,

behavior:"smooth"

})

}

function scrollRight(){

gallery.scrollBy({

left:600,

behavior:"smooth"

})

}
