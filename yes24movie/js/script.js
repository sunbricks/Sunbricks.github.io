$('.go_top').click(function(){
    $('html,body').animate({
        scrollTop : 0
    });
});


$(window).scroll(function(){

    var s = $(window).scrollTop();

    if(s>=875){
        $('.go_top').show();
    } else {
        $('.go_top').hide();
    }
}); 

$('.main_Slide').slick({
    arrows : true,
    autoplay : true,
    autoplaySpeed : 3500,
    speed : 1500,
    dots : true,
    pauseOnFocus: false
});

$('.h_menu').mouseover(function(){
    $('#header').addClass('wh');
    $('.gnbBg').stop().fadeIn(100);
}).mouseout(function(){
    $('.gnbBg').stop().fadeOut(200,function(){
        $('#header').removeClass('wh');
    });
});

