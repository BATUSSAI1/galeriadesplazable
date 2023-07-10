const clickimagen = document.querySelector(".imagen");
console.log();
const imagenBlockHTML = document.querySelector(".imagen_block");
const imagenHTML0 = document.querySelector(".imagen0");
const imagenHTML1 = document.querySelector(".imagen1");
const imagenHTML2 = document.querySelector(".imagen2");
const imagenHTML3 = document.querySelector(".imagen3");
const imagenHTML4 = document.querySelector(".imagen4");

const textHTML0= document.querySelector(".text0")
const textHTML1= document.querySelector(".text1")
const textHTML2= document.querySelector(".text2")
const textHTML3= document.querySelector(".text3")
const textHTML4= document.querySelector(".text4")


clickimagen.addEventListener("click", function (e) {
    eraseClase ()

if (e.target.classList.contains("imagen_unic")) {

    if (e.target.id === "0") {
    imagenHTML0.classList.toggle("imagen_block_active");
    textHTML0.classList.toggle("show")
    } 
    }
    if (e.target.id === "1") {
    imagenHTML1.classList.toggle("imagen_block_active");
    textHTML1.classList.toggle("show")
    } 
    if (e.target.id === "2") {
    imagenHTML2.classList.toggle("imagen_block_active");
    textHTML2.classList.toggle("show")
    }
    if (e.target.id === "3") {
    imagenHTML3.classList.toggle("imagen_block_active");
    textHTML3.classList.toggle("show")
    } 
    if (e.target.id === "4") {
    imagenHTML4.classList.toggle("imagen_block_active");
    textHTML4.classList.toggle("show")
    }
});

function eraseClase (){
    imagenHTML0.classList.remove("imagen_block_active")
    imagenHTML1.classList.remove("imagen_block_active")
    imagenHTML2.classList.remove("imagen_block_active")
    imagenHTML3.classList.remove("imagen_block_active")
    imagenHTML4.classList.remove("imagen_block_active")
    textHTML0.classList.remove("show")
    textHTML1.classList.remove("show")
    textHTML2.classList.remove("show")
    textHTML3.classList.remove("show")
    textHTML4.classList.remove("show")
}