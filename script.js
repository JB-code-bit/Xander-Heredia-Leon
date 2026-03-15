const gallery=document.getElementById("gallery")

let images=JSON.parse(localStorage.getItem("portfolioImages")) || []

for(let i=0;i<200;i++){

const photo=document.createElement("div")

photo.className="photo"

let imgHTML=""

if(images[i]){

imgHTML=`<img src="${images[i]}" class="polaroid">`

}else{

imgHTML=`<div class="polaroid"></div>`

}

photo.innerHTML=`

${imgHTML}

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

function autoScroll(){

gallery.scrollLeft+=.8

requestAnimationFrame(autoScroll)

}

autoScroll()
