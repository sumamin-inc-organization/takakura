<?php get_header(); ?>

<main class="single__page">
    <section class="single__post">
        <?php if(have_posts()):while(have_posts()):the_post(); ?>
        <?php
        $cat = get_the_category();
        $catname = $cat[0]->cat_name;
        ?>
        <div class="single__content">
            <div class="single__title">
                <div class="single__title--meta"><?php the_time('Y.m.d'); ?><button><?php echo $catname; ?></button></div>
                <div class="single__title--main"><?php the_title(); ?></div> 
            </div>
            <div class="single__img"><?php the_post_thumbnail(); ?></div>
            <div class="single__text">
                <p><?php the_content(); ?></p>
            </div>
            <div class="single__dottedLine"></div>
            <div class="single__footer">
                <img class="single__footer--img" src="<?php echo get_template_directory_uri(); ?>/assets/images/news/single_footer.png" alt="たかくら引っ越しセンターロゴ">
                <div class="single__footer--info">
                    <div class="single__footer--upper">
                        <p>お引越しはたかくら引越センターへ！
                            <br>合言葉は「引越はおもしろい！」</p>
                    </div>
                    <div class="single__footer--bottom">
                        <p>たかくら引越センター</p>
                        <p class="tel"><span class="small">TEL</span>0120-37-4514</p>
                    </div>
                </div>
            </div>
        </div>
        <?php endwhile;endif; ?>
        <div class="single__pagenation">
            <ul>
                <li class="prev"><?php previous_post_link('%link', '<img src="'.echo get_template_directory_uri().'/assets/images/news/prev_arrow.svg" alt="">前へ'); ?></li>
                <li class="next"><?php next_post_link('%link', '次へ<img src="'.echo get_template_directory_uri().'/assets/images/news/next_arrow.svg" alt="">'); ?></li>
            </ul>
        </div>
        <div class="more__btn--container">
            <a class="more__btn" href="<?php echo esc_url(home_url('/news/')); ?>">一覧へもどる</a>
        </div>
    </section>
    <img class="bg_fixed" src="<?php echo get_template_directory_uri(); ?>/assets/images/news/single_bg.svg" alt="">
</main>

<?php get_footer(); ?>