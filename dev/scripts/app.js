console.log('hey');

  var stickyHeaderTop = $('#stickytypeheader').offset().top;

  $(window).scroll(function () {
    if ($(window).scrollTop() > stickyHeaderTop) {
      $('#stickytypeheader').css({ position: 'fixed', top: '35px' , left: '10%'});
      $('#sticky').css('display', 'block');
    } else {
      $('#stickytypeheader').css({ position: 'static', top: '0px' });
      $('#sticky').css('display', 'none');
    }
  });

$('.main-carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true
});