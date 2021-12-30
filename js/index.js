 $('.main-slider-content').slick({
     dots: true,
     arrows: false,
     rtl: ($("html").attr("dir")) == "rtl" ? true : false,
     autoplay: true,
     autoplayTimeout: 8000
 });

 $('.select-input').select2({
    theme: 'bootstrap4',
    language: $('html').attr('dir') == 'rtl' ? 'ar' : 'en',
    width:"100%"
});


//scroll link
$(".scroll-link").click(function () {
    $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top 
    }, 1000);
});

 $(document).ready(function () {

     $('.services-slider').slick({
         dots: true,
         arrows: false,
         autoplay: true,
         autoplayTimeout: 5000,
         lazyLoad: 'progressive',
         rtl: ($("html").attr("dir")) == "rtl" ? true : false,
         slidesToShow: 2,
         slidesToScroll: 2,
         responsive: [{
             breakpoint: 767,
             settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1
             }
         }]

     });

     $('.works-slider').slick({
         dots: true,
         lazyLoad: 'progressive',
         arrows: false,
         autoplay: true,
         autoplayTimeout: 5000,
         infinite: false,
         rtl: ($("html").attr("dir")) == "rtl" ? true : false,

     });

     $('.clients-slider').slick({
         dots: true,
         arrows: true,
         autoplay: true,
         autoplayTimeout: 5000,
         infinite: false,
         lazyLoad: 'progressive',
         rtl: ($("html").attr("dir")) == "rtl" ? true : false,
         prevArrow: '<span class="slick-prev"></span>',
         nextArrow: '<span class="slick-next"></span>',
         appendArrows: '.clients-sec .slider-nav',
         appendDots: '.clients-sec .slider-nav'

     });
     $('.parteners-slider').slick({
         lazyLoad: 'progressive',
         dots: true,
         arrows: false,
         autoplay: true,
         rtl: ($("html").attr("dir")) == "rtl" ? true : false,
         slidesToShow: 4,
         slidesToScroll: 4,
         responsive: [{
                 breakpoint: 992,
                 settings: {
                     slidesToShow: 3,
                     slidesToScroll: 3
                 }
             },
             {
                 breakpoint: 576,
                 settings: {
                     slidesToShow: 2,
                     slidesToScroll: 2
                 }
             }
         ]

     });

     $('.works-sec').lightGallery({
         selector: '.main-works-img',
         thumbnail: false,
         animateThumb: false,
         showThumbByDefault: false,
         hideControlOnEnd: true,
         loop: false,
         slideEndAnimatoin: false,
         download: false,
         flipVertical: false,
         flipHorizontal: false,
         rotate: false,
         actualSize: false,
         share: false,
     });
 });

 // Wrap every letter in a span
 var textWrapper = document.querySelector('.title');
 textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span>$&</span>");

 anime.timeline({
         loop: true
     })
     .add({
         targets: '.title span',
         translateX: [40, 0],
         translateZ: 0,
         opacity: [0, 1],
         easing: "easeOutExpo",
         duration: 2000,
         color: '#FF0000',
         delay: (el, i) => 1000 + 50 * i
     }).add({
         targets: '.title span',
         translateX: [0, -30],
         opacity: [1, 0],
         easing: "easeInExpo",
         duration: 2100,
         color: '#141414',
         delay: (el, i) => 500 + 50 * i
     });