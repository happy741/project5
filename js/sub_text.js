$(function(){

$.get('./text/1.txt', function (data) {
    $('.menu_de').html(data);
})

$.get('./text/2.txt', function (data) {
    $('.del').html(data);
})

$.get('./text/3.txt', function (data) {
    $('.book_in2').html(data);
})

$('.option').click(function () {
    $('.option').removeClass('option_border');
    $(this).addClass('option_border');
});



$(window).scroll(function(){
    var sc=$(this).scrollTop();
    console.log(sc);
    var menu1=$('#11');
    if(sc>879){
        $('#11 >ul li').eq(0).addClass('scroll');
    }else{
        $('#11 >ul li').eq(0).removeClass('scroll');
    }
    if(sc>2441){
        $('#22 >ul li').eq(1).addClass('scroll');
    }else{
        $('#22 >ul li').eq(1).removeClass('scroll');
    }

    if(sc>4441){
        $('#33 >ul li').eq(2).addClass('scroll');
    }else{
        $('#33 >ul li').eq(2).removeClass('scroll');
    }
});


});