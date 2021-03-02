$(window).scroll(function () {
    let topOffset = $(window).scrollTop();
    if (topOffset == 0) {
        $(".navbarPos").css("top", "50")
    }
    else {
        $(".navbarPos").css("top", "0")
    }
})

var owl = $('.headerCarousel');
owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    center: true,

});

owl.on('changed.owl.carousel', function (event) {
    var item = event.item.index - 2;     // Position of the current item
    $('.header-content h1').removeClass('animated bounceIn');
    $('.owl-item').not('.cloned').eq(item).find('.header-content h1').addClass('animated bounceIn');
});
owl.on('changed.owl.carousel', function (event) {
    var item = event.item.index - 2;     // Position of the current item
    $('.header-content h5').removeClass('animated bounceInRight');
    $('.owl-item').not('.cloned').eq(item).find('.header-content h5').addClass('animated bounceInRight');
});
owl.on('changed.owl.carousel', function (event) {
    var item = event.item.index - 2;     // Position of the current item
    $('.header-content button').removeClass('animated bounceInUp');
    $('.owl-item').not('.cloned').eq(item).find('.header-content button').addClass('animated bounceInUp');
});

new WOW().init();

$('#counter').bind('inview', function (event, visible, visiblePartX, visiblePartY) {
    if (visible) {
        $(this).find('.startCount').each(function () {
            var $this = $(this);
            $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                duration: 2000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });
        $(this).unbind('inview');
    }
});

var owlTest = $('.TestCarousel');
owlTest.owlCarousel({
    items: 2,
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: ["<i class='fas fa-long-arrow-alt-left'></i>", "<i class='fas fa-long-arrow-alt-right'></i>"],
    responsive : {
        // breakpoint from 0 up
        0 : {
            items : 1,
        },
        // breakpoint from 480 up
        480 : {
            items : 1,
        },
        // breakpoint from 768 up
        768 : {
            items : 1,
        },
        992 : {
            items : 2,
        }
    }
});

$(window).scroll(function () {
    let topOffset = $(window).scrollTop();
    if (topOffset > 400) {
        $(".toTop").css("display", "flex")
        $(".toTop").fadeIn(500);
    }
    else {
        $(".toTop").fadeOut(500);
    }
})

$(".toTop").click(function () {
    $("body, html").animate({ scrollTop: 0 }, 1000)
})

$(document).ready(function () {
    $("#loadingPage").fadeOut(1000, function () {
        $("body").css("overflow", "visible");
    });
})

let bgColors = ["#0c65ed", "#0fb8cd", "#4f6df5", "#1abc9c", "#ff784b", "#6cc000", "#570be1", "#fc3d6a"];
for (var i = 0; i < bgColors.length; i++) {
    $(".colorOptions li").eq(i).css("background-color", bgColors[i]);
}

$(".colorBox i").click(function () {
    let colorOptionBar = $(".colorOptions").outerWidth();
    if ($(".colorBox").css("left") == "0px") {
        $(".colorBox").animate({ "left": -colorOptionBar }, 1000);
    }
    else {
        $(".colorBox").animate({ "left": "0px" }, 1000);
    }
})

$(".colorOptions li").click(function (e) {
    let currentColor = $(this).css("background-color");
    let imgBgColor = this.style.backgroundColor;

    switch (imgBgColor) {
        case "rgb(12, 101, 237)":
            $(".navBarLogo").css({ "background-image": "url(images/logo-1.png)", "background-size": "contain" });
            break;
        case "rgb(15, 184, 205)":
            $(".navBarLogo").css({ "background-image": "url(images/logo-2.png)", "background-size": "contain" });
            break;
        case "rgb(79, 109, 245)":
            $(".navBarLogo").css({ "background-image": "url(images/logo-3.png)", "background-size": "contain" });
            break;
        case "rgb(26, 188, 156)":
            $(".navBarLogo").css({ "background-image": "url(images/logo-4.png)", "background-size": "contain" });
            break;
        case "rgb(255, 120, 75)":
            $(".navBarLogo").css({ "background-image": "url(images/logo-5.png)", "background-size": "contain" });
            break;
        case "rgb(108, 192, 0)":
            $(".navBarLogo").css({ "background-image": "url(images/logo-6.png)", "background-size": "contain" });
            break;
        case "rgb(87, 11, 225)":
            $(".navBarLogo").css({ "background-image": "url(images/logo-7.png)", "background-size": "contain" });
            break;
        case "rgb(252, 61, 106)":
            $(".navBarLogo").css({ "background-image": "url(images/logo-8.png)", "background-size": "contain" });
            break;
    }

    $(".changeBgColor").css("background-color", currentColor);

    $(".changeColor").css("color", currentColor);

    $(".hoverBtn").hover(function () {
        $(this).css({ "background-color": currentColor, "border": `1px solid ${currentColor}` });
    }, function () {
        $(this).css({ "background-color": "transparent", "border": "1px solid white" });
    });

    $(".aboutContentDetails").hover(function () {
        $(this).find(".aboutContentDetailsTitle, .aboutContentIcon").css("color", currentColor);

    }, function () {
        $(this).find(".aboutContentDetailsTitle, .aboutContentIcon").css("color", "black");
    });

    $("#works .nav-link").append(`<style> #works .active{color:${currentColor} !important} </style>`);

    $("#works .nav-link").hover(function () {
        $(this).css("color", currentColor);
    }, function () {
        $(this).css("color", "black");
    });

    $("#price .perMonthBrdr, #price .perYearBrdr").css("border", `1px solid ${currentColor}`);

    $("#price .nav-link").append(`<style> #price .nav-pills .nav-link.active{background-color:${currentColor} !important</style>`);

    $("#price .nav-pills .nav-link.active span").css("color", "white !important");

    $("#price .businessBtn").css({ "border": `1px solid ${currentColor}`, "color": currentColor });

    $("#price .businessBtn").hover(function () {
        $(this).css({ "background-color": currentColor, "border": `1px solid ${currentColor}`, "color": "white" });
    }, function () {
        $(this).css({ "background-color": "transparent", "border": `1px solid ${currentColor}`, "color": currentColor });
    });

    $("#testimonial .owl-carousel .owl-nav button.owl-prev, #testimonial .owl-nav button.owl-next").css("background-color", currentColor);

    $(".blogHover h5").hover(function () {
        $(this).css({ "color": currentColor, "cursor": "pointer" });
    }, function () {
        $(this).css({ "color": "black" });
    });

    $(".blogHover").hover(function () {
        $(this).find(".blogIcons").css("background-color", currentColor);

    }, function () {
        $(this).find(".blogIcons").css("background-color", "#1a1a1a");
    });

    $(".topFooter .btn-light").hover(function () {
        $(this).css({ "background-color": currentColor, "border": `1px solid ${currentColor}`, "color": "white" });
    }, function () {
        $(this).css({ "background-color": "white", "border": `1px solid transparent`, "color": "black" });
    });

})






