$(document).ready(function () {
    checkWindowWidth();
    $(window).resize(checkWindowWidth);

    //---------------------------common---------------------------
    var scroll_bar = window.innerWidth - $(window).width();
    //nav menu開閉
    $('.close__btn').on('click', function(){
        $('body').css('padding-right', 0);
        $('.header__menu').removeClass('open');
        $('.menu__wrap').removeClass('open');
        $('body').removeClass('stop');
        $('.bg_fixed').removeClass('back');
    });
    $('.headerNavMenu').on('click', function(){
        $('body').css('padding-right', scroll_bar + 'px');
        $('.header__menu').addClass('open');
        $('.menu__wrap').addClass('open');
        $('body').addClass('stop');
        $('.bg_fixed').addClass('back');
        
    });
    $('.menu__container').on('click',function(e) {
        if(!$(e.target).closest('.menu__wrap').length) {
            $('body').css('padding-right', 0);
            $('.header__menu').removeClass('open');
            $('.menu__wrap').removeClass('open');
            $('body').removeClass('stop');
            $('.bg_fixed').removeClass('back');
            
        }
    });

    //---------------------------top---------------------------
    //無料お見積もりバナーをフッターで隠す
    // $(window).scroll(function(){
        
    //     var footer = $('footer').innerHeight(); // footerの高さを取得
    //     var point = window.pageYOffset; // 現在のスクロール地点 
    //     var docHeight = $(document).height(); // ドキュメントの高さ
    //     var dispHeight = $(window).height(); // 表示領域の高さ
        
    //     //footerまで来ると固定バナー表示を隠す
    //     if(point > docHeight-dispHeight-footer+200) {
    //         $('.freeQuote__img:not(:animated)').animate({
    //             marginRight: "-400px"
    //         }, 400);
    //         // $('.freeQuote__img').hide('slow');
    //     } else {
    //         $('.freeQuote__img:not(:animated)').animate({
    //             marginRight: "0px"
    //         }, 400);
    //         // $('.freeQuote__img').show('slow');
    //     }
    // });

    //スクロールした際の動きを関数でまとめる
    function PageTopAnime() {
        var footer = $('footer').innerHeight(); // footerの高さを取得
        var point = window.pageYOffset; // 現在のスクロール地点 
        var docHeight = $(document).height(); // ドキュメントの高さ
        var dispHeight = $(window).height(); // 表示領域の高さ
        if (point > docHeight-dispHeight-footer+200 ){//上から200pxスクロールしたら
            if ($('.freeQuote__img').hasClass('LeftMove')) {//すでに#page-topにLeftMoveというクラス名がついていたら
                $('.freeQuote__img').removeClass('LeftMove');//LeftMoveというクラス名を除き
                $('.freeQuote__img').addClass('RightMove');//RightMoveというクラス名を#page-topに付与
            }
        }else {
            $('.freeQuote__img').removeClass('RightMove');//#page-topについているRightMoveというクラス名を除く
            $('.freeQuote__img').addClass('LeftMove');//#page-topについているLeftMoveというクラス名を付与
        }
    }

    // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function () {
        PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
    });

    // ページが読み込まれたらすぐに動かしたい場合の記述
    $(window).on('load', function () {
        PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
    });


    //---------------------------service---------------------------
    const $slider = $(".js-slide-common");

    // 2周目ががたつく対応
    $slider.on("beforeChange", (event, slick, currentSlide, nextSlide) => {
        $slider.find(".slick-slide").each((index, el) => {
        const $this = $(el),
            slickindex = $this.attr("data-slick-index");
        if (nextSlide == slick.slideCount - 1 && currentSlide == 0) {
            // 現在のスライドが最初のスライドでそこから最後のスライドに戻る場合
            if (slickindex == "-1") {
            // 最後のスライドに対してクラスを付与
            $this.addClass("is-active-next");
            } else {
            // それ以外は削除
            $this.removeClass("is-active-next");
            }
        } else if (nextSlide == 0) {
            // 次のスライドが最初のスライドの場合
            if (slickindex == slick.slideCount) {
            // 最初のスライドに対してクラスを付与
            $this.addClass("is-active-next");
            } else {
            // それ以外は削除
            $this.removeClass("is-active-next");
            }
        } else {
            // それ以外は削除
            $this.removeClass("is-active-next");
        }
        });
    });

    //ダンボール紹介のスライド大小の切り替え
    $('.size__tags .tag').on('click', function(){
        var condition;
        if(!$(this).hasClass('active')) {
            $('.size__tags .tag').each(function(index) {
                $(this).toggleClass('active');
            });
            if($(this).hasClass('small')) {
                condition = 'small';
            } else {
                condition = 'large'
            }
            switchSizeImg(condition);
            $('.cardboard__img.active').fadeOut(300);
            setTimeout(function(){$('.cardboard__img.active').fadeIn(300)}, 300);
        }
    });

    //スライドの切り替え
    $('.size__pagenation .pagenation').on('click', function(){
        if(!$(this).hasClass('active')) {
            $('.size__pagenation .pagenation').each(function(index) {
                $(this).toggleClass('active');
            });
        }
        var currentElem = $('.cardboard__img.active');
        var prevElem = $('.cardboard__img.active').prev();
        var nextElem = $('.cardboard__img.active').next();
        if($(this).hasClass('prev') && prevElem.length > 0) {
            $('.cardboard__img.active').fadeOut(200);
            setTimeout(function(){prevElem.fadeIn(200)}, 300);

            currentElem.removeClass('active');
            prevElem.addClass('active');
        } else if($(this).hasClass('next') && nextElem.length > 0) {
            $('.cardboard__img.active').fadeOut(200);
            setTimeout(function(){nextElem.fadeIn(200)}, 300);

            currentElem.removeClass('active');
            nextElem.addClass('active');
        }
    });

    //---------------------------news---------------------------
    //カテゴリー切り替え
    $('.news__tag li').on('click', function(){
        if(!$(this).hasClass('active')) {
            $('.news__tag li').each(function(index) {
                $(this).removeClass('active');
            });
        }
        $(this).addClass('active');
        $('.news__table th button').text($(this).text());
    });

    //news pagenation setting
    $('.news__pagenation li').on('click', function() {
        var activeList = '';
        $('.news__pagenation li').each(function(index) {
            if($(this).hasClass('active')) {
                activeList = $(this);
            }
        });
        $('.news__pagenation li').removeClass('active');
        if($(this).hasClass('prev')) {
            if(!activeList.prev().hasClass('prev')) {
                activeList.prev().addClass('active');
            } else {
                activeList.addClass('active');
            }
        } else if ($(this).hasClass('next')) {
            if (!activeList.next().hasClass('next')) {
                activeList.next().addClass('active');
            } else {
                activeList.addClass('active');
            }
        } else {
            $(this).addClass('active');
        }
    });

    //---------------------------estimate---------------------------
    //フォームfileクリックイベント
    $('#fileSelect').on('click', function(){
        $('#fileElem').click();
    });

    //スムーズスクロール
    $('a[href^="#estimateForm"]').click(function(){
        var adjust = 0;
        var speed = 400;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top + adjust;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });

    //従業員紹介ページのspのみslick
    charaSliderSetting();
    $(window).resize(function(){
        charaSliderSetting();
    });
    
});

// slicksliderの設定
function initializeSlider() {
    $(".js-slide").slick({
        autoplay: true,
        dots: false,
        arrows: false,
        variableWidth: true,
        centerMode: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        slidesToShow: 1,
        autoplaySpeed: 2000
    });

    $(".js-slide--service").slick({
        autoplay: false,
        dots: true,
        arrows: true,
        variableWidth: true,
        centerMode: true,
        centerPadding: "15%",
        responsive: [
            {
                breakpoint: 767, // 399px以下のサイズに適用
                settings: {
                    centerPadding: "0%",
                    slidesToShow: 1,
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

//ダンボール紹介の大小を切り替える
function switchSizeImg(condition) {
    var smallList = ['introduction_small01', 'introduction_small02', 'introduction_small03', 'introduction_small04'];
    var largeList = ['introduction_large01', 'introduction_large02', 'introduction_large03', 'introduction_large04', 'introduction_large05'];

    $('.size__img').empty();
    
    if(condition == 'small') {
        $(smallList).each(function(index) {
            var num = index + 1;
            if (index <= 0) {
                var item = $('<img class="cardboard__img small__cardboard01 active" src="./assets/images/service/'+ smallList[index] +'.png" alt="ダンボール画像" style="display: none;">')
            } else {
                var item = $('<img class="cardboard__img small__cardboard0'+ num +'" src="./assets/images/service/'+ smallList[index] +'.png" alt="ダンボール画像" style="display: none;">')
            }
            $('.size__img').append(item);
        });
    } else if (condition == 'large') {
        $(largeList).each(function(index) {
            var num = index + 1;
            if (index <= 0) {
                var item = $('<img class="cardboard__img large__cardboard01 active" src="./assets/images/service/'+ largeList[index] +'.png" alt="ダンボール画像" style="display: none;">')
            } else {
                var item = $('<img class="cardboard__img large__cardboard0'+ num +'" src="./assets/images/service/'+ largeList[index] +'.png" alt="ダンボール画像" style="display: none;">')
            }
            $('.size__img').append(item);
        });
    }
}