function initializeSlider() {
    $(".js-slide").slick({
        autoplay: true,
        dots: false,
        arrows: false,
        variableWidth: true,
        centerMode: true,
        slidesToShow: 1,
    });

    $(".js-slide--service").slick({
        autoplay: true,
        dots: true,
        arrows: true,
        variableWidth: true,
        centerMode: true,
        centerMode: true,
        centerPadding: "15%",
        responsive: [
            {
                breakpoint: 767, // 399px以下のサイズに適用
                settings: {
                    centerPadding: "0%",
                    slidesToShow: 1
                },
            },
        ],
    });
}

function checkWindowWidth() {
    // if ($(window).width() <= 767) {
    initializeSlider();
    // }
}

function charaSliderSetting(){
    var width = $(window).width();
    if(width <= 767){
        $('.member__spSlider').not('.slick-initialized').slick({
            autoplay: true,
            arrows: true,
            infinite: true,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        });
    } else {
        $('.slide.slick-initialized').slick('unslick');
    }
}

$(document).ready(function () {
    checkWindowWidth();
    $(window).resize(checkWindowWidth);

    //無料お見積もりバナーをフッターで隠す
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

    //nav menu開閉
    $('.close__btn').on('click', function(){
        // $('.header__menu').animate({
        //     'marginRight' : '400px'}, 300
        // );
        $('body').removeClass('stop');
        $('.header__menu').hide();
        console.log('close');
    });
    $('.headerNavMenu').on('click', function(){
        // $('.header__menu').animate({
        //     'marginRight' : '0'}, 300
        // );
        $('body').addClass('stop');
        $('.header__menu').show();
        console.log('open');
    });

    //serviceページダンボール紹介のスライド
    $('.size__tags .tag, .size__pagenation .pagenation').on('click', function(){
        if(!$(this).hasClass('active')) {
            $('.size__tags .tag, .size__pagenation .pagenation').each(function(index) {
                $(this).toggleClass('active');
            });
            if (window.matchMedia('(min-width:768px)').matches) {
                if($(this).hasClass('small')) {
                    $('.small__cardboard:not(:animated)').animate({
                        right: "3.968vw"
                    }, 400);
                    $('.large__cardboard:not(:animated)').animate({
                        right: "-41.26vw"
                    }, 400);
                } else {
                    $('.small__cardboard:not(:animated)').animate({
                        right: "50.26vw"
                    }, 400);
                    $('.large__cardboard:not(:animated)').animate({
                        right: "3.968vw"
                    }, 400);
                }
            } else {
                if($(this).hasClass('small')) {
                    $('.small__cardboard:not(:animated)').animate({
                        right: "3.968vw"
                    }, 400);
                    $('.large__cardboard:not(:animated)').animate({
                        right: "-81.26vw"
                    }, 400);
                } else {
                    $('.small__cardboard:not(:animated)').animate({
                        right: "90.26vw"
                    }, 400);
                    $('.large__cardboard:not(:animated)').animate({
                        right: "3.968vw"
                    }, 400);
                }
            }
        }
    });

    //newsページカテゴリー切り替え
    $('.news__tag li').on('click', function(){
        if(!$(this).hasClass('active')) {
            $('.news__tag li').each(function(index) {
                $(this).removeClass('active');
            });
        }
        $(this).addClass('active');
        $('.news__table th button').text($(this).text());
    });

    //フォームfileクリックイベント
    $('#fileSelect').on('click', function(){
        $('#fileElem').click();
    });

    //フォームレイアウト
    // $('.before__text').each(function() {
    //     var labelWidth = $(this).outerWidth(true);
    //     console.log(labelWidth);
    //     console.log($(this).next());
    //     $(this).next().css('width', $(this).next().outerWidth() - labelWidth + 'px');
    // });

    //従業員紹介ページのspのみslick
    charaSliderSetting();
    $(window).resize(function(){
        charaSliderSetting();
    });
    
});