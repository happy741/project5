// / 서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브
$(function(){
    var page1 = 0;
    var sd1 = $('.al').outerWidth(true);

    $('#prev').click(function () {
        page1--;


        if (page1 < 0) {
            page1 = 0;
        }

        $('.slide').stop().animate({ marginLeft: -sd1 * page1 * 1.25 }, 500);

    });

    $('#next').click(function () {
        page1++;

        if (page1 > $('.al').length - 5) {
            page1 = $('.al').length - 5;
        }
        $('.slide').stop().animate({ marginLeft: -sd1 * page1 * 1.25 }, 500);
    });

});