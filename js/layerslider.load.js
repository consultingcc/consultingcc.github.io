$(document).ready(function () {
        "use strict";

        if ($('#slider').length && $.fn.layerSlider) {
                $('#slider').layerSlider({
                        responsive: true,
                        fitScreenWidth: false,
                        responsiveUnder: 1280,
                        layersContainer: 1280,
                        skin: 'outline',
                        hoverPrevNext: true,
                        skinsPath: './vendor/layerslider/skins/',
                        autoStart: true,
                        autoPlayVideos: false,
                        showCircleTimer: false
                });
        }

                
 });