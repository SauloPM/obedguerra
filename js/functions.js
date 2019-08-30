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

    // ───────────────────── //
    //     BURGER BUTTON     //
    // ───────────────────── //

    // Abrir
    $(document).on("click", "#burger-button.closed", function() {

        $(this).removeClass("closed");

        // Ocultamos la barra intermedia
        $("#burger-button .barra:nth-child(2)").css({"ms-transform": "scaleX(0)", "-webkit-transform": "scaleX(0)", "transform": "scaleX(0)"});

        // Desplazamos las dos barras de los extremos al centro
        setTimeout(() => {
            $("#burger-button .barra:nth-child(1)").css({"top": "8px", "opacity": "0"});
            $("#burger-button .barra:nth-child(3)").css({"top": "8px", "opacity": "0"});
        }, 250);

        // Rotamos estas barras para darle apariencia de botón de cierre
        setTimeout(() => {
            $("#burger-button .barra:nth-child(1)").css({"transform": "rotate( 45deg)", "opacity": "1"});
            $("#burger-button .barra:nth-child(3)").css({"transform": "rotate(-45deg)", "opacity": "1"});
        }, 500);

        // Mostramos el navbar
        setTimeout(() => { $("#navbar").css({"opacity": "1", "transform": "scaleX(1)"}) }, 750);

        // Mostramos los ítems del navbar
        setTimeout(() => { $("#navbar .item:nth-child(1)").css("opacity", "1") }, 1000);
        setTimeout(() => { $("#navbar .item:nth-child(2)").css("opacity", "1") }, 1250);
        setTimeout(() => { $("#navbar .item:nth-child(3)").css("opacity", "1") }, 1500);

        setTimeout(() => { $(this).addClass("opened") }, 1500);
    });

    // Cerrar
    $(document).on("click", "#burger-button.opened", function() {

        $(this).removeClass("opened");

        // Ocultamos los ítems del navbar
        $("#navbar .item:nth-child(1)").css("opacity", "");
        setTimeout(() => { $("#navbar .item:nth-child(2)").css("opacity", "") }, 250);
        setTimeout(() => { $("#navbar .item:nth-child(3)").css("opacity", "") }, 500);

        // Mostramos el navbar
        setTimeout(() => { $("#navbar").css({"opacity": "", "transform": "scaleX(0)"}) }, 750);

        // Rotamos las barras de los extremos para que vuelvan a tener una orientación horizontal
        setTimeout(() => {
            $("#burger-button .barra:nth-child(1)").css({"transform": "rotate(0)", "opacity": "0"});
            $("#burger-button .barra:nth-child(3)").css({"transform": "rotate(0)", "opacity": "0"});
        }, 1000);

        // Desplazamos estas barras del centro a los extremos
        setTimeout(() => {
            $("#burger-button .barra:nth-child(1)").css({"top": "", "opacity": "1"});
            $("#burger-button .barra:nth-child(3)").css({"top": "", "opacity": "1"});
        }, 1250);

        // Mostramos la barra intermedia
        setTimeout(() => { $("#burger-button .barra:nth-child(2)").css({"ms-transform": "scaleX(1)", "-webkit-transform": "scaleX(1)", "transform": "scaleX(1)"}) }, 1500);

        setTimeout(() => { $(this).addClass("closed") }, 1500);
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

});