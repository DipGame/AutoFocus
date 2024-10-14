document.addEventListener("DOMContentLoaded", function () {

    var sertifSwiper = new Swiper(".sertifSwiper", {
        slidesPerView: "auto",
        spaceBetween: 20,
        navigation: {
            nextEl: ".sertifSwiper-button-next",
            prevEl: ".sertifSwiper-button-prev",
        },
        breakpoints: {
            721: {
                spaceBetween: 70
            },
        }
    });
    console.log('addSwiper.js finish work');
});