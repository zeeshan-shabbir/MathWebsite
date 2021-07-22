$(document).ready(function () {


    // ///////////////////////////////////////            back to top         //////////////////
    $(document).scroll(function () {
        var y = $(this).scrollTop();
        if (y > 800) {
            $('.back-to-top').fadeIn(1500);
            $('.go-to-bottom').fadeIn(1500);
        } else {
            $('.back-to-top').fadeOut();
            $('.go-to-bottom').fadeOut();
        }
    });
    // //////////////////**************navbar start here ************//////////////////////
    $("#mobile-nav-toggle").click(function () {
        $('.back-to-top').fadeOut();
        $('.go-to-bottom').fadeOut();
        var width= $( window ).width();
        console.log(width);
        if ( width <= 400) {
            $(Sidenav).width("100%");
        } else if(width <= 600) {
            $(Sidenav).width("280px");  
        }
        else if(width <= 800) {
            $(Sidenav).width("350px");  
        }
        else if(width <= 1000) {
            $(Sidenav).width("450px");  
        }
        $("#mobile-nav-toggle").hide()
        $("body").css("background-color", "rgba(0,0,0,0.4)");
    })

    $(".closebtn,.dropdown-content li a").click(function () {

        $(Sidenav).width("0px");
        $("#mobile-nav-toggle").show()
        $("#closebtn").hide()
        $("body").css("background-color", "white");
      
    })
    
    $(document).on("scroll", function(){
        var pixels = $(document).scrollTop();
        var pageHeight = $(document).height() - $(window).height();
        var progress = 100 * pixels / pageHeight;
        
        $("div.progress").css("width", progress + "%");
      })

      $(".dropdown").click(function () {
        // $(".program-nav").toggleText('program', 'space')
        $(".dropdown-content").toggle(300);
        $(this).find(".fa-chevron-down").toggleClass("fa-chevron-up");
    })

    // $.fn.extend({
    //     toggleText: function (a, b) {
    //         return this.text(this.text() == b ? a : b);
    //     }
    // });
    $('footer').attr('id', 'bottom');
    // for faculty profiles
    $('.social-links a:first').attr('href', 'https://www.facebook.com/groups/416373102043603/');
    $('.footer-link:first ul li:last a:last').text("Suggestion");
    $('.footer-link:last ul li:last a:last').text("Complain");
})
