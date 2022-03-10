$(".owl-carousel-home").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
  },
});
$(".owl-carousel-product").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoWidth: true,
  items: 3,
  center: true,
  responsive: {
    0: {
      items: 3,
    },
  },
});
$(".owl-carousel-review").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
  },
});
$(".owl-carousel-sposers").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplayHoverPause: true,
  autoplay: true,
  autoplayTimeout: 3000,
  responsive: {
    765: {
      items: 4,
    },
    576: {
      items: 3,
    },
  },
});
