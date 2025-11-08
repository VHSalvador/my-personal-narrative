/**
 * Animation JavaScript
 */

(function($) {
    'use strict';
    
    $(document).ready(function() {
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Observe all elements with animation classes
        const animatedElements = document.querySelectorAll('.animate-fade-up, .animate-fade-in, .animate-scale-in');
        animatedElements.forEach(function(element) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
            observer.observe(element);
        });
        
        // Staggered animation for grids
        $('.metrics-grid .metric-card, .passions-grid .passion-card').each(function(index) {
            $(this).css({
                'animation-delay': (index * 0.1) + 's',
                'opacity': '0',
                'transform': 'translateY(20px)'
            });
            
            $(this).animate({
                opacity: 1
            }, {
                duration: 500,
                queue: false,
                step: function(now) {
                    $(this).css('opacity', now);
                }
            });
            
            setTimeout(() => {
                $(this).css('transform', 'translateY(0)');
            }, index * 100);
        });
        
        // Hover effects for cards
        $('.passion-card, .metric-card, .fact-card').hover(
            function() {
                $(this).css('transform', 'scale(1.05)');
            },
            function() {
                $(this).css('transform', 'scale(1)');
            }
        );
        
        // Parallax effect for hero image (desktop only)
        if (window.innerWidth > 768) {
            $(window).on('scroll', function() {
                const scrolled = $(window).scrollTop();
                $('.hero-image img').css('transform', 'translateY(' + (scrolled * 0.3) + 'px)');
            });
        }
        
        // Counter animation for metrics
        function animateCounter(element, target) {
            const duration = 2000;
            const start = 0;
            const increment = target / (duration / 16);
            let current = start;
            
            const timer = setInterval(function() {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                $(element).text(Math.floor(current));
            }, 16);
        }
        
        // Trigger counter animation when metrics are visible
        const metricsObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const value = $(entry.target).find('.metric-value');
                    const target = parseInt(value.text().replace(/\D/g, ''));
                    if (!isNaN(target)) {
                        animateCounter(value, target);
                    }
                    metricsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        $('.metric-card').each(function() {
            metricsObserver.observe(this);
        });
    });
    
})(jQuery);
