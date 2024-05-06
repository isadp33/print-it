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

const left = document.querySelector(".arrow_left");
console.log(left);
const right = document.querySelector(".arrow_right");
console.log(right);

left.addEventListener("click", showLeftSlide);
right.addEventListener("click", showRightSlide);
function showLeftSlide(){
	console.log("Tu as cliqué sur la flèche gauche");
}

function showRightSlide(){
	console.log("Tu as cliqué sur la flèche droite");
}

console.log(slides.length);

// ajout des bullets

const codeDot = document.querySelector(".dots").innerHTML = '<p class="dot"></p>'.repeat(slides.length);
{ 
	console.log(codeDot);
};

// Slides 


function ChangeSlide(sens) {
	numero = numero + sens;
	if (numero > slides.length - 1)
		numero = 0;
	if (numero < 0)
		numero = slides.length - 1;
document.querySelector(".banner-img").src = './assets/images/slideshow/' + slides[numero]['image'];
document.getElementById("text").innerHTML = slides[numero]['tagLine'];
	console.log(sens)
}






// Ajout des bullets

//const dotsDiv = document.querySelector(".dots");

//for(let i=0; i<3; i++) {
//	const bullet = document.createElement('span');
//	dotsDiv.appendChild(bullet);
//	bullet.classList.add("dot")
//	bullet.classList.add("dot_selected");
//}






