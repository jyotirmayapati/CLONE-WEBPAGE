const slider = document.querySelector('.slideShow');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let slidePosition = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function updateSliderPosition() {
    slider.style.transform = `translateX(${-slidePosition * 25}%)`;
}

function nextSlide() {
    if (slidePosition < totalSlides - 4) {
        slidePosition=slidePosition+4;
        updateSliderPosition();
    }
}

function prevSlide() {
    if (slidePosition > 0) {
        slidePosition=slidePosition-4;
        updateSliderPosition();
    }
    
}


const button = document.getElementById('loginButton');
const popupContent = document.getElementById('accountcontent');
const PopupHide=document.getElementById('accountcontent')

function showPopup() {
  popupContent.style.display = 'block';
}

function hidePopup() {
  popupContent.style.display = 'none';
}


button.addEventListener('mouseenter', showPopup);
PopupHide.addEventListener('mouseleave',hidePopup)

document.addEventListener('click', function(event) {
  if (!button.contains(event.target) && !popupContent.contains(event.target)) {
    popupContent.style.display = 'none';
  }
});