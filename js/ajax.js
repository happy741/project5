$.ajax({

    method: "GET",

    url: "https://dapi.kakao.com/v3/search/book?target=title",

    data: { query: '미움받을 용기' },
    headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }

})

    .done(function (msg) {

        var book = document.getElementsByClassName('books_img');

        for (var i = 0; i < book.length; i++) {


            $(".books_img").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");


            var sale_price1 = Math.floor(msg.documents[i].sale_price);
            var price1 = Math.ceil(sale_price1 / 100) * 100;




            $(".books_text").eq(i).append('<span>' + msg.documents[i].publisher + '</span>');
            $(".books_text").eq(i).append("<h3>" + '<a href="sub_book13.html">' + msg.documents[i].title + "</a>" + "</h3>");
            $(".books_text").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");
            $(".books_text").eq(i).append('<p>&#92;' + price1 + '</p>');

        }

    });


$.ajax({

    method: "GET",

    url: "https://dapi.kakao.com/v3/search/book?target=title",

    data: { query: '소설', size: 12 },
    headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }

})

    .done(function (msg2) {

        var art = document.getElementsByClassName('art1_img');

        for (var i = 0; i < art.length; i++) {


            $(".art1_img").eq(i).append('<a href="#">' + "<img src='" + msg2.documents[i].thumbnail + "'/>" + "</a>");





            var sale_price2 = Math.floor(msg2.documents[i].sale_price);
            var price3 = Math.ceil(sale_price2 / 100) * 100;

            $(".art1_text").eq(i).append('<span>' + msg2.documents[i].publisher + '</span>');
            $(".art1_text").eq(i).append("<h3>" + '<a href="sub_book13.html">' + msg2.documents[i].title + "</a>" + "</h3>");
            $(".art1_text").eq(i).append("<h6>" + msg2.documents[i].authors + "</h6>");
            $(".art1_text").eq(i).append('<p>&#92;' + price3 + '</p>');

        }

    });


$.ajax({

    method: "GET",

    url: "https://dapi.kakao.com/v3/search/book?target=title",

    data: { query: '여행' },
    headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }

})

    .done(function (msg3) {

        var book3 = document.getElementsByClassName('deal_box');

        for (var i = 0; i < book3.length; i++) {


            // $(".deal_book").eq(i).append('<a href="#">' + "<img src='" + msg3.documents[i].thumbnail + "'>" + "</a>");
            var sale_price4 = Math.floor(msg3.documents[i].sale_price);
            var price4 = Math.ceil(sale_price4 / 100) * 100;



            var thumbnail = msg3.documents[i].thumbnail;
            // $(".deal_book").eq(i).css("background-image","url("+thumbnail+")").css('background-size','contain').css('background-repeat','no-repeat');






            $(".text2_box").eq(i).append('<p>' + ' 세일 마감까지 남은 시간' + '</p>');
            $(".text2_box").eq(i).append('<p>&#92;' + price4 + '</p>');
            $(".text2_box").eq(i).append("<h6>" + msg3.documents[i].authors + "</h6>");
            $(".text2_box").eq(i).append("<h3>" + '<a href="sub_book13.html">' + msg3.documents[i].title + "</a>" + "</h3>");
            $(".text2_box").eq(i).append('<span>' + msg3.documents[i].publisher + '</span>');


        }

    });

$.ajax({

    method: "GET",

    url: "https://dapi.kakao.com/v3/search/book?target=title",

    data: { query: '역사' },
    headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }

})

    .done(function (msg4) {

        var book4 = document.getElementsByClassName('new_book3');

        for (var i = 0; i < book4.length; i++) {


            $(".new_book3").eq(i).append('<a href="#">' + "<img src='" + msg4.documents[i].thumbnail + "'>" + "</a>");
            var sale_price5 = Math.floor(msg4.documents[i].sale_price);
            var price6 = Math.ceil(sale_price5 / 100) * 100;



            var thumbnail = msg4.documents[i].thumbnail;

            $(".new_book_box").find('.new_text3').eq(i).append('<span>' + msg4.documents[i].publisher + '</span>');
            $(".new_book_box").find('.new_text3').eq(i).append("<h3>" + '<a href="sub_book13.html">' + msg4.documents[i].title + "</a>" + "</h3>");
            $(".new_book_box").find('.new_text3').eq(i).append("<h6>" + msg4.documents[i].authors + "</h6>");
            $(".new_book_box").find('.new_text3').eq(i).append('<p>&#92;' + price6 + '</p>');

        }

    });


$.ajax({

    method: "GET",

    url: "https://dapi.kakao.com/v3/search/book?target=title",

    data: { query: '음악' },
    headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }

})

    .done(function (msg5) {

        var book5 = document.getElementsByClassName('bio1');

        for (var i = 0; i < book5.length; i++) {


            $(".bio_img").eq(i).append('<a href="#">' + "<img src='" + msg5.documents[i].thumbnail + "'>" + "</a>");
            var sale_price7 = Math.floor(msg5.documents[i].sale_price);
            var price8 = Math.ceil(sale_price7 / 100) * 100;



            var thumbnail = msg5.documents[i].thumbnail;

            $(".bio_text").eq(i).append('<span>' + msg5.documents[i].publisher + '</span>');
            $(".bio_text").eq(i).append("<h3>" + '<a href="sub_book13.html">' + msg5.documents[i].title + "</a>" + "</h3>");
            $(".bio_text").eq(i).append("<h6>" + msg5.documents[i].authors + "</h6>");
            $(".bio_text").eq(i).append('<p>&#92;' + price8 + '</p>');

        }

    });



    $.ajax({

method: "GET",

url: "https://dapi.kakao.com/v3/search/book?target=title",

data: { query: '과학' },
headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }

})

.done(function (msg6) {

var book6 = document.getElementsByClassName('new_book3');

for (var i = 0; i < book6.length; i++) {


$(".new_book_box2").find(".new_book3").eq(i).append('<a href="#">' + "<img src='" + msg6.documents[i].thumbnail + "'>" + "</a>");
var sale_price9 = Math.floor(msg6.documents[i].sale_price);
var price0 = Math.ceil(sale_price9 / 100) * 100;



var thumbnail = msg6.documents[i].thumbnail;

$(".new_book_box2").find('.new_text3').eq(i).append('<span>' + msg6.documents[i].publisher + '</span>');
$(".new_book_box2").find('.new_text3').eq(i).append("<h3>" + '<a href="sub_book13.html">' + msg6.documents[i].title + "</a>" + "</h3>");
$(".new_book_box2").find('.new_text3').eq(i).append("<h6>" + msg6.documents[i].authors + "</h6>");
$(".new_book_box2").find('.new_text3').eq(i).append('<p>&#92;' + price0 + '</p>');

}

});

$.ajax({

method: "GET",

url: "https://dapi.kakao.com/v3/search/book?target=title",

data: { query: '로맨스' },
headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }

})

.done(function (msg7) {

var book7 = document.getElementsByClassName('new_book3');

for (var i = 0; i < book7.length; i++) {


$(".new_book_box3").find(".new_book3").eq(i).append('<a href="#">' + "<img src='" + msg7.documents[i].thumbnail + "'>" + "</a>");
var sale_price11 = Math.floor(msg7.documents[i].sale_price);
var price22 = Math.ceil(sale_price11 / 100) * 100;



var thumbnail = msg7.documents[i].thumbnail;

$(".new_book_box3").find('.new_text3').eq(i).append('<span>' + msg7.documents[i].publisher + '</span>');
$(".new_book_box3").find('.new_text3').eq(i).append("<h3>" + '<a href="sub_book13.html">' + msg7.documents[i].title + "</a>" + "</h3>");
$(".new_book_box3").find('.new_text3').eq(i).append("<h6>" + msg7.documents[i].authors + "</h6>");
$(".new_book_box3").find('.new_text3').eq(i).append('<p>&#92;' + price22 + '</p>');

}

});

$.ajax({

method: "GET",

url: "https://dapi.kakao.com/v3/search/book?target=title",

data: { query: '해외여행' },
headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }

})

.done(function (msg8) {

var book8 = document.getElementsByClassName('new_book3');

for (var i = 0; i < book8.length; i++) {


$(".new_book_box4").find(".new_book3").eq(i).append('<a href="#">' + "<img src='" + msg8.documents[i].thumbnail + "'>" + "</a>");
var sale_price33 = Math.floor(msg8.documents[i].sale_price);
var price44 = Math.ceil(sale_price33 / 100) * 100;



var thumbnail = msg8.documents[i].thumbnail;

$(".new_book_box4").find('.new_text3').eq(i).append('<span>' + msg8.documents[i].publisher + '</span>');
$(".new_book_box4").find('.new_text3').eq(i).append("<h3>" + '<a href="sub_book13.html">' + msg8.documents[i].title + "</a>" + "</h3>");
$(".new_book_box4").find('.new_text3').eq(i).append("<h6>" + msg8.documents[i].authors + "</h6>");
$(".new_book_box4").find('.new_text3').eq(i).append('<p>&#92;' + price44 + '</p>');

}

});


$.ajax({

    method: "GET",
    
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    
    data: { query: '마음',size:12 },
    headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
    
    })
    
    .done(function (msg9) {
    
    var book9 = document.getElementsByClassName('art1_img');
    
    for (var i = 0; i < book9.length; i++) {
    
    
    $(".art_box2").find(".art1_img").eq(i).append('<a href="#">' + "<img src='" + msg9.documents[i].thumbnail + "'>" + "</a>");
    var sale_price55 = Math.floor(msg9.documents[i].sale_price);
    var price66 = Math.ceil(sale_price55 / 100) * 100;
    
    
    
    var thumbnail = msg9.documents[i].thumbnail;
    
    $(".art_box2").find('.art1_text').eq(i).append('<span>' + msg9.documents[i].publisher + '</span>');
    $(".art_box2").find('.art1_text').eq(i).append("<h3>" + '<a href="sub_book13.html">' + msg9.documents[i].title + "</a>" + "</h3>");
    $(".art_box2").find('.art1_text').eq(i).append("<h6>" + msg9.documents[i].authors + "</h6>");
    $(".art_box2").find('.art1_text').eq(i).append('<p>&#92;' + price66 + '</p>');
    
    }
    
    });

    $.ajax({

        method: "GET",
        
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        
        data: { query: '용기',size:12 },
        headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
        
        })
        
        .done(function (msg0) {
        
        var book0 = document.getElementsByClassName('art1_img');
        
        for (var i = 0; i < book0.length; i++) {
        
        
        $(".art_box3").find(".art1_img").eq(i).append('<a href="#">' + "<img src='" + msg0.documents[i].thumbnail + "'>" + "</a>");
        var sale_price55 = Math.floor(msg0.documents[i].sale_price);
        var price66 = Math.ceil(sale_price55 / 100) * 100;
        
        
        
        var thumbnail = msg0.documents[i].thumbnail;
        
        $(".art_box3").find('.art1_text').eq(i).append('<span>' + msg0.documents[i].publisher + '</span>');
        $(".art_box3").find('.art1_text').eq(i).append("<h3>" + '<a href="sub_book13.html">' + msg0.documents[i].title + "</a>" + "</h3>");
        $(".art_box3").find('.art1_text').eq(i).append("<h6>" + msg0.documents[i].authors + "</h6>");
        $(".art_box3").find('.art1_text').eq(i).append('<p>&#92;' + price66 + '</p>');
        
        }
        
        });
        
    

