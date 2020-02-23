var burger = document.querySelector('.burgermenu');
var nav = document.querySelector('.nav-links');

function openMenu(){
    nav.classList.toggle('nav-active');
}

burger.addEventListener('click', openMenu);

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) { // loopt door alle plaatjes van de array
    slides[i].style.display = "none"; // zorgt dat alle plaatjes niet zichtbaar zijn 
  }
  slideIndex++; 
  if (slideIndex > slides.length) {slideIndex = 1} //gaat terug naar eerste item in array als je over de lengte van de array gaat   
  
  slides[slideIndex-1].style.display = "block"; //laat 1 item van de array zien 
                                                               
  setTimeout(showSlides, 5200); // Change image every seconds
}