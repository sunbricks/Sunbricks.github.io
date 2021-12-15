$('.sub_item_name li').click(function(){
    let i = $(this).index();
    $('.sub_item .sub_item_name li').removeClass('active');
    $(this).addClass('active');
    $('.sub_item_list li').removeClass('active').hide();
    $('.sub_item_list li').eq(i).addClass('active');
    $('.sub_item_list .active').css('display', 'flex');
    console.log(i);
});




$('.go_top').click(function(){
    $('html,body').animate({
        scrollTop : 0
    });
});



// 스크롤이 움직일 때 ==========
$(window).scroll(function(){
    var s = $(window).scrollTop();
    if(s>=380){
        $('.r_wing').css('position','fixed').css('top',380);
    } else {
        $('.r_wing').css('position','absolute').css('top',730);
    }
}); 
// 스크롤 이벤트 마지막