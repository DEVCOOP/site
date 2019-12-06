$(document).ready(function ()
{




    /**
     * Parallax effetc
     */

    function parallax()
    {
        var slow = $('.slow');

        slow.removeClass('bounceInDown');

        slow.css
                ({
                    'transform': "translateY(" + ($(window).scrollTop() / 1.888) + "px)",
                    'opacity': 1 - ($(window).scrollTop() / 350)
                });
    }

var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
    if(!isMobile){
        isMobile=/iPhone|iPad|iPod/i.test(navigator.platform);
    }

    // Scroll events
    $(window).scroll(function () {
        parallax();
        var scrolledY = $(window).scrollTop();
        if (scrolledY <= $('.hero').outerHeight(true)) {
            $("nav").removeClass("white");
//            if (!isMobile){
//                window.requestAnimationFrame(function () {
//                    $('.hero-img').css('transform', 'translateY(' + scrolledY + 'px)');
//                });
//            }
        } else {
            $("nav").addClass("white");
        }
    });




});