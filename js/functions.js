$(document).ready(function() {

    // WOW
    new WOW({
        mobile: false
    }).init(); 

    // Spinner
    hideSpinner();

    // Navbar
    fixNavbar();

    // Top Button
    showTopButton();

});

$(document).scroll(function() {
    fixNavbar();
    showTopButton();
});

// ─────────────── //
//     SPINNER     //
// ─────────────── //

// Spinner hidding
function hideSpinner () {
    $("#preloader .bar").fadeOut(500, function () {
        $("#preloader").delay(500).fadeOut(500);
        setTimeout(function () { $("body").css("overflow", "visible"); }, 500);
    });
}

// ────────────── //
//     NAVBAR     //
// ────────────── //

// Stycky Navigation Bar
function fixNavbar() {
    if ($(document).scrollTop() > 0) {
        $("nav").css("box-shadow", "0 0 5px black");
    }
    else {
        $("nav").css("box-shadow", "");
    }
}

// ────────────────── //
//     TOP BUTTON     //
// ────────────────── //

// Smooth Scrolling Links
$(".smooth-scrolling").click(function (event) {
    event.preventDefault();
    var target = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(target).offset().top }, 800, function () {
        window.location.hash = target;
    });
});

// Top button revealing
function showTopButton () {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150)
        $(".top-button").css("opacity", "1");
    else
        $(".top-button").css("opacity", "0");
}