//using swiper 
new Swiper(".swiper-container", {
    speed: 400,
    effect:"flip",
    spaceBetween: 100,
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });

  /*popmotion for logo */
const { styler, spring, listen, pointer, value } = window.popmotion;

const logo = document.querySelector('.brand');
const divStyler = styler(logo);
const logoXY = value({ x: 0, y: 0 }, divStyler.set);

listen(logo, 'mousedown touchstart')
  .start((e) => {
    e.preventDefault();
    pointer(logoXY.get()).start(logoXY);
  });

listen(document, 'mouseup touchend')
  .start(() => {
    spring({
      from: logoXY.get(),
      velocity: logoXY.getVelocity(),
      to: { x: 0, y: 0 },
      stiffness: 200,
      // mass: 1,
      // damping: 10
    }).start(logoXY);
  });

/* Gallery*/ 
const imageGallery = document.querySelectorAll('.image-gallery');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentSelected = 0;

//function for previous button
prevButton.addEventListener('click',function(){
    imageGallery[currentSelected].classList.remove('active');
    currentSelected --;
    imageGallery[currentSelected].classList.add('active');
    nextButton.disabled = false;

    if(currentSelected === 0){
        prevButton.disabled = true;
    }
});

//function for next button
nextButton.addEventListener('click',function(){
    imageGallery[currentSelected].classList.remove('active');
    currentSelected ++;
    imageGallery[currentSelected].classList.add('active');
    prevButton.disabled = false;

    if(imageGallery.length === currentSelected + 1){
        nextButton.disabled = true;
    } 

})

