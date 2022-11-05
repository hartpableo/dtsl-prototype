$(document).ready(function() {
    // update year in copyright section
    updateYear();
});

// declare variables
var date = $('.c-date');

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