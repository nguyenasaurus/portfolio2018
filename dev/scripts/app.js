console.log('Thanks for visiting!');


$('.main-carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true,
  pageDots: false
});

$('a').smoothScroll({
  easing: 'swing',
  speed: 800, 
  autoCoefficient: 1,
});

