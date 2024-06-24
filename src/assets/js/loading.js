$(document).ready(function() {
    let images = $('img');
    let totalImages = images.length;
    let loadedImages = 0;
    let startTime = new Date().getTime();

    function hideLoading() {
        setTimeout(function() {
            $('.loading__inner').fadeOut();
            setTimeout(function() {
                $('#loading').addClass('slide-up');
                setTimeout(function() {
                    // サイト表示時アニメーション
                    $('.mainTitle__img--speech').addClass('is-visible');
                    $('.mainTitle__img--title').addClass('is-visible');
                }, 400); // 0.4秒待つ
            }, 400); // 0.4秒待つ
        }, 600); // 0.6秒待つ
    }

    if (totalImages === 0) {
        // 画像がない場合は最低3秒表示
        let elapsedTime = new Date().getTime() - startTime;
        let remainingTime = 1800 - elapsedTime;

        setTimeout(hideLoading, remainingTime > 0 ? remainingTime : 0);
        return;
        // 画像がない場合はすぐにローディング画面を閉じる
        // $('#loading').addClass('slide-up');
        // setTimeout(function() {
        //     $('#loading').hide();
        //     setTimeout(function() {
        //         // サイト表示時アニメーション
        //         $('.mainTitle__img--speech').addClass('is-visible');
        //         $('.mainTitle__img--title').addClass('is-visible');
        //     }, 400);
        // }, 600); // 0.6秒待つ
        // return;
    }

    images.each(function() {
        let img = new Image();
        img.src = $(this).attr('src');
        img.onload = img.onerror = function() {
            loadedImages++;

            if (loadedImages === totalImages) {
                let elapsedTime = new Date().getTime() - startTime;
                let remainingTime = 1800 - elapsedTime;

                setTimeout(hideLoading, remainingTime > 0 ? remainingTime : 0);
            }
        };
    });
});