$('.go_top').click(function(){
    $('html,body').animate({
        scrollTop : 0
    });
});


$(window).scroll(function(){

    var s = $(window).scrollTop();

    if(s>=1000){
        $('.go_top').show();
    } else {
        $('.go_top').hide();
    }
}); 