// menu
$(".menu-icon").click(function () {
    $("nav,.menu-icon").toggleClass("active");

});

$(function () {
    var $win = $(window); // or $box parent container
    var $box = $("nav,.menu-icon");
    $win.on("click.Bst", function (event) {
        if (
            $box.has(event.target).length === 0 && //checks if descendants of $box was clicked
            !$box.is(event.target) //checks if the $box itself was clicked
        ) {
            $("nav,.menu-icon").removeClass("active");
           
        }
    });
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

