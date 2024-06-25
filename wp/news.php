<?php
/*
Template Name: news
*/
?>

<?php get_header(); ?>

<?php
$args = array(
    'post_type' => 'post',
    'posts_per_page' => 6,
    'orderby' => 'date',
    'order' => 'DESC'
);
$blog_posts = new WP_Query($args);


if ($the_query->have_posts()) :
    while ($the_query->have_posts()) : $the_query->the_post();
        // Content
    endwhile;
endif;
?>

<main class="news__page">
    <section class="news__archive">
        <div class="page__title--inner">
            <p data-anime="initial-visible" class="page__subTitle">NEWS</p>
            <h2 class="page__title"><span data-anime="is-visible" class="letter">お</span><span data-anime="is-visible" class="letter">し</span><span data-anime="is-visible" class="letter">ら</span><span data-anime="is-visible" class="letter">せ</span>
            </h2>
        </div>
        <div class="news__tag">
            <ul>
                <li class="active tag__information">Information</li>
                <li>ブログ</li>
                <li>お役立ちコラム</li>
            </ul>
        </div>
        <div class="news__content">
            <table class="news__table">
                <tbody>
                <?php
                    $args = array(
                        'post_type' => 'post',
                        'posts_per_page' => 6,
                        'orderby' => 'date',
                        'order' => 'DESC'
                    );
                    $blog_posts = new WP_Query($args);
                    
                    if ($blog_posts->have_posts()) :
                        while ($blog_posts->have_posts()) : $blog_posts->the_post(); ?>
                        <tr>
                            <th><?php the_time("Y.m.j") ?><button><?php if(has_category()): echo get_the_category_list(' '); endif; ?></button></th>
                            <td><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></td>
                        </tr>
                    <?php endwhile; else: ?>
                        <tr>
                            <th></th>
                            <td>記事が見つかりません</td>
                        </tr>
                    <?php endif; ?>
                </tbody>
            </table>
            <!-- start pagination -->
            <div class="news__pagenation">
            <?php 
            if ($the_query->max_num_pages > 1) {
                echo paginate_links(array(
                    'base' => get_pagenum_link(1) . '%_%',
                    'format' => 'page/%#%/',
                    'current' => max(1, $paged),
                    'mid_size' => 1,
                    'total' => $the_query->max_num_pages
                ));
            }
            wp_reset_postdata();
            ?>
            </div><!-- end pagination -->
            <!-- <div class="news__pagenation">
                <ul>
                    <li class="prev"><img src="./assets/images/news/prev_arrow.svg" alt=""></li>
                    <li class="active">1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li class="next"><img src="./assets/images/news/next_arrow.svg" alt=""></li>
                </ul>
            </div> -->
            <div class="news__deco">
                <img data-anime="cycling" src="./assets/images/news/news_chara.svg" alt="">
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>

<?php
/*
Template Name: Blog Page
*/
get_header(); 
?>

<div id="primary" class="content-area">
    <main id="main" class="site-main" role="main">
        <?php
        $args = array(
            'post_type' => 'post',
            'posts_per_page' => 6,
            'orderby' => 'date',
            'order' => 'DESC'
        );
        $blog_posts = new WP_Query($args);
        
        if ($blog_posts->have_posts()) :
            while ($blog_posts->have_posts()) : $blog_posts->the_post(); ?>
                <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                    <header class="entry-header">
                        <?php
                        // 投稿タイトルをリンク付きで表示
                        the_title('<h2 class="entry-title"><a href="' . esc_url(get_permalink()) . '" rel="bookmark">', '</a></h2>');
                        
                        // 投稿日を表示
                        echo '<div class="entry-meta">';
                        echo '<span class="posted-on">' . get_the_date() . '</span>';
                        
                        // カテゴリーを表示
                        $categories = get_the_category();
                        if (!empty($categories)) {
                            echo '<span class="cat-links">' . esc_html($categories[0]->name) . '</span>';
                        }
                        echo '</div><!-- .entry-meta -->';
                        ?>
                    </header><!-- .entry-header -->
                    
                    <div class="entry-content">
                        <?php
                        // 投稿の抜粋を表示
                        the_excerpt();
                        ?>
                    </div><!-- .entry-content -->
                </article><!-- #post-## -->
            <?php endwhile;

            // ページネーションを表示
            the_posts_pagination(array(
                'prev_text'          => __('Previous page', 'textdomain'),
                'next_text'          => __('Next page', 'textdomain'),
                'before_page_number' => '<span class="meta-nav screen-reader-text">' . __('Page', 'textdomain') . ' </span>',
            ));

        else :
            get_template_part('template-parts/content', 'none');
        endif;
        wp_reset_postdata();
        ?>
    </main><!-- .site-main -->
</div><!-- .content-area -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>


