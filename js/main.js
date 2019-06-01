
$(document).ready(function () {
    
    // 
     
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        var navbar = document.getElementById("navbar");
        if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
            navbar.style.padding = "5px 0px";
            navbar.style.background = "black";
            navbar.style.borderBottom = "2px solid rgba(254, 164, 17, 0.7)";
            navbar.classList.remove('p-3');
            //document.getElementById("logo").style.fontSize = "25px";

        } else {
            navbar.style.padding = "20px 0px";
            navbar.style.background = "rgba(0,0,0, 0.3)";
            navbar.style.borderBottom = "none";
            navbar.classList.add('p-3');
            //document.getElementById("logo").style.fontSize = "35px";

        }
    }
    

    $(".nav-link, .arrow-down").click(function (e) {
        e.preventDefault();

        var position = $($(this).attr("href")).offset().top;

        $("body, html").animate({
            scrollTop: position - 50
        }, 700 /* speed */);
    });
});


