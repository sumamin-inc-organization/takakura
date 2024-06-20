// ドキュメントの読み込みが完了したときに実行される関数
$(document).ready(function() {
    let images = $('img');
    let totalImages = images.length;
    let loadedImages = 0;

    if (totalImages === 0) {
        // 画像がない場合はすぐにローディング画面を閉じる
        $('#loading').addClass('slide-up');
        setTimeout(function() {
            $('#loading').hide();
            setTimeout(function() {
                // サイト表示時アニメーション
                $('.mainTitle__img--speech').addClass('is-visible');
                $('.mainTitle__img--title').addClass('is-visible');
            }, 400);
        }, 600); // 0.6秒待つ
        return;
    }

    images.each(function() {
        let img = new Image();
        img.src = $(this).attr('src');
        img.onload = img.onerror = function() {
            loadedImages++;

            if (loadedImages === totalImages) {
                setTimeout(function() {
                    $('#loading h2').fadeOut();
                    $('.loading__inner').fadeOut();
                    setTimeout(function() {
                        $('#loading').addClass('slide-up');
                        setTimeout(function() {
                            // サイト表示時アニメーション
                            $('.mainTitle__img--speech').addClass('is-visible');
                            $('.mainTitle__img--title').addClass('is-visible');
                        }, 400);
                    }, 400); // 0.6秒待つ
                }, 600); // 0.6秒待つ
            }
        };
    });
});