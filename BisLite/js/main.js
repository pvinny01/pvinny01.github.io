$(function(){
  $('.slider_inner').slick({
    arrows:false,
    dots:true,
  });
  $('.works_items').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-arrow slick-prew"><img src="img/slider/arrow-left.svg" alt=""></button>'
    nextArrow:'<button class="slick-arrow slick-next"><img src="img/slider/arrow-right.svg" alt=""></button>'
  });
});