// description__tabs
$(document).ready(function() {
  $('.description__tabs > li:first-child').addClass('active');
  $('.description__block-wrapper:first-child').addClass('active');
 });

$('.description__111 .description__tabs > li').click(function(event){
  event.preventDefault();

  var tab = $(this).index();

  $(this).addClass('active').siblings().removeClass('active')

  $(this).parents('.description__111').find('div.description__wrapper').find('.description__block-wrapper.active').removeClass('active').fadeOut(0, function() {
    $(this).parents('.description__111').find('div.description__wrapper').find('.description__block-wrapper').eq(tab).addClass('active').fadeIn(0);
  });
});
