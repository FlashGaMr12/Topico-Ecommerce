// Swiper slide side-bar 

var swiper = new Swiper(".slide-swp", {  //my class is slide-swp
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    autoplay: {
      Delay: 2000,
    },
    loop: true,
  });
//  Swiper slide - sale Slide 
  var swiper = new Swiper(".sale_sec", {  //my class is slide-swp
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    slidesPerView:5,
    spaceBetween:30,
    autoplay: {
      Delay: 3000,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    loop: true,
  });