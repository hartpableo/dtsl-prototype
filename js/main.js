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
                // breakpoint: 992,
                // settings: {
                //     slidesToShow: 2,
                //     centerMode:false,
                // },
            }
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