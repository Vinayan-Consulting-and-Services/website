/*FadeIn Text Effect*/
let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        let h1 = entry.target.querySelector('h1');
        if (entry.isIntersecting) {
            h1.classList.add('fadeIn');
        } else {
            h1.classList.remove('fadeIn');
        }
    });
}, { threshold: [0.5] });

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});





// navbar toggle script 
const toggleBtn = document.querySelector(".toggle_btn")
const toggleBtnIcon = document.querySelector(".toggle_btn i")
const dropDownMenu = document.querySelector(".dropdown_menu")

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle("open")
    const isOpen = dropDownMenu.classList.contains("open")

    toggleBtnIcon.classList = isOpen
        ? "fa-solid fa-xmark" :
        "fa-solid fa-bars";
}



// infinite scroll for customers

// (function ($) {
//     $(function () {
  
  
//       $('.js-ag-carousel').slick({
//         dots: false,
//         arrows: false,
//         infinite: true,
//         slidesToShow: 5,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 0,
//         speed: 8000,
//         cssEase: 'linear',
//         responsive: [
//           {
//             breakpoint: 1320,
//             settings: {
//               slidesToShow: 4,
//               speed: 12000,
//               slidesToScroll: 4
//             }
//           },
//           {
//             breakpoint: 1080,
//             settings: {
//               slidesToShow: 3,
//               slidesToScroll: 3
//             }
//           },
//           {
//             breakpoint: 680,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 2
//             }
//           },
//           {
//             breakpoint: 480,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1
//           }
//         }]
//       });
  
  
//     });
//   })(jQuery);















