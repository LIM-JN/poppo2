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
  const subMenu = document.querySelector('.m-menu');

  menuBtn.addEventListener('click',(e) => {
    menuBtn.classList.toggle('on');
    subMenu.classList.toggle('on');
  })

  const mainMenuA = document.querySelectorAll('.menu-a');
  const header = document.querySelector('header');
  for (let i=0;i<mainMenuA.length;i++) {
    mainMenuA[i].addEventListener('mouseenter',()=> {
      header.classList.add('on');
      mainMenuA[i].classList.add('on');
      for(let j=0;j<mainMenuA.length;j++) {
        if(i!==j) {
          mainMenuA[j].classList.remove('on');
        }
      }
    })
    header.addEventListener('mouseleave',()=> {
      header.classList.remove('on');
      for(let j=0;j<mainMenuA.length;j++) {
        mainMenuA[j].classList.remove('on');
      }
    })
  }
  const mobileMenu = document.querySelector('.m-menu');
  mobileMenu.addEventListener('mouseenter',() => {
    header.classList.remove('on');
    for(let j=0;j<mainMenuA.length;j++) {
      mainMenuA[j].classList.remove('on');
    }
  })
})

