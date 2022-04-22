(function($) {


    $(document).ready(function() {
        $(".owl-carousel").owlCarousel();
    });
    /*------------------
    	Navigation
    --------------------*/
    $('.header__nav-mini').on('click', function(event) {
        $('.header__nav').slideToggle(900);
        event.preventDefault();
    });


    // ///////////
    //Click event to scroll to top
    $('#scrollToTop').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    // scroll top back to top

    $('body').scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#scrollToTop').fadeIn();
        } else {
            $('#scrollToTop').fadeOut();
        }
    });

    /*------------------
    	Background set
    --------------------*/
    $('.set-bg').each(function() {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });


    /*------------------
    	Hero Slider
    --------------------*/
    var w_height = $(window).innerHeight();
    $('.hero__item').height(w_height);

    $('.hero__slider').owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        mouseDrag: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: [' ', '<i class="fa fa-angle-right"></i><i class="fa fa-angle-right"></i><i class="fa fa-angle-right"></i>'],
        items: 1,
        autoplay: true
    });
    var dot = $('.hero__slider .owl-dot');
    dot.each(function() {
        var index = $(this).index() + 1;
        if (index < 10) {
            $(this).html('0').append(index);
            $(this).append('<span>.</span>');
        } else {
            $(this).html(index);
            $(this).append('<span>.</span>');
        }
    });

    $(".new__img a").fancybox();
    $(".new__img a").fancybox();

    // scrolltop kich chuot menu thi den phan do

    $('a.scroll').click(function(e) {
        e.preventDefault();
        $('body').animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 2400, "easeoutexpo");
    });



})(jQuery);