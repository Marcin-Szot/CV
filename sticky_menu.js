$(document).ready(function() {
    var margin = ($("#doc").width() - $(".content").width())/2;
    var menuLeftMargin = margin + $(".content").width() - $(".menu_icon").width()*4;
    $("#navigation").css({
        "margin-left" : menuLeftMargin.toString() + "px"
    });

    $("#name").css({
        "margin-left" : margin.toString() + "px"
    });

    $("#sign").css({
        "margin-left" : ($("#doc").width()/2 + 250).toString() + "px"
    });

    $("#what_i_know_button").bind('click', function() {
        $("html, body").animate({
            scrollTop : $("#education").offset().top
        }, 1000);
    });

    $("#what_i_can_button").bind('click', function() {
        $("html, body").animate({
            scrollTop : $("#experience").offset().top
        }, 1000);
    });

    $("#what_interests_me_button").bind('click', function() {
        $("html, body").animate({
            scrollTop : $("#hobby").offset().top
        }, 1000);
    });

    var hiddenPartOfMenu = 27;
    var menuOffset = $("#navigation").offset().top + hiddenPartOfMenu;
    var scrollTop = 0;
    $(window).scroll(function() {
        scrollTop = $(window).scrollTop();
        if(scrollTop >= menuOffset) {
            $("#navigation").addClass("fixed");
        } else {
            $("#navigation").removeClass("fixed");
        }
    });
});
