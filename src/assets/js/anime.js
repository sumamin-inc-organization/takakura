$(document).ready(function() {
    //一文字ずつ出現させる
    delayLetter();
    // Function to check if an element is in viewport
    //スクロール表示タイミング
    function isInViewport(element) {
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();


        var windowSize = $(window).width();
        if (windowSize < 768) {
            elementTop += 100;
            viewportTop += 100;
        } else {
            elementTop += 300;
            viewportTop += 300;
        }
        return elementBottom > viewportTop && elementTop < viewportBottom;
    }

    /**
    * アニメーションの設定をするデータ
    * animeType: アニメーションをつけたい要素につけるdata-anime属性名
    * animeStage: つけたいアニメーションのクラス
    * initial: 初期の状態
    */
    const animeData = [
        {animeType: "slide-inRight", initialCss: "opacity", initialValue: "0"},
        {animeType: "slide-inLeft", initialCss: "opacity", initialValue: "0"},
        {animeType: "popup", initialCss: "opacity", initialValue: "0"},
        {animeType: "is-visible"},
        {animeType: "movingRightChara", initialCss: "opacity", initialValue: "0"},
        {animeType: "movingLeftChara", initialCss: "opacity", initialValue: "0"},
        {animeType: "driving", initialCss: "opacity", initialValue: "0"},
        {animeType: "shaking"},
        {animeType: "cycling", initialCss: "opacity", initialValue: "0"}
    ]

    //スクロールアニメーションのトリガー設定
    function triggerAnime(data) {
        // 作成した連想配列をループで回す
        $.each(data, function(index, value) {
            var animeType = value.animeType;
            $('[data-anime="'+ animeType + '"]').each(function() {
                if (isInViewport(this)) {
                    $(this).addClass(animeType);
                    // $(this).removeAttr('style');
                    // $(this).removeClass('initial-anime');
                }
            });
        });
    }

    $.each(animeData, function(index, value) {
        var animeType = value.animeType;
        var initialCss = value.initialCss;
        var initialValue = value.initialValue;
        $('[data-anime="'+ animeType + '"]').each(function() {
            if(initialCss !== undefined) {
                $(this).css(initialCss, initialValue);
            }
        });
    });

    // Check elements on page load
    $(window).on('load scroll', function() {
        triggerAnime(animeData);
    });
});

function fadeUpAnime() {
    // ふわっと出現させる
    $('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
        var elemPos = $(this).offset().top-50;//要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
        }else{
            $(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
        }
    });
}
/*文字出現アニメーションで一文字ずつ出現させる */
function delayLetter() {
    var titleList = $('.page__title');
    $(titleList).each(function () {
        var letter =  $(this).children('.letter');
        var subTitle = $(this).prev();
        $(subTitle).css('transition-delay', letter.length / 16 + 's');
        $(letter).each(function (index) {
            $(this).css('transition-delay', index / 16 + 's');
        });
    });

}
