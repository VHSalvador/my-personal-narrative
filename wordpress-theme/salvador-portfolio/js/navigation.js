/**
 * Navigation JavaScript
 */

(function($) {
    'use strict';
    
    $(document).ready(function() {
        // Scroll effect for navigation
        const nav = $('#main-navigation');
        
        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 50) {
                nav.addClass('scrolled');
            } else {
                nav.removeClass('scrolled');
            }
        });
        
        // Mobile menu toggle
        const menuToggle = $('.mobile-menu-toggle');
        const menuWrapper = $('.nav-menu-wrapper');
        
        menuToggle.on('click', function() {
            const isExpanded = $(this).attr('aria-expanded') === 'true';
            $(this).attr('aria-expanded', !isExpanded);
            menuWrapper.toggleClass('active');
            $('body').toggleClass('menu-open');
        });
        
        // Close mobile menu on link click
        $('.nav-link').on('click', function() {
            if (window.innerWidth < 768) {
                menuToggle.attr('aria-expanded', 'false');
                menuWrapper.removeClass('active');
                $('body').removeClass('menu-open');
            }
        });
        
        // Close mobile menu on outside click
        $(document).on('click', function(e) {
            if (!$(e.target).closest('.nav-wrapper').length && menuWrapper.hasClass('active')) {
                menuToggle.attr('aria-expanded', 'false');
                menuWrapper.removeClass('active');
                $('body').removeClass('menu-open');
            }
        });
        
        // Smooth scroll for anchor links
        $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').on('click', function(e) {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && 
                location.hostname === this.hostname) {
                
                let target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                
                if (target.length) {
                    e.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top - 80
                    }, 800);
                }
            }
        });
        
        // Active menu item highlight
        const currentPath = window.location.pathname;
        $('.nav-link').each(function() {
            const linkPath = $(this).attr('href');
            if (linkPath && currentPath.includes(linkPath) && linkPath !== '/') {
                $(this).parent('.nav-item').addClass('current-menu-item');
            }
        });
    });
    
})(jQuery);
