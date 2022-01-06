// menu
$(".nav-icon").click(function () {
    $("nav,.nav-icon").toggleClass("active");
});

$(".close-nav").click(function () {
    $("nav,.nav-icon").removeClass("active");
});

$(function () {
    var $win = $(window); // or $box parent container
    var $box = $(".inner-nav,.nav-icon");
    $win.on("click.Bst", function (event) {
        if (
            $box.has(event.target).length === 0 && //checks if descendants of $box was clicked
            !$box.is(event.target) //checks if the $box itself was clicked
        ) {
            $("nav,.nav-icon").removeClass("active");
           
        }
    });
});

$("nav .menu-item-has-child").click(function () {
    $(this).find(".main-submenu").slideToggle();
    $(this).siblings().find(".main-submenu").slideUp();

});
//tooltip
tippy('.tooltip-link', {
    arrow: true,
    placement: 'bottom',

});

//aos
AOS.init({
    duration:200
});

