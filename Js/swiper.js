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
  });
//  Swiper slide - sale Slide 
  var swiper = new Swiper(".sale_sec", {  //my class is slide-swp
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    slidesPerView:3,
    spaceBetween:30,
    autoplay: {
      Delay: 3000,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
  });
