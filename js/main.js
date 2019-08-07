  
$(window).on('load', function(){
    $('.loader').fadeOut();
});



$(document).ready(function () {
    
    // Navbar Shrinks when scrolling
    
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        var navbar = document.getElementById("navbar");
        if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
            navbar.style.padding = "5px 0px";
            navbar.style.background = "rgba(34, 38, 41, .8)";
            navbar.style.boxShadow = "0 4px 2px -2px #86C232";
            navbar.classList.remove('p-3');
            navbar.classList.add('p-2');

        } else {
            navbar.style.padding = "20px 0px";
            navbar.style.background = "rgba(34, 38, 41, .5)";
            navbar.style.boxShadow = "none";
            navbar.classList.add('p-3');
            navbar.classList.remove('p-2');

        }
    }
    

    $(".nav-link, .arrow-down").click(function (e) {
        e.preventDefault();

        var position = $($(this).attr("href")).offset().top;

        $("body, html").animate({
            scrollTop: position - 50
        }, 700 /* speed */);
    });
    
    VANTA.NET({
        el: "#vanta-bg",
        color: 0x5c8e00,
        backgroundColor: 0x202020
      })
    
});




