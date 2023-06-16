$(document).ready(function() {

        /* CAUSE */

        if (jQuery("#map_traffico").length) {
            mapboxgl.accessToken = 'pk.eyJ1IjoicGFvOTgiLCJhIjoiY2xodGI2aWExMDQ0dTNwcGJ5Nmh0enZnMyJ9.d5IdBb5uAgTbclHcqtIsbw';
            const maptraffico = new mapboxgl.Map({
                container: 'map_traffico',
                style: 'mapbox://styles/pao98/clilu8qrc004r01o302qnf4bq/draft',
                center: [25,35],
                zoom: 1.5,
            });
        }

        if (jQuery("#map_suez").length) {
            mapboxgl.accessToken = 'pk.eyJ1IjoicGFvOTgiLCJhIjoiY2xodGI2aWExMDQ0dTNwcGJ5Nmh0enZnMyJ9.d5IdBb5uAgTbclHcqtIsbw';
            const mapsuez = new mapboxgl.Map({
                container: 'map_suez',
                style: 'mapbox://styles/pao98/clhtbasth01y301r0f1dr419n/draft',
                center: [31,32],
                zoom: 1.5,
            });
        }

        if (jQuery("#map_temperature_mediterraneo").length) {
            mapboxgl.accessToken = 'pk.eyJ1IjoicGFvOTgiLCJhIjoiY2xodGI2aWExMDQ0dTNwcGJ5Nmh0enZnMyJ9.d5IdBb5uAgTbclHcqtIsbw';
            var maptemperaturemediterraneo = new mapboxgl.Map({
                container: 'map_temperature_mediterraneo',
                style: 'mapbox://styles/pao98/clilti6jl002o01pg8u72ff5r/draft',
                center: [-48.77802186598887,-10.821671070440647],
                zoom: 1.5,
            });
        }



        jQuery( ".map_pos_default" ).on( "click", function() {
            maptemperaturemediterraneo.flyTo({
                center: [-48.77802186598887,-10.821671070440647],
                essential: true,
                zoom: 1.5,
            });
        });
        
        jQuery( ".map_pos_5" ).on( "click", function() {
            maptemperaturemediterraneo.flyTo({
                center: [8.5,44],
                essential: true,
                zoom: 6.5
            });
        });

        jQuery( ".map_pos_6" ).on( "click", function() {
            maptemperaturemediterraneo.flyTo({
                center: [13,40],
                essential: true,
                zoom: 6
            });
        });

        jQuery( ".map_pos_7" ).on( "click", function() {
            maptemperaturemediterraneo.flyTo({
                center: [7,40],
                essential: true,
                zoom: 6.5
            });
        });

        jQuery( ".map_pos_8" ).on( "click", function() {
            maptemperaturemediterraneo.flyTo({
                center: [13,36],
                essential: true,
                zoom: 6
            });
        });

        jQuery( ".map_pos_9" ).on( "click", function() {
            maptemperaturemediterraneo.flyTo({
                center: [18.5,39.5],
                essential: true,
                zoom: 6.5
            });
        });

        jQuery( ".map_pos_10" ).on( "click", function() {
            maptemperaturemediterraneo.flyTo({
                center: [17,42],
                essential: true,
                zoom: 5.5
            });
        });



        /* SPECIE */

        if (jQuery("#map_flauto").length) {
            mapboxgl.accessToken = 'pk.eyJ1IjoicGFvOTgiLCJhIjoiY2xodGI2aWExMDQ0dTNwcGJ5Nmh0enZnMyJ9.d5IdBb5uAgTbclHcqtIsbw';
            const map = new mapboxgl.Map({
                container: 'map_flauto',
                style: 'mapbox://styles/pao98/clivga6os00gz01qya5781cc1/draft',
                center: [35,20.821671070440647],
                zoom: 1.5,
                scrollZoom: false,
                boxZoom: false,
                doubleClickZoom: false
            });
        }

                if (jQuery("#map_granchio").length) {
            mapboxgl.accessToken = 'pk.eyJ1IjoicGFvOTgiLCJhIjoiY2xodGI2aWExMDQ0dTNwcGJ5Nmh0enZnMyJ9.d5IdBb5uAgTbclHcqtIsbw';
            const map = new mapboxgl.Map({
                container: 'map_granchio',
                style: 'mapbox://styles/pao98/clit98rha00w401pfb0hsdio7/draft',
                center: [35,20.821671070440647],
                zoom: 1.5,
                scrollZoom: false,
                boxZoom: false,
                doubleClickZoom: false
            });
        }

        if (jQuery("#map_coniglio_bruno").length) {
            mapboxgl.accessToken = 'pk.eyJ1IjoicGFvOTgiLCJhIjoiY2xodGI2aWExMDQ0dTNwcGJ5Nmh0enZnMyJ9.d5IdBb5uAgTbclHcqtIsbw';
            const map = new mapboxgl.Map({
                container: 'map_coniglio_bruno',
                style: 'mapbox://styles/pao98/cliw4ezop004a01pb28248ldw/draft',
                center: [35,20.821671070440647],
                zoom: 1.5,
                scrollZoom: false,
                boxZoom: false,
                doubleClickZoom: false
                
            });
            
        }

        if (jQuery("#map_pesce_palla").length) {
            mapboxgl.accessToken = 'pk.eyJ1IjoicGFvOTgiLCJhIjoiY2xodGI2aWExMDQ0dTNwcGJ5Nmh0enZnMyJ9.d5IdBb5uAgTbclHcqtIsbw';
            const map = new mapboxgl.Map({
                container: 'map_pesce_palla',
                style: 'mapbox://styles/pao98/clivg6mnb012f01pg5lv5gd53/draft',
                center: [35,20.821671070440647],
                zoom: 1.5,
                scrollZoom: false,
                boxZoom: false,
                doubleClickZoom: false
            });
        }

        if (jQuery("#map_pesce_pappagallo").length) {
            mapboxgl.accessToken = 'pk.eyJ1IjoicGFvOTgiLCJhIjoiY2xodGI2aWExMDQ0dTNwcGJ5Nmh0enZnMyJ9.d5IdBb5uAgTbclHcqtIsbw';
            const map = new mapboxgl.Map({
                container: 'map_pesce_pappagallo',
                style: 'mapbox://styles/pao98/clivgcfi000i101p747re0ca2/draft',
                center: [35,20.821671070440647],
                zoom: 1.5,
                scrollZoom: false,
                boxZoom: false,
                doubleClickZoom: false
            });
        }

        if (jQuery("#map_corridore_atlantico").length) {
            mapboxgl.accessToken = 'pk.eyJ1IjoicGFvOTgiLCJhIjoiY2xodGI2aWExMDQ0dTNwcGJ5Nmh0enZnMyJ9.d5IdBb5uAgTbclHcqtIsbw';
            const map = new mapboxgl.Map({
                container: 'map_corridore_atlantico',
                style: 'mapbox://styles/pao98/clivgglqo011v01pf6jye54c1/draft',
                center: [35,20.821671070440647],
                zoom: 1.5,
                scrollZoom: false,
                boxZoom: false,
                doubleClickZoom: false
            });
        }

        if (jQuery("#map_caulerpa").length) {
            mapboxgl.accessToken = 'pk.eyJ1IjoicGFvOTgiLCJhIjoiY2xodGI2aWExMDQ0dTNwcGJ5Nmh0enZnMyJ9.d5IdBb5uAgTbclHcqtIsbw';
            const map = new mapboxgl.Map({
                container: 'map_caulerpa',
                style: 'mapbox://styles/pao98/clivgi9b900xd01qvc0flgiug/draft',
                center: [35,20.821671070440647],
                zoom: 1.5,
                scrollZoom: false,
                boxZoom: false,
                doubleClickZoom: false
            });
        }

        if (jQuery("#map_coniglio_striato").length) {
            mapboxgl.accessToken = 'pk.eyJ1IjoicGFvOTgiLCJhIjoiY2xodGI2aWExMDQ0dTNwcGJ5Nmh0enZnMyJ9.d5IdBb5uAgTbclHcqtIsbw';
            const map = new mapboxgl.Map({
                container: 'map_coniglio_striato',
                style: 'mapbox://styles/pao98/clivgjee2001101pb20llel7l/draft',
                center: [35,20.821671070440647],
                zoom: 1.5,
                scrollZoom: false,
                boxZoom: false,
                doubleClickZoom: false
            });
        }

       

    if (jQuery(".scrolly").length) {
        var scrolly = document.querySelector(".scrolly");
        var article = scrolly.querySelector(".scrollable-column");
        var step = article.querySelectorAll(".step");

        // initialize the scrollama
        var scroller = scrollama();

        // scrollama event handlers
        function handleStepEnter(response) {
            // response = { element, direction, index }
            // console.log(response);
            // add to color to current step
            response.element.classList.add("is-active");
            var step = response.element.getAttribute('data-step');
            if (step == 1) {
                jQuery(".mappa-home").removeClass("visible");
                jQuery(".mappa-home[data-map=1]").addClass("visible");
            }
            if (step == 2) {
                jQuery(".mappa-home").removeClass("visible");
                jQuery(".mappa-home[data-map=2]").addClass("visible");
            }
            if (step == 3) {
                console.log("test");
                jQuery(".map_pos_default").trigger("click");
                jQuery(".mappa-home").removeClass("visible");
                jQuery(".mappa-home[data-map=3]").addClass("visible");
            }
            if (step == 5) {
                jQuery(".map_pos_5").trigger("click");
            }
            if (step == 6) {
                jQuery(".map_pos_6").trigger("click");
            }
            if (step == 7) {
                jQuery(".map_pos_7").trigger("click");
            }
            if (step == 8) {
                jQuery(".map_pos_8").trigger("click");
            }
            if (step == 9) {
                jQuery(".map_pos_9").trigger("click");
            }
            if (step == 10) {
                jQuery(".map_pos_10").trigger("click");
            }
            
        }

        function handleStepExit(response) {
            // response = { element, direction, index }
            // console.log(response.element);
            // remove color from current step
            response.element.classList.remove("is-active");
        }

        function init() {
            // set random padding for different step heights (not required)
            step.forEach(function (step) {
                // var v = 100 + Math.floor((Math.random() * window.innerHeight) / 4);
            // step.style.padding = v + "px 0px";
            });

            // 1. setup the scroller with the bare-bones options
            // 		this will also initialize trigger observations
            // 2. bind scrollama event handlers (this can be chained like below)
            scroller
                .setup({
                    step: ".scrolly .scrollable-column .step",
                    debug: false,
                    offset: 0.5,
                })
                .onStepEnter(handleStepEnter)
                .onStepExit(handleStepExit);

        }

        // kick things off
        init();
    }
});



