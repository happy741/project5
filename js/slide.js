$(function () {

    $('.text_box > p').click(function(){
        $('.text_box > p').removeClass('click');
        $(this).addClass('click');
    });

    $('.art2').click(function(){
        $('.art2').removeClass('click');
        $(this).addClass('click');
    });
  
    var page1 =0;
    var sd1 = $('.favo').outerWidth(true);
    var cir=$('.circle');

    $('#prev2').click(function () {
        page1--;
        

        if (page1 < 0) {
            page1 = 0;
        }

        $('.favo_box_box').stop().animate({ marginLeft: -sd1 * page1*1.25}, 500);

    });

    $('#next2').click(function () {
        page1++;

        if (page1 > $('.favo').length - 5) {
            page1 = $('.favo').length - 5;
        }
        $('.favo_box_box').stop().animate({ marginLeft: -sd1 * page1*1.25}, 500);
    });





    var slide = $('.slide').width();

    $('.sb').on('click', function () {
        var index = $(this).index();
        $('.slide_box_box').stop().animate({ marginLeft: index * -slide }, 'fast', 'swing');
    });



    var slide = $('.slide').width();

    $('.sb').on('click', function () {
        var index = $(this).index();
        $('.slide_box_box').stop().animate({ marginLeft: index * -slide }, 500, 'swing');
    });

    $('.sb').on('click', function () {
        var index = $(this).index();
        $('.slide_box_box').stop().animate({ marginLeft: index * -slide }, 500, 'swing');
        $('.sb').removeClass('sb_c');
        $(this).addClass('sb_c');


    });

    $('.sb').click(function () {

    });



    var slide2 = $('.deal_box').outerWidth();
   var index=0;

          
    $('.circle').on('click', function () {

        index = $(this).index();
        $('.deal_slide_box').stop().animate({ marginLeft: index * -slide2 },500);
        $('.circle').removeClass('sb_c');
        $(this).addClass('sb_c');
    });

    $('#prev').on('click', function(){
     
        index--;
        if(index<0){
            index=0;
        }                
    
        $('.deal_slide_box').stop().animate({ marginLeft: -slide2*index }, 500);
        $('.circle').removeClass('sb_c');
        $('.circle').eq(index).addClass('sb_c');
    });

    $('#next').on('click', function(){

    index++;
        if(index>$('.deal_box').length -2){
            index=$('.deal_box').length-2;
        }
        
        $('.deal_slide_box').stop().animate({ marginLeft: -slide2*index  }, 500);
        $('.circle').removeClass('sb_c');
        $('.circle').eq(index).addClass('sb_c');
    });


    var slide3 = $('.bio1').outerWidth();



    $('.circle1').on('click', function () {
        var index = $(this).index();
        $('.bio_slide_box').stop().animate({ marginLeft: index * -slide3 }, 500, 'swing');
        $('.circle1').removeClass('sb_c');
        $(this).addClass('sb_c');
    });
});
