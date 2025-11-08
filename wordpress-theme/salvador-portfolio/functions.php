<?php
/**
 * Salvador Villarroel Portfolio Theme Functions
 */

// Theme Setup
function salvador_portfolio_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
    
    // Register Navigation Menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'salvador-portfolio'),
        'footer' => __('Footer Menu', 'salvador-portfolio')
    ));
}
add_action('after_setup_theme', 'salvador_portfolio_setup');

// Enqueue Styles and Scripts
function salvador_portfolio_enqueue_scripts() {
    // Google Fonts
    wp_enqueue_style(
        'salvador-google-fonts',
        'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=Montserrat:wght@400;500;600&display=swap',
        array(),
        null
    );
    
    // Main Stylesheet
    wp_enqueue_style('salvador-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Custom Scripts
    wp_enqueue_script('salvador-navigation', get_template_directory_uri() . '/js/navigation.js', array('jquery'), '1.0.0', true);
    wp_enqueue_script('salvador-animations', get_template_directory_uri() . '/js/animations.js', array('jquery'), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'salvador_portfolio_enqueue_scripts');

// Custom Image Sizes
add_image_size('salvador-hero', 800, 1067, true); // Hero portrait
add_image_size('salvador-card', 600, 400, true);  // Card images
add_image_size('salvador-about', 600, 800, true); // About page image

// Widget Areas
function salvador_portfolio_widgets_init() {
    register_sidebar(array(
        'name'          => __('Footer Widget Area', 'salvador-portfolio'),
        'id'            => 'footer-widgets',
        'description'   => __('Appears in the footer section', 'salvador-portfolio'),
        'before_widget' => '<div class="footer-widget">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
}
add_action('widgets_init', 'salvador_portfolio_widgets_init');

// Custom Page Templates
function salvador_portfolio_add_custom_templates($templates) {
    $templates['page-about.php'] = 'About Page';
    $templates['page-work.php'] = 'Work Page';
    $templates['page-fun-facts.php'] = 'Fun Facts Page';
    $templates['page-contact.php'] = 'Contact Page';
    return $templates;
}
add_filter('theme_page_templates', 'salvador_portfolio_add_custom_templates');

// Custom Navigation Walker for Active States
class Salvador_Walker_Nav_Menu extends Walker_Nav_Menu {
    function start_el(&$output, $item, $depth = 0, $args = null, $id = 0) {
        $classes = empty($item->classes) ? array() : (array) $item->classes;
        $class_names = join(' ', apply_filters('nav_menu_css_class', array_filter($classes), $item));
        $class_names = ' class="nav-item ' . esc_attr($class_names) . '"';
        
        $output .= '<li' . $class_names . '>';
        
        $attributes = '';
        $attributes .= !empty($item->url) ? ' href="' . esc_attr($item->url) . '"' : '';
        $attributes .= ' class="nav-link"';
        
        $item_output = $args->before;
        $item_output .= '<a' . $attributes . '>';
        $item_output .= $args->link_before . apply_filters('the_title', $item->title, $item->ID) . $args->link_after;
        $item_output .= '</a>';
        $item_output .= $args->after;
        
        $output .= apply_filters('walker_nav_menu_start_el', $item_output, $item, $depth, $args);
    }
}

// Add Async/Defer to Scripts
function salvador_add_async_attribute($tag, $handle) {
    if ('salvador-animations' === $handle) {
        return str_replace(' src', ' defer src', $tag);
    }
    return $tag;
}
add_filter('script_loader_tag', 'salvador_add_async_attribute', 10, 2);

// Clean up WordPress head
remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'wp_shortlink_wp_head');

// SEO Meta Tags
function salvador_add_meta_tags() {
    if (is_front_page()) {
        echo '<meta name="description" content="Salvador Villarroel - Business IT Student, Educator, and Community Builder. 10+ students coached, 10,000 member community owner.">' . "\n";
        echo '<meta name="keywords" content="Salvador Villarroel, Business IT, Math Tutor, Chess Coach, Community Builder, Education">' . "\n";
    }
}
add_action('wp_head', 'salvador_add_meta_tags');
