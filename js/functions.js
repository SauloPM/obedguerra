$(document).ready(function() {

    // WOW
    new WOW({
        mobile: false
    }).init(); 

    // Spinner
    hideSpinner();

    // Navbar
    fixNavbar();
    highlightNavbar();

    // Top Button
    showTopButton();
    
    // Slider
    // slider();

});

// Header Slider
// function slider() {
//     setTimeout(function() {
        
//         var ruta = $("#header").css('background-image')
//         var i = ruta[ruta.length - 7]

//         i = i == 4 ? 1 : ++i

//         $("#header").css({"background" : "url(img/bg/header" + i + ".jpg) no-repeat center", "background-size" : "cover"});

//         slider();
//     }, 5000);
// }

$(document).scroll(function() {
    fixNavbar();
    highlightNavbar();
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

// Current Item Highlighting
function highlightNavbar() {

    console.log($("#info").position().top);

    // Information
    if ($(this).scrollTop() < $("#info").position().top - 150) {
        $("nav .item").removeClass("active");
        $("nav .item:nth-child(1)").addClass("active");
    }

    // Career
    if ($(this).scrollTop() >= $("#career").position().top -150) {
        $("nav .item").removeClass("active");
        $("nav .item:nth-child(2)").addClass("active");
    }

    // Skills
    if ($(this).scrollTop() >= $("#skills").position().top - 150) {
        $("nav .item").removeClass("active");
        $("nav .item:nth-child(3)").addClass("active");
    }

    // Training
    if ($(this).scrollTop() >= $("#training").position().top - 150) {
        $("nav .item").removeClass("active");
        $("nav .item:nth-child(4)").addClass("active");
    }

    // Contact
    if ($(this).scrollTop() >= $("#contact").position().top - 300) {
        $("nav .item").removeClass("active");
        $("nav .item:nth-child(5)").addClass("active");
    }
}

// ────────────────── //
//     TOP BUTTON     //
// ────────────────── //

// Top button revealing
function showTopButton () {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150)
        $(".top-button").css("opacity", "1");
    else
        $(".top-button").css("opacity", "0");
}