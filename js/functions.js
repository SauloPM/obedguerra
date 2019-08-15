$(window).on("load", function() {

    // WOW
    new WOW({
        mobile: false
    }).init();

    // Smooth Scrolling Links
    $(".smooth-scrolling").click(function (event) {
        event.preventDefault();
        var target = $(this).attr("href");
        $("html, body").stop().animate({ scrollTop: $(target).offset().top }, 1500, 'easeInOutExpo');
    });

    // ─────────────── //
    //     SPINNER     //
    // ─────────────── //

    hideSpinner();

    // Spinner hidding
    function hideSpinner () {
        $("#preloader .logo").fadeOut(500, function () {
            $("#preloader").delay(500).fadeOut(500);
            setTimeout(function () { $("body").css("overflow", "visible"); }, 500);
        });
    }

    // ────────────────── //
    //     TOP BUTTON     //
    // ────────────────── //

    showTopButton();

    $(document).scroll(function() {
        showTopButton();
    });

    // Top button revealing
    function showTopButton () {
        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150)
            $(".top-button").css("opacity", "1");
        else
            $(".top-button").css("opacity", "0");
    }

    // ────────────── //
    //     NAVBAR     //
    // ────────────── //

    $(document).on("click", "#navbar .abrir", function() {
        $("#navbar .contenido").css("left", "0");
    });

    $(document).on("click", "#navbar .cerrar", function() {
        $("#navbar .contenido").css("left", "-300px");
    });

    // ───────────────────── //
    //     BURGER BUTTON     //
    // ───────────────────── //

    $(document).on("click", "#burger-button.closed", function() {

        $(this).removeClass("closed").addClass("opened");

        $("#burger-button .barra:nth-child(2)").css("transform", "scaleX(0)");

        setTimeout(() => {
            $("#burger-button .barra:nth-child(1)").css({"top": "8px", "opacity": "0"});
            $("#burger-button .barra:nth-child(3)").css({"top": "8px", "opacity": "0"});

            setTimeout(() => {
                $("#burger-button .barra:nth-child(1)").css({"transform": "rotate(45deg)", "opacity": "1"});
                $("#burger-button .barra:nth-child(3)").css({"transform": "rotate(-45deg)", "opacity": "1"});
            }, 500);
        }, 500);
    });

    $(document).on("click", "#burger-button.opened", function() {

        $(this).removeClass("opened").addClass("closed");

        $("#burger-button .barra:nth-child(1)").css({"transform": "rotate(0)", "opacity": "0"});
        $("#burger-button .barra:nth-child(3)").css({"transform": "rotate(0)", "opacity": "0"});

        setTimeout(() => {
            $("#burger-button .barra:nth-child(1)").css({"top": "", "opacity": "1"});
            $("#burger-button .barra:nth-child(3)").css({"top": "", "opacity": "1"});

            setTimeout(() => {
                $("#burger-button .barra:nth-child(2)").css("transform", "scaleX(1)");
            }, 500);
        }, 500);

    });

    // ────────────── //
    //     FILTRO     //
    // ────────────── //

    // Actualizar filtro
    $(document).on("click", "#filtro .opcion", function() {
        
        var opcionSeleccionada = $(this).text();

        // Resaltamos la opción seleccionada
        $("#filtro .opcion.active").removeClass("active");
        $(this).addClass("active");

        if (opcionSeleccionada == "Todo") {
            $("#proyectos .proyecto").css({"display": "block"});
            return;
        }

        $("#proyectos .proyecto").each(function() {
            
            var categoria = $(this).find(".categoria").text();
            
            // Mostramos los proyectos cuya categoría coincida con la opción seleccionada
            if (~categoria.indexOf(opcionSeleccionada))
                $(this).css("display", "block");

            // Ocultamos los proyectos cuya categoría no coincida con la opción seleccionada
            else
                $(this).css("display", "none");
        });
    });

    // ───────────────── //
    //     PROYECTOS     //
    // ───────────────── //

    $(document).on("mouseover", "#proyectos .proyecto", function() {
        
        $(this).find(".overlay .titulo").css({"padding-top": "0", "opacity": "1"});

        setTimeout(() => {
            $(this).find(".overlay .categoria").css({"top": "0", "opacity": "1"});
        }, 50);
        
    });

    $(document).on("mouseleave", "#proyectos .proyecto", function() {
        
        $(this).find(".overlay .titulo").css("padding-top", "");
        $(this).find(".overlay .categoria").css({"top": "", "opacity": ""});

    });
});