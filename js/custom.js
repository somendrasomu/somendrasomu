$(document).ready(function () {
  M.AutoInit();

  $(".dropdown-trigger").dropdown(({
    hover: true,
    coverTrigger: false
  }));


  // $('.owl-carousel').owlCarousel({
  //   margin: 10,
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     480: {
  //       items: 2,
  //     },
  //     768: {
  //       items: 3,
  //     }
  //   },
  // });

  // progress
  $('.progress .bar').each(function (i) {
    var width = $(this).data('progress');
    $(this).width(width);
    $(this).addClass($(this).data('color'))
  });
  // end progress

});