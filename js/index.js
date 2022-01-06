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
     width: "100%"
 });


 //scroll link
 $(".scroll-link").click(function () {
     $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top
     }, 1000);
 });


     $('.product-carousel').slick({
         dots: true,
         arrows: false,
         autoplay: true,
         autoplayTimeout: 5000,
         rtl: ($("html").attr("dir")) == "rtl" ? true : false,
         slidesToShow: 4,
         responsive: [{
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        },
        {
             breakpoint: 767,
             settings: {
                 slidesToShow: 2,
             }
         },
         {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        }]

     });

     $('.cities-slider').slick({
         dots: true,
         arrows: false,
         autoplay: true,
         autoplayTimeout: 5000,
         rtl: ($("html").attr("dir")) == "rtl" ? true : false,
         slidesToShow: 4,
         responsive: [{
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
            }
        },
        {
             breakpoint: 767,
             settings: {
                 slidesToShow: 2,
             }
         },
         {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        }]
     });


     $('.parteners-slider').slick({
         dots: false,
         arrows: false,
         autoplay: true,
         rtl: ($("html").attr("dir")) == "rtl" ? true : false,
         slidesToShow: 5,
         responsive: [{
                 breakpoint: 992,
                 settings: {
                     slidesToShow: 4,
                 }
             },
             {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
             {
                 breakpoint: 576,
                 settings: {
                     slidesToShow: 2,
                 }
             }
         ]

     });

   