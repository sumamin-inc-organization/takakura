$(document).ready(function() {
    // Function to check if an element is in viewport
    //スクロール表示タイミング
    function isInViewport(element) {
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop + 400 && elementTop + 400 < viewportBottom;
    }

    //スクロールアニメーションのトリガー設定
    function triggerAnime() {
        const animeData = [
            {animeType: "slide-in", animeState: "visible", initial: ""},
            {animeType: "popup__trigger",animeState: "popup", initial: "opacity: 0"},
        ]
    
        // 作成した連想配列をループで回す
        $.each(animeData, function(index, value) {
            // チーム名を変数に入れる
            var animeType = value.animeType;
            var animeState = value.animeState;
            var initial = value.initial;
            $('[data-anime="'+ animeType + '"]').each(function() {
                if (isInViewport(this)) {
                    $(this).addClass(animeState);
                }
            });
        });
    }

    // Check elements on page load
    $(window).on('load scroll', function() {
        triggerAnime();
        // $('.slide-in').each(function() {
        //     if (isInViewport(this)) {
        //         $(this).addClass('visible');
        //     }
        // });

        // $('.popup__trigger').each(function() {
        //     if (isInViewport(this)) {
        //         $(this).addClass('popup');
        //     } else {
        //         $(this).removeClass('popup');
        //     }
        // });

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
