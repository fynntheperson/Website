(function ($){


    $.fn.boxify =function(options){

        var picArr = [url("./assets/wallpaper.gif"),url("./assets/original.gif"), url("./assets/stars.gif"), url("./assets/cities.gif"), url("./assets/flowers.gif"), url("./assets/forest.gif"), url("./assets/gays.gif")]
        var randomColor = picArr[Math.floor(Math.random() * picArr.length)];

        var settings = $.extend({
            background: randomColor,
            smoothness: null,
            textColor: null
        }, options);

        return this.css({

background: settings.background,
color: settings.textColor,
transition: settings.smoothness


        })

    }
}(jQuery));