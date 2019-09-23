$(".main-slider").slick({
  autoplay: true,
  autoplaySpeed: 1500,
  lazyLoad: 'ondemand', // ondemand progressive anticipated
  infinite: true
});

$(".sidebar-slider").slick({
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 1500,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
});