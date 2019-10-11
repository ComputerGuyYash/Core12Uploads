$(document).ready(function() {
    for(i = 0;i<7;i++){
      $('#one').append('<div class="img" style="background-image: url('+(i+1)+'.jpg)"><div class="filter"></div></div>')
  }
});
var x = 300;
$(window).scroll(function () {
  var height = innerHeight;
  wScroll=$(this).scrollTop();
  x = wScroll/2;
  $('.bft').css('transform','translateY('+(((wScroll-($('.bft').offset().top))/1.3))+'px)')
  $('.doraemaan').css('transform','translateY('+(((wScroll-($('.doraemaan').offset().top))/2))+'px)')
  $('.CC').css('transform','translateY('+(((wScroll-($('.CC').offset().top))/1.3)+50)+'px)')
  $('.navbar').css('background-color','rgba(255,255,255,'+wScroll/(height*2)+')');
  $('.navbar').css('border-color','rgba(0,0,0,'+wScroll/(height*2)+')');
  $('.slider').css('transform','rotate(-30deg) translateX('+(600-x)+'px) translateY(-100px)')
  if(wScroll > ($('.slide3').offset().top)-200){
    console.log(((wScroll-$('.slide3').offset().top)/parseInt($('.slide3').css('height').replace("px",""))*100))
    $('.side1').css('width',(((wScroll-$('.slide3').offset().top)/parseInt($('.slide3').css('height').replace("px",""))*100)+50)+'%')
    $('.side2').css('width',((100-(((wScroll-$('.slide3').offset().top)/parseInt($('.slide3').css('height').replace("px",""))*100)))-51)+'%')
  }
  console.log($('.slide3').offset().top)
})
