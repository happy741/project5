$(function(){
    $('.text_box p').eq(1).click(function(){
        $('.new_book_box').hide();
        $('.new_book_box2').fadeIn().css('display','flex');
        $('.new_book_box3').hide();
        $('.new_book_box4').hide();

    });
    $('.text_box p').eq(0).click(function(){
        $('.new_book_box').fadeIn();
        $('.new_book_box2').hide();
        $('.new_book_box3').hide();
        $('.new_book_box4').hide();

    });
    $('.text_box p').eq(2).click(function(){
        $('.new_book_box').hide();
        $('.new_book_box2').hide();
        $('.new_book_box3').fadeIn().css('display','flex');
        $('.new_book_box4').hide();

    });
   
    $('.text_box p').eq(3).click(function(){
        $('.new_book_box').hide();
        $('.new_book_box2').hide();
        $('.new_book_box3').hide();
        $('.new_book_box4').fadeIn().css('display','flex');

    });






    

    $('.art2').eq(0).click(function(){
        $('.art_box').fadeIn();
        $('.art_box2').hide();
        $('.art_box3').hide();

    });
    
    $('.art2').eq(1).click(function(){
        $('.art_box').hide();
        $('.art_box2').fadeIn().css({"display": 'flex','flex-wrap': 'wrap'});
        $('.art_box3').hide();

    });
    $('.art2').eq(2).click(function(){
        $('.art_box').hide();
        $('.art_box2').hide();
        $('.art_box3').fadeIn().css({"display": 'flex','flex-wrap': 'wrap'});

    });

});