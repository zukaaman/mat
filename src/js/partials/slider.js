$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    nav:true,
    dots:false,
    margin:15,
    items:2,
    autoplay:true,
    autoplayTimeout:3000,
    navText : ["",""],
    rewind:true,
    loop:false,
  });

  var owl = $(".owl-carousel");

  owl.owlCarousel();
  $(".owl__next").click(function(){
    owl.trigger("next.owl.carousel");
  });
  $(".owl__prev").click(function(){
    owl.trigger("prev.owl.carousel");
  });
});

