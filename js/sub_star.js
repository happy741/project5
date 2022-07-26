$.ajax({

    method: "GET",

    url: "https://dapi.kakao.com/v3/search/book?target=title",

    data: { query: '나' },
    headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }

})

    .done(function (msg) {

        var book = document.getElementsByClassName('al_img');

        for (var i = 0; i < book.length; i++) {


            $(".al_img").eq(i).append('<a href="index.html">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");


            var sale_price1 = Math.floor(msg.documents[i].sale_price);
            var price1 = Math.ceil(sale_price1 / 100) * 100;




            $(".al_text").eq(i).append('<span>' + msg.documents[i].publisher + '</span>');
            $(".al_text").eq(i).append("<h3>" + '<a href="sub_book13.html">' + msg.documents[i].title + "</a>" + "</h3>");
            $(".al_text").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");
            $(".al_text").eq(i).append('<p>&#92;' + price1 + '</p>');

        }

    });

    $(function(){
        $('.star_box > img').hover(function () {
            $('.star_box > img').attr('src', './sub_img/premium-icon-star-5708819.png');
            $(this).attr('src', './sub_img/premium-icon-star-4369505.png');
            $(this).prevUntil().attr('src', './sub_img/premium-icon-star-4369505.png');

        });


        $('.star_box > img').click(function () {
            $('.star_box > img').attr('src', './sub_img/premium-icon-star-5708819.png');
            $(this).attr('src', './sub_img/premium-icon-star-4369505.png');
            $(this).prevUntil().attr('src', './sub_img/premium-icon-star-4369505.png');
        });

        // });

        $('.star_box > img').eq(i).hover(function () {
            for (var i = 0; i < $('.star_box >img').length; i++);
            $('.star_box > img').eq(i).attr('src', './sub_img/premium-icon-star-4369505.png');
        }, function () {
            $('.star_box > img').eq(i).attr('src', './sub_img/premium-icon-star-5708819.png');
        });
    });