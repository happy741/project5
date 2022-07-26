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
});