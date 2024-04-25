<?php
function Include_my_php($params = array()) {
extract(shortcode_atts(array(
'file' => 'default'
), $params));
ob_start();
include(get_theme_root() . '/' . get_template() . "/$file.php");
return ob_get_clean();
}

add_shortcode('myphp', 'Include_my_php');
?>