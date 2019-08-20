$(".main-slider").slick({
  autoplay: true,
  autoplaySpeed: 1500,
  lazyLoad: 'ondemand', // ondemand progressive anticipated
  infinite: true
});

$(".sidebar-slider").slick({
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1
});