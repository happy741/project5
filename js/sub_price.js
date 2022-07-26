$(function () {

           
    var sum = 7000;

    $('.option').eq(0).click(function () {
        sum = 7000;
        $('.sum2 > span').text("7,000원");
        $('.price').val(1);
    });
    $('.option').eq(1).click(function () {
        sum = 7200;
        $('.sum2 > span').text("7,200원");
        $('.price').val(1);

    });
    $('.option').eq(2).click(function () {
        sum = 8800;
        $('.sum2 > span').text("8,800원");
        $('.price').val(1);

    });


    $(".sum2").append("<span>" + sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원 </span>");



    $('#plus').click(function () {

        $('.price').val(parseInt($('.price').val()) + 1);
        var sum2 = parseInt($('.price').val() * sum);
        $(".sum2").html("<span>" + sum2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원</span>");
    });

    var pr = $('.price').val();

    $('#mi').click(function () {
        $('.price').val(parseInt($('.price').val()) - 1);
        var sum2 = parseInt($('.price').val() * sum);
        $(".sum2").html("<span>" + sum2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원</span>");
        if ($(".price").val() < 1) {

            alert("1권 이상 구매해야합니다.");
            $('.price').val(1);
        }

    });

    $(".price").keyup(function () {

        if ($(".price").val() < 1) {

            alert("1권 이상 구매가 가능합니다.");

            $(".price").val(1);

        } else if (isNaN($(".price").val())) {

            alert("숫자를 입력하세요.")

            $(".price").val(1);

        } else if (($(".price").val() * 10) % 10 != 0) {

            alert("정수를 입력하세요");

            $(".price").val(1);

        }

        var sum4 = parseInt($(".price").val() * sum);

        $(".sum2").html("<span>" + sum4.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원 </span>");

    });



});