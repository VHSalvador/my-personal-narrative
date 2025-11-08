<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Salvador Villarroel">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<nav id="main-navigation" class="main-nav">
    <div class="container">
        <div class="nav-wrapper">
            <!-- Logo -->
            <a href="<?php echo esc_url(home_url('/')); ?>" class="nav-logo">
                <img src="<?php echo get_template_directory_uri(); ?>/images/logo.png" alt="Salvador Villarroel Logo" class="logo-image">
                <span class="logo-text">Salvador Villarroel</span>
            </a>
            
            <!-- Mobile Menu Toggle -->
            <button class="mobile-menu-toggle" aria-label="Toggle menu" aria-expanded="false">
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
            </button>
            
            <!-- Desktop Navigation -->
            <div class="nav-menu-wrapper">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'container' => false,
                    'menu_class' => 'nav-menu',
                    'walker' => new Salvador_Walker_Nav_Menu(),
                    'fallback_cb' => 'salvador_default_menu'
                ));
                ?>
            </div>
        </div>
    </div>
</nav>

<style>
/* Navigation Styles */
.main-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background-color: var(--color-secondary);
    padding: 1.5rem 0;
    transition: all 0.3s ease;
}

.main-nav.scrolled {
    padding: 0.75rem 0;
    background-color: rgba(26, 26, 46, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: var(--shadow-lg);
}

.nav-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.nav-logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-family: var(--font-playfair);
    font-size: 1.5rem;
    color: var(--color-primary-light);
    transition: var(--transition-base);
}

.nav-logo:hover {
    color: var(--color-accent-contrast);
}

.logo-image {
    height: 40px;
    width: auto;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
    align-items: center;
    margin: 0;
}

.nav-link {
    font-family: var(--font-montserrat);
    font-size: 0.875rem;
    color: var(--color-primary-light);
    position: relative;
    transition: var(--transition-base);
}

.nav-link::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: var(--color-accent-contrast);
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease;
}

.nav-link:hover {
    color: var(--color-accent-contrast);
}

.nav-link:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
}

.nav-item.current-menu-item .nav-link {
    color: var(--color-accent-contrast);
    font-weight: 600;
}

.nav-item.contact-btn .nav-link {
    padding: 0.5rem 1.5rem;
    background-color: var(--color-accent);
    color: white;
    border-radius: 9999px;
    font-weight: 500;
    box-shadow: var(--shadow-md);
}

.nav-item.contact-btn .nav-link::after {
    display: none;
}

.nav-item.contact-btn .nav-link:hover {
    background-color: var(--color-accent-light);
    transform: scale(1.05);
    color: white;
}

/* Mobile Menu Toggle */
.mobile-menu-toggle {
    display: none;
    flex-direction: column;
    gap: 4px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    z-index: 1001;
}

.hamburger-line {
    width: 24px;
    height: 2px;
    background-color: var(--color-primary-light);
    transition: var(--transition-base);
}

/* Mobile Styles */
@media (max-width: 767px) {
    .mobile-menu-toggle {
        display: flex;
    }
    
    .nav-menu-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background-color: rgba(248, 246, 243, 0.98);
        backdrop-filter: blur(10px);
        padding: 6rem 1.5rem 2rem;
        transform: translateY(-100%);
        transition: transform 0.3s ease;
        box-shadow: var(--shadow-xl);
    }
    
    .nav-menu-wrapper.active {
        transform: translateY(0);
    }
    
    .nav-menu {
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
    }
    
    .nav-link {
        color: var(--color-secondary-dark);
        font-size: 1rem;
    }
    
    .nav-item.contact-btn .nav-link {
        width: 100%;
        text-align: center;
    }
    
    .mobile-menu-toggle[aria-expanded="true"] .hamburger-line:nth-child(1) {
        transform: rotate(45deg) translateY(6px);
    }
    
    .mobile-menu-toggle[aria-expanded="true"] .hamburger-line:nth-child(2) {
        opacity: 0;
    }
    
    .mobile-menu-toggle[aria-expanded="true"] .hamburger-line:nth-child(3) {
        transform: rotate(-45deg) translateY(-6px);
    }
}
</style>

<?php
// Default menu fallback
function salvador_default_menu() {
    echo '<ul class="nav-menu">';
    echo '<li class="nav-item"><a href="' . esc_url(home_url('/about')) . '" class="nav-link">About</a></li>';
    echo '<li class="nav-item"><a href="' . esc_url(home_url('/work')) . '" class="nav-link">Work</a></li>';
    echo '<li class="nav-item"><a href="' . esc_url(home_url('/fun-facts')) . '" class="nav-link">Fun Facts</a></li>';
    echo '<li class="nav-item contact-btn"><a href="' . esc_url(home_url('/contact')) . '" class="nav-link">Contact</a></li>';
    echo '</ul>';
}
?>
