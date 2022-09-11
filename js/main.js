$(function($){
    //トップ画像切り替え
    $('.bg-switcher').bgSwitcher({
        images: ['../images/background1.jpg','../images/background2.jpg','../images/background3.jpg','../images/background4.jpg','../images/background5.jpg',],
        interval: 5000,
        loop: true
    });

    //slider
    $(function(){
        $(".slider").slick({
            arrows: true,
            dots: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 480,
                    settings: {
                    slidesToShow: 1,
                    },
                },
            ],
        });
    });

    $(document).ready(function(){
        $('.js-scroll-fade').css('visibility','hidden');
        $(window).scroll(function(){
            var windowHeight = $(window).height(),
                topWindow = $(window).scrollTop();
            $('.js-scroll-fade').each(function(){
            var objectPosition = $(this).offset().top;
            if(topWindow > objectPosition - windowHeight + 200){
            $(this).addClass("isVissible");
            }
            });
        });
    });
})