 $(document).ready(function() {
	
// 	var images = [
// 		'imagenes/TIKTOK.png',
// 		'imagenes/SEND.png',
// 		'imagenes/IG.png',
// 		'imagenes/YT.png',
// 	];
	
// 	var backgroundElement = document.getElementById('background');
// var imageElements = backgroundElement.getElementsByClassName('background-image');

// for (var i = 0; i < imageElements.length; i++) {
// 	var randomImage = images[Math.floor(Math.random() * images.length)];
// 	var imageElement = imageElements[i];
// 	imageElement.src = randomImage;

// 	var randomX = Math.floor(Math.random() * (window.innerWidth - imageElement.offsetWidth));
// 	var randomY = Math.floor(Math.random() * (window.innerHeight - imageElement.offsetHeight));
// 	imageElement.style.left = randomX + 'px';
// 	imageElement.style.top = randomY + 'px';
// }

// // document.addEventListener("DOMContentLoaded", function() {
// //   var navbar = document.querySelector(".navbar");

// //   window.addEventListener("scroll", function() {
// //     if (window.scrollY > 0) {
// //       navbar.classList.add("navbar-scrolled");
// //     } else {
// //       navbar.classList.remove("navbar-scrolled");
// //     }
// //   });
// // });

// Evento que se ejecuta cuando se carga la página



 });

// document.addEventListener('DOMContentLoaded', function() {
// 	const carousel = document.querySelector('.carousel');
// 	const slides = document.querySelector('.slides');
// 	const slideWidth = carousel.clientWidth;
// 	let currentIndex = 0;
  
// 	function slideNext() {
// 	  currentIndex++;
// 	  if (currentIndex >= slides.children.length) {
// 		currentIndex = 0;
// 	  }
// 	  slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
// 	}
  
// 	setInterval(slideNext, 3000);
//   });

  window.addEventListener('resize', function() {
	if (window.innerWidth < 768) {
	  document.querySelector('.whatsapp-button').style.display = 'none';
	} else {
	  document.querySelector('.whatsapp-button').style.display = 'block';
	}
  });  

  function changeSize(img) {
	img.classList.toggle('zoomed');
  }

  var svgImages = document.querySelectorAll(".svg-image");
  svgImages.forEach(function(svgImage) {
	var posX = getRandomNumber(0, window.innerWidth - svgImage.clientWidth);
	var posY = getRandomNumber(0, window.innerHeight - svgImage.clientHeight);
	svgImage.style.left = posX + "px";
	svgImage.style.top = posY + "px";
  });
  function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Función para cambiar el color de una imagen SVG
  function changeColor(svgElement) {
	//var hue = getRandomNumber(0, 360); // Generar un valor de matiz aleatorio (0-360)
	var hue = 213;
	svgElement.style.fill = "hsl(" + hue + ", 100%, 50%)"; // Cambiar el color de relleno usando HSL
  }

  // Evento de clic en el botón
  document.getElementById("changeColorButton").addEventListener("click", function() {
	var svgImages = document.querySelectorAll(".svg-image");
	svgImages.forEach(function(svgImage) {
	  var posX = getRandomNumber(0, window.innerWidth - svgImage.clientWidth);
	  var posY = getRandomNumber(0, window.innerHeight - svgImage.clientHeight);
	  svgImage.style.left = posX + "px";
	  svgImage.style.top = posY + "px";
	  changeColor(svgImage);
	});
  });