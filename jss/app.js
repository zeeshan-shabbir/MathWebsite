
console.log("working");
$(document).ready(function () {
    // //////////////////**************carousel start here ************//////////////////////
    var owl = $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        ltr:true,
        nav: true,
        dots: true,
        autoplay: true,      
        // autoplayspeed:7000,
        autoplayTimeout:7000,
        smartSpeed: 1500,     
        autoplayHoverPause: false,
        responsive: {
            601: {              
                nav: true, 

            },
            0: {            
                nav: false, 
                      
            },
            
        }
       
       });
       
       owl.on('change.owl.carousel', function (event) {
        var el = event.target;
        $('h1', el).addClass('slideInRight animated ')
                .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                    $('h1', el).removeClass('slideInRight animated');
                });
        $('p', el).addClass('animated slideInLeft')
                .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                    $('p', el).removeClass('animated slideInLeft');
                });
            });
    // //////////////////**************carousel end here ************//////////////////////
    // //////////////////**************counter start here ************//////////////////////
});
