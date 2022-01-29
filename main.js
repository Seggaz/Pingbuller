$(document).ready(function(){
    $('.bxslider').bxSlider({
        controls: true,
        responsive :true,
        speed: 600
    });
    $('.bxslider-1').bxSlider({
        auto: true,
        controls: false,
        responsive :true,
        speed: 2500
        });
    $('.slider-company').bxSlider({
        auto: true,
        minSlides:1,
        maxSlides:7,
        page:false,
        controls: false,
        speed: 1500,
        moveSlides:1,
        slideWidth:150
        });
  });
