const gallery = document.getElementById("gallery")

let images = JSON.parse(localStorage.getItem("portfolioImages")) || []

const categories = [
"headshot",
"waistup",
"posing",
"fullbody",
"shirtless"
]

let orderedImages = []

categories.forEach(cat=>{
images.forEach(img=>{
if(img.category===cat){
orderedImages.push(img)
}
})
})

for(let i=0;i<200;i++){

const photo=document.createElement("div")

photo.className="photo"

let imgHTML=""

if(orderedImages[i]){

imgHTML=`<img src="${orderedImages[i].src}" class="polaroid">`

}else{

imgHTML=`<div class="polaroid"></div>`

}

photo.innerHTML=`

${imgHTML}

<img class="pin" src="images/Adobe Express - file.png">

`

gallery.appendChild(photo)

}

/* CLICK EFFECT */

document.querySelectorAll(".photo").forEach(photo=>{

photo.addEventListener("click",()=>{

document.querySelectorAll(".photo").forEach(p=>p.classList.remove("active"))

photo.classList.add("active")

})

})

/* AUTO SCROLL */

function autoScroll(){

gallery.scrollLeft += 0.8

requestAnimationFrame(autoScroll)

}

autoScroll()

/* CATEGORY JUMP */

function jump(position){

gallery.scrollTo({

left: position * 350,
behavior: "smooth"

})

}
