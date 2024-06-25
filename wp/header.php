<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />

    <title></title>
    <meta name="description" content="" />

    <meta property="og:locale" content="ja_JP" />
    <meta property="og:title" content="" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="" />
    <meta property="og:image" content="" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="" />
    <meta property="og:description" content="" />
    <meta property="fb:app_id" content="" />
    <link rel="icon" href="" />
    <link rel="stylesheet" href="https://use.typekit.net/lvk8vax.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@900&family=Zen+Maru+Gothic:wght@500;700;900&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.min.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.css" />
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/css/reset.css" />
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/css/variable.css" />
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/css/loading.css" />
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/css/style.css" />
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/css/anime.css" />
    <link rel="preload" href="<?php echo get_template_directory_uri(); ?>/assets/images/img-moving.svg" as="image" type="image/svg" />
    <link rel="preload" href="<?php echo get_template_directory_uri(); ?>/assets/images/top/about/img-about_surround1.svg" as="image" type="image/svg" />
    <link rel="preload" href="<?php echo get_template_directory_uri(); ?>/assets/images/top/about/img-about_surround2.svg" as="image" type="image/svg" />
</head>

<body>
    <header class="header">
        <div class="header__inner">
            <div class="headerLogo">
                <a href="./index.html"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo.svg" alt="たかくら引越センター" /></a>
            </div>
            <div class="header__container">
                <div class="snsNav">
                    <ul class="snsNav__list">
                        <li class="snsNav__list--item">
                            <a href="https://www.instagram.com/tmc.4514/"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/icon_instagram.svg" alt="instaigram" /></a>
                        </li>
                        <li class="snsNav__list--item">
                            <a href="tel:0120374514"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/icon_tel.svg" alt="tel" /></a>
                        </li>
                    </ul>
                </div>
                <div class="headerNavMenu">
                    <img class="defalt__img" src="<?php echo get_template_directory_uri(); ?>/assets/images/img-menu_icon.svg" alt="menu" />
                    <img class="hover__img" src="<?php echo get_template_directory_uri(); ?>/assets/images/img-menu_icon_hover.svg" alt="menu" />
                </div>
            </div>
        </div>
    </header>
    <nav class="header__menu">
        <div class="menu__overlay">
            <div class="menu__container">
                <div class="menu__wrap">
                    <div class="close__btn"><span class="dli-close"></span></div>
                    <div class="menu__inner">
                        <ul class="menu__list">
                            <li class="menu__item menu__item1">
                                <a href="<?php echo esc_url(home_url()); ?>">
                                    <p class="menu__item--subTitle">TOP</p> 
                                    <p class="menu__item--title">トップ</p>
                                </a>
                            </li>
                            <li class="menu__item menu__item3">
                                <a href="<?php echo esc_url(home_url('/news/')); ?>">
                                    <p class="menu__item--subTitle">NEWS</p>
                                    <p class="menu__item--title">おしらせ</p>
                                </a>
                            </li>
                            <li class="menu__item menu__item5">
                                <a href="<?php echo esc_url(home_url('/service/')); ?>">
                                    <p class="menu__item--subTitle">SERVICE</p>
                                    <p class="menu__item--title">サービス内容</p>
                                </a>
                            </li>
                            <li class="menu__item menu__item2">
                                <a href="<?php echo esc_url(home_url('/about/')); ?>">
                                    <p class="menu__item--subTitle">ABOUT</p>
                                    <p class="menu__item--title">TMCの秘密</p>
                                </a>
                            </li>
                            <li class="menu__item menu__item4">
                                <a href="<?php echo esc_url(home_url('/characters/')); ?>">
                                    <p class="menu__item--subTitle">CHARACTERS</p>
                                    <p class="menu__item--title">従業員紹介</p>
                                </a>
                            </li>
                            <li class="menu__item menu__item6">
                                <a href="https://tmc4514.com/shop/" target="_blank">
                                    <p class="menu__item--subTitle">ONLINE STORE</p>
                                    <p class="menu__item--title">オンラインストア</p>
                                </a>
                            </li>
                        </ul>
                        <div class="menu__btns">
                            <a href="<?php echo esc_url(home_url('/estimate/')); ?>"><div class="estimate__btn"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/click.svg" alt=""><span>無料お見積もり</span></div></a>
                            <a href="tel:120374514">
                                <div class="tel__btn">                        
                                    <div class="tel__btn--icon"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/icon_tel.svg" alt="tel" /></div>
                                    <div class="telNumberInner">
                                        <p class="tel__telSpeech first">みんな</p>
                                        <p class="tel__telSpeech second">ヨッコイショ！</p>
                                        <p class="tel__telNumber">0120-37-4514</p>
                                        <p class="tel__reception">受付時間 9：00～17：00</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="menu__link">
                            <ul class="link__list">
                                <li class="link__item"><a href="<?php echo esc_url(home_url('/policy/')); ?>">プライバシーポリシー</a></li>
                                <li class="link__item"><a href="<?php echo esc_url(home_url('/legal/')); ?>">特定商取引法に基づく表記</a></li>
                                <li class="link__item"><a href="<?php echo get_template_directory_uri(); ?>/assets/pdf/yakkan.pdf" target="_blank">標準引越運送約款</a></li>
                                <li class="link__item sns__item">
                                    <a href="https://www.instagram.com/tmc.4514/"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/instagram_icon-black.svg" alt="instaigram" /></a>
                                </li>
                            </ul>
                        </div>
                        <div class="menu__sns">
                            <ul class="sns__list">
                            </ul>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </nav>