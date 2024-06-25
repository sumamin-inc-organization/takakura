<?php
/*
Template Name: estimate
*/
?>

<?php get_header(); ?>
<script src="https://ajaxzip3.github.io/ajaxzip3.js"></script>
<script>
// 住所自動検索
jQuery(function(){
    jQuery('input[name="zip"]').keyup(function(){
        AjaxZip3.zip2addr(this, '', 'pref', 'city', 'addr');
    });
});
</script>
<style>
	.wpcf7-list-item {
		margin: 0 !important;
	}
	#fileElem {
		display: none;
	}
</style>

<main class="estimate__page">
	<section class="estimate__about">
		<div class="page__title--inner">
			<p data-anime="initial-visible" class="page__subTitle">ESTIMATE</p>
            <h2 class="page__title">
                <span data-anime="initial-visible" class="letter">お</span><span data-anime="initial-visible" class="letter">見</span><span data-anime="initial-visible" class="letter">積</span><span data-anime="initial-visible" class="letter">も</span><span data-anime="initial-visible" class="letter">り</span>
            </h2>
		</div>
		<div class="estimate__text">
			<p>
				予算の算出が難しかったり節約のため、<br class="sp-br">引越し業者に依頼せずに<br>
				安く済まそうと思った結果、逆に予想以上に<br class="sp-br">かかってしまうこともあります。<br>
				業者に頼むと高くつくのでは？<br class="sp-br">と心配なアナタへ。<br>
				ぜひ一度、お見積もりフォーム<br class="sp-br">をご利用ください。
			</p>
		</div>
	</section>
	
<?php echo apply_shortcodes( '[contact-form-7 id="1c877f8" title="お見積もりフォーム"]' ); ?>

</main>

<?php get_footer(); ?>