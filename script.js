const gallery = document.getElementById("gallery")

let images = []

async function load(){

    try{

        const res = await fetch("data/images.json")

        images = await res.json()

    }catch{

        images = []

    }

    display()

}

load()

function display(){

    gallery.innerHTML = ""

    images.forEach(img=>{

        const photo = document.createElement("div")

        photo.className = "photo"

        photo.innerHTML = `

        <img src="${img.src}" class="polaroid">

        <img class="pin" src="images/Adobe Express - file.png">

        `

        gallery.appendChild(photo)

    })

}

/* CLOTHESLINE AUTO SCROLL */

let scrollSpeed = 0.35

function autoScroll(){

    gallery.scrollLeft += scrollSpeed

    if(gallery.scrollLeft >= gallery.scrollWidth - gallery.clientWidth){

        gallery.scrollLeft = 0

    }

    requestAnimationFrame(autoScroll)

}

autoScroll()

/* HOVER PAUSE */

gallery.addEventListener("mouseenter", ()=>{

scrollSpeed = 0

})

gallery.addEventListener("mouseleave", ()=>{

scrollSpeed = 0.35

})
