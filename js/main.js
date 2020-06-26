$(function(){
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 10000,
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-prev.svg" alt="prev arrow"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-next.svg" alt="next arrow"></button>',
        responsive: [{
            breakpoint: 700,
            settings: {
                arrows: false,
            }
        }]    
    });
});