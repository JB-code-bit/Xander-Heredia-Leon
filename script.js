const gallery=document.getElementById("gallery")

for(let i=0;i<200;i++){

const photo=document.createElement("div")

photo.className="photo"

photo.innerHTML=`

<img src="">

<img class="pin" src="images/pin.png">

`

gallery.appendChild(photo)

}
