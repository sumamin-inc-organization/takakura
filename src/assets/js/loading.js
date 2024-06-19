// ドキュメントの読み込みが完了したときに実行される関数
$(document).ready(function() {
    let images = $('img');
    let totalImages = images.length;
    let loadedImages = 0;

    if (totalImages === 0) {
        // 画像がない場合はすぐにローディング画面を閉じる
        // $('#loading').addClass('slide-up');
        // $('#loading').fadeOut();
        setTimeout(function() {
            $('#loading').fadeOut();
        }, 600); // 0.6秒待つ
        return;
    }

    images.each(function() {
        let img = new Image();
        img.src = $(this).attr('src');
        img.onload = img.onerror = function() {
            //現在の読み込み状況を反映
            loadedImages++;
            let progress = Math.floor((loadedImages / totalImages) * 100);
            $('#progress').text(progress + '%');
            $('#progress-bar').css('width', progress + '%');
            
            if (loadedImages === totalImages) {
                setTimeout(function() {
                    // $('#loading').addClass('slide-up');
                    // $('#loading').fadeOut();
                    setTimeout(function() {
                        $('#loading').fadeOut();
                    }, 600); // 0.6秒待つ
                }, 600); // 0.6秒待つ
            }
        };
    });
});