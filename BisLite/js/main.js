$(function(){
  $('.slider_inner').slick({
    arrows:false,
    dots:true,
  });
  $('.works_items').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:'<button type="button" class="slick-prev slick-arrow"><img src="img/slider/arrow-left.svg" alt=""></button>',
    nextArrow:'<button type="button" class="slick-next slick-arrow"><img src="img/slider/arrow-right.svg" alt=""></button>',
  });
  $('.nav_btn').on('click', function(){
    $('.nav ul').slideToggle(); 
  });
});