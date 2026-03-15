const gallery=document.getElementById("gallery")

let images=[]

async function load(){

const res=await fetch("data/images.json")

images=await res.json()

display()

}

load()

function display(){

images.forEach(img=>{

const photo=document.createElement("div")

photo.className="photo"

photo.innerHTML=`

<img src="${img.src}" class="polaroid">

<img class="pin" src="images/Adobe Express - file.png">

`

gallery.appendChild(photo)

})

}

/* AUTO SCROLL */

function autoScroll(){

gallery.scrollLeft+=0.5

requestAnimationFrame(autoScroll)

}

autoScroll()
