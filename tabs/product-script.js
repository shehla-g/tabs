$(document).ready(function ($) {
  $('.thumbs img').click(function () {
    var $src = $(this).attr('data-full-src');
    var $srcset = $(this).attr('data-full-srcset');
    var $alt = $(this).attr('alt');
    $('#photo-full').attr('src', $src);
    $('#photo-full').attr('srcset', $srcset);
    $('#photo-full').attr('alt', $alt);
  });
});




$('.thumbs img').click(function () {
  $('.thumbs img').removeClass('black');
  $(this).addClass('black');
});




// Function that get started when you click the tab

$('.tab-link').on('click', function() {
  var tabID = $(this).attr('data-tab');
  $('.tab-link').removeClass('active-menu');
  $(this).addClass('active-menu');
  $('.active-tab').fadeOut(300);
  setTimeout(function() {
    $('.slide').removeClass('active-tab');
    $('#' + tabID).fadeIn(300).addClass('active-tab');
  }, 300);
});

$(document).ready(function () {
  $('.main-1').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: '<span class="prev_arrow"><i class="fas fa-angle-left"></i></span>',
    nextArrow: '<span class="next_arrow"><i class="fas fa-angle-right"></i></span>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});


