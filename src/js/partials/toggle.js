$(document).ready(function() {

  var mat1 = $('#mat-color-1'),
      mat2 = $('#mat-color-2'),
      mat3 = $('#mat-color-3'),
      mat4 = $('#mat-color-4'),
      mat5 = $('#mat-color-5'),
      mat6 = $('#mat-color-6'),
      label = $('.color--labels label');

  $('.image-1').addClass('active');

  $('label[for="mat-color-1"]').click(function() {

      $('.image-1').addClass('active');
      $('.image-2').removeClass('active');
      $('.image-3').removeClass('active');
      $('.image-4').removeClass('active');
      $('.image-5').removeClass('active');
      $('.image-6').removeClass('active');

  });

  $('label[for="mat-color-2"]').click(function() {

      $('.image-1').removeClass('active');
      $('.image-2').addClass('active');
      $('.image-3').removeClass('active');
      $('.image-4').removeClass('active');
      $('.image-5').removeClass('active');
      $('.image-6').removeClass('active');

  });

  $('label[for="mat-color-3"]').click(function() {

      $('.image-1').removeClass('active');
      $('.image-2').removeClass('active');
      $('.image-3').addClass('active');
      $('.image-4').removeClass('active');
      $('.image-5').removeClass('active');
      $('.image-6').removeClass('active');

  });

  $('label[for="mat-color-4"]').click(function() {

      $('.image-1').removeClass('active');
      $('.image-2').removeClass('active');
      $('.image-3').removeClass('active');
      $('.image-4').addClass('active');
      $('.image-5').removeClass('active');
      $('.image-6').removeClass('active');

  });

  $('label[for="mat-color-5"]').click(function() {

      $('.image-1').removeClass('active');
      $('.image-2').removeClass('active');
      $('.image-3').removeClass('active');
      $('.image-4').removeClass('active');
      $('.image-5').addClass('active');
      $('.image-6').removeClass('active');

  });

  $('label[for="mat-color-6"]').click(function() {

      $('.image-1').removeClass('active');
      $('.image-2').removeClass('active');
      $('.image-3').removeClass('active');
      $('.image-4').removeClass('active');
      $('.image-5').removeClass('active');
      $('.image-6').addClass('active');

  });


});
