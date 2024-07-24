document.addEventListener('DOMContentLoaded',() => {

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });

      const lastSwiper = new Swiper('.last-swiper', {
        // Optional parameters
        loop: false,
        // If we need pagination
        pagination: {
          el: '.pagination',
          clickable: true,
        },
        breakpoints: {
          850: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }

      });

  const menuBtn = document.querySelector('.menu-btn');
  const subMenu = document.querySelector('.sub-menu');

  menuBtn.addEventListener('click',(e) => {
    menuBtn.classList.toggle('on');
    subMenu.classList.toggle('on');
  })
})

