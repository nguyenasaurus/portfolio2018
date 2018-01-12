console.log('Thanks for visiting!');


$('.main-carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true,
  pageDots: false
});

$('body').smoothScroll({
  delegateSelector: 'section.intro button'
});