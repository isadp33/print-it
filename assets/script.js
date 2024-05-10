const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Ajout du EventListeners sur les fléches et test

let numero = 0;
let currentImage; // declaration de la variable pour stocker l'élément image actuel

const left = document.querySelector(".arrow_left");
console.log(left);
const right = document.querySelector(".arrow_right");
console.log(right);

left.addEventListener("click", function () {ChangeSlide(-1)});
right.addEventListener("click", function () {ChangeSlide(1)});
function showLeftSlide(){
	console.log("Tu as cliqué sur la flèche gauche");
}

function showRightSlide(){
	console.log("Tu as cliqué sur la flèche droite");
}

console.log(slides.length);



// Slides 
// Fonction pour changer de diapositive

function ChangeSlide(sens) {
	numero = numero + sens;
	if (numero > slides.length - 1)
		numero = 0;
	if (numero < 0)
		numero = slides.length - 1;
	console.log(numero + sens)

// Mettre à jour l'image affichées
    currentImage.src = './assets/images/slideshow/' + slides[numero]['image'];

// Mettre à jour le texte affiché

	document.querySelector("#banner p").innerHTML = slides[numero].tagLine;



    // Mettre à jour la classe des bullets (dots) 
	// pour indiquer la diapositive active
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
        if (index === numero) {
            dot.classList.add("dot_selected");
        } else {
            dot.classList.remove("dot_selected");
        }
    });
}

// Initialisation du diaporama
document.addEventListener("DOMContentLoaded", function() {
    // Récupération de l'élément image initiale
    currentImage = document.querySelector(".banner-img");

    // Ajout des bullets (dots)
    const dotsDiv = document.querySelector(".dots");
    for (let i = 0; i < slides.length; i++) {
        const bullet = document.createElement('span');
        dotsDiv.appendChild(bullet);
        bullet.classList.add("dot");
        if (i === numero) {
            bullet.classList.add("dot_selected");
        }
    }
});







// Mettre à jour les images et textes affichés

//document.querySelector(".banner-img").src = './assets/images/slideshow/' + slides[numero]['image'];
//document.getElementById("text").innerHTML = slides[numero]['tagLine'];
//}


// ajout des bullets et affichage 

//const dotsDiv = document.querySelector(".dots");

//for(let i=0; i<slides.length; i++) {
//	const bullet = document.createElement('span');
//	dotsDiv.appendChild(bullet);
//	bullet.classList.add("dot")
//	bullet.classList.add("dot_selected");
//}

//const codeDot = document.querySelector(".dots").innerHTML = '<p class="dot"></p>'.repeat(slides.length);
//{ 
//	console.log(codeDot);
//};



// Ajout des bullets








