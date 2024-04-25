function initializeSlider() {
    $(".js-slide").slick({
        autoplay: true,
        dots: false,
        arrows: false,
        variableWidth: true,
        centerMode: true,
        slidesToShow: 1,
    });
}

function checkWindowWidth() {
    // if ($(window).width() <= 767) {
    initializeSlider();
    // }
}

$(document).ready(function () {
    checkWindowWidth();
    $(window).resize(checkWindowWidth);

    $(window).scroll(function(){
        
        var footer = $('footer').innerHeight(); // footerの高さを取得
        var point = window.pageYOffset; // 現在のスクロール地点 
        var docHeight = $(document).height(); // ドキュメントの高さ
        var dispHeight = $(window).height(); // 表示領域の高さ
        
        //footerまで来ると固定バナー表示を隠す
        if(point >= docHeight-dispHeight-200) {
            $('.freeQuote__img:not(:animated)').animate({
                marginRight: "-400px"
            }, 400);
            // $('.freeQuote__img').hide('slow');
        } else {
            $('.freeQuote__img:not(:animated)').animate({
                marginRight: "0px"
            }, 400);
            // $('.freeQuote__img').show('slow');
        }
        
    });
});
