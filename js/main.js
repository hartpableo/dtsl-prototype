$(document).ready(function() {
    // update year in copyright section
    updateYear();

    // slick slider
    activateSlick();
});

// declare variables
var date = $('.c-date');

// slick slider
function activateSlick() {
    $('.articles-slider').slick(
        {
            prevArrow : $('.slider-nav__button.prev-button'),
            nextArrow : $('.slider-nav__button.next-button'),
            mobileFirst: true,
            infinite: true,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 0,
                settings: {
                    slidesToShow: 1,
                    centerMode:true,
                },
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    centerMode:false,
                },
            }
        ],
    });

    $('.image-slider--wrapper').slick({
        autoplay: true,
        autoplaySpeed: 2650,
        slidesToScroll: 1,
        arrows: false,
        mobileFirst: true,
        pauseOnFocus: true,
        pauseOnHover: false,
        respondTo: 'slider',
        slidesToShow: 2,
        responsive: [
            {   
                breakpoint: 575,
                settings: {
                slidesToShow: 3,
            }},
            { breakpoint: 767,
                settings: {
                slidesToShow: 4,
            }},
        ],
    });
}

// update year in copyright section
function updateYear() {
    var currentYear = new Date().getFullYear();
    var startYear = 2022;

    if(currentYear != startYear) {
        date.html(startYear + ' - ' + currentYear);
    } else {
        date.html(currentYear);
    }
}