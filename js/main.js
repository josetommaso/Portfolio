
$(document).ready(function () {
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        var navbar = document.getElementById("navbar");
        if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
            navbar.style.padding = "5px 0px";
            navbar.style.background = "black";
            navbar.classList.remove('py-3');
            //document.getElementById("logo").style.fontSize = "25px";

        } else {
            navbar.style.padding = "20px 0px";
            navbar.style.background = "none";
            navbar.classList.add('py-3');
            //document.getElementById("logo").style.fontSize = "35px";

        }
    }

    $(".nav-link").click(function (e) {
        e.preventDefault();

        var position = $($(this).attr("href")).offset().top;

        $("body, html").animate({
            scrollTop: position
        }, 700 /* speed */);
    });


    // $('a[href="#modal"]').click(function (event) {
    //     $(this).modal({
    //         fadeDuration: 1000,
    //     });
    // });



});


