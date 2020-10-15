document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("load", function () {
        window.onscroll = function (e) {
            // sticky navbar on scroll script
            if (this.scrollY > 100) {
                $('.navbar').addClass("sticky");
            } else {
                $('.navbar').removeClass("sticky");
            }

        }
            // scroll-up button show/hide script
            if (this.scrollY > 500) {
                $('.scroll-up-btn').addClass("show");
            } else {
                $('.scroll-up-btn').removeClass("show");
            }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Backend developer", "Full-Stack developer", "Freelancer", "Growing a Startup"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Backend developer", "Full-Stack developer", "Freelancer", "Growing a Startup"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});