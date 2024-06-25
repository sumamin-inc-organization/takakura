<footer class="footer">
    <div class="movingChara__inner">
        <div data-anime="driving" class="movingChara">
            <img data-anime="shaking" src="<?php echo get_template_directory_uri(); ?>/assets/images/img-moving.svg" alt="" />
        </div>
        <div class="movingChara__load infinite__scroll--reverse">
            <img class="scrolText" src="<?php echo get_template_directory_uri(); ?>/assets/images/img-load.svg" alt="" />
            <img class="scrolText" src="<?php echo get_template_directory_uri(); ?>/assets/images/img-load.svg" alt="" />
            <div class="load__bg"></div>
        </div>
    </div>
    <div class="footer__inner">
        <div class="footer__grass first">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/img-grass.svg" alt="" />
        </div>
        <div class="footer__grass second">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/img-grass.svg" alt="" />
        </div>
        <div class="footer__grass third">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/img-grass.svg" alt="" />
        </div>
        <div class="footer__grass forth">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/img-grass.svg" alt="" />
        </div>
        <div class="footer__container">
            <div class="footer__topContainer">
                <div class="footer__logo">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo.svg" alt=" " />
                </div>
                <div class="footer__detail">
                    <p class="footer__detail--name">たかくら引越センター</p>
                    <p class="footer__detail--address">
                        〒181-0004 東京都三鷹市新川５丁目３−１<br />
                        TEL：0422-26-8520　FAX：0422-26-8521
                    </p>
                </div>
                <div class="footer__tel--wrap">
                    <a class="footer__tel" href="tel:0120374514">
                        <div class="footer__tel--icon" href="tel:0120374514"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/icon_tel.svg" alt="tel" /></div>
                        <div class="footer__telNumberInner">
                            <p class="footer__telSpeech first">みんな</p>
                            <p class="footer__telSpeech second">ヨッコイショ！</p>
                            <p class="footer__telNumber">0120-37-4514</p>
                            <p class="footer__reception">受付時間 9：00～17：00</p>
                        </div>
                    </a>
                </div>
            </div>
            <div class="footerNav__container">
                <div class="footerNav__column1">
                    <div class="footerNav spHide">
                        <ul class="footerNav__list">
                            <li class="footerNav__list--item"><a href="<?php echo esc_url(home_url()); ?>"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/triangle_right.svg" alt="">HOME</a></li>
                            <li class="footerNav__list--item"><a href="<?php echo esc_url(home_url('/about/')); ?>"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/triangle_right.svg" alt="">会社概要</a></li>
                            <li class="footerNav__list--item"><a href="<?php echo esc_url(home_url('/policy/')); ?>"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/triangle_right.svg" alt="">プライバシーポリシー</a></li>
                            <li class="footerNav__list--item"><a href="<?php echo esc_url(home_url('/news/')); ?>"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/triangle_right.svg" alt="">お知らせ</a></li>
                            <li class="footerNav__list--item"><a href="<?php echo esc_url(home_url('/estimate/')); ?>"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/triangle_right.svg" alt="">お見積もり</a></li>
                            <li class="footerNav__list--item"><a href="<?php echo esc_url(home_url('/legal/')); ?>"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/triangle_right.svg" alt="">特定商取引法に基づく表記</a></li>
                            <li class="footerNav__list--item"><a href="<?php echo esc_url(home_url('/service/')); ?>"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/triangle_right.svg" alt="">サービス内容</a></li>
                            <li class="footerNav__list--item"><a href="https://tmc4514.com/shop/" target="_blank"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/triangle_right.svg" alt="">オンラインストア</a></li>
                            <li class="footerNav__list--item"><a href="<?php echo get_template_directory_uri(); ?>/assets/pdf/yakkan.pdf" target="_blank"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/triangle_right.svg" alt="">標準引越運送約款</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footerNav__column2">
                    <p class="copyright">© たかくら引越センター all rights reserved.</p>
                    <div class="footer__snsInner">
                        <a class="footer__snsIcon" href="https://www.instagram.com/tmc.4514/">
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/icon_footer-instagram.svg" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/jquery@3.6.4/dist/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/assets/js/loading.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/assets/js/app.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/assets/js/anime.js"></script>