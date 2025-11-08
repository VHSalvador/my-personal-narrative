<?php
/**
 * 404 Error Page
 */
get_header();
?>

<main class="error-404-page">
    <div class="container">
        <div class="error-content">
            <div class="error-visual">
                <h1 class="error-code">404</h1>
                <div class="error-icon">
                    <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                </div>
            </div>
            
            <div class="error-text">
                <h2 class="error-title">Page Not Found</h2>
                <p class="error-description">
                    Looks like this page got lost in the digital maze. But don't worry—just like solving a chess puzzle, 
                    we can find our way back!
                </p>
                
                <div class="error-actions">
                    <a href="<?php echo esc_url(home_url('/')); ?>" class="btn btn-primary">
                        Back to Home
                    </a>
                    <a href="<?php echo esc_url(home_url('/contact')); ?>" class="btn btn-outline">
                        Contact Me
                    </a>
                </div>
                
                <div class="helpful-links">
                    <h3 class="helpful-links-title">You might be looking for:</h3>
                    <ul class="links-list">
                        <li><a href="<?php echo esc_url(home_url('/about')); ?>">About Me</a></li>
                        <li><a href="<?php echo esc_url(home_url('/work')); ?>">My Work</a></li>
                        <li><a href="<?php echo esc_url(home_url('/fun-facts')); ?>">Fun Facts</a></li>
                        <li><a href="<?php echo esc_url(home_url('/contact')); ?>">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</main>

<style>
/* 404 Error Page Styles */
.error-404-page {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-primary);
    padding: 8rem 1.5rem 4rem;
}

.error-content {
    max-width: 900px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 3rem;
    align-items: center;
}

.error-visual {
    text-align: center;
}

.error-code {
    font-family: var(--font-playfair);
    font-size: 8rem;
    font-weight: 700;
    color: var(--color-accent);
    line-height: 1;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.error-icon {
    display: flex;
    justify-content: center;
}

.error-icon svg {
    color: var(--color-secondary);
    opacity: 0.3;
}

.error-text {
    text-align: left;
}

.error-title {
    font-family: var(--font-playfair);
    font-size: 2.5rem;
    color: var(--color-secondary);
    margin-bottom: 1rem;
}

.error-description {
    color: var(--color-neutral-dark);
    font-size: 1.125rem;
    line-height: 1.7;
    margin-bottom: 2rem;
}

.error-actions {
    display: flex;
    gap: 1rem;
    margin-bottom: 3rem;
}

.helpful-links {
    padding-top: 2rem;
    border-top: 1px solid rgba(26, 26, 46, 0.1);
}

.helpful-links-title {
    font-family: var(--font-montserrat);
    font-size: 1.125rem;
    color: var(--color-secondary-dark);
    margin-bottom: 1rem;
}

.links-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
}

.links-list li a {
    color: var(--color-accent);
    transition: var(--transition-base);
    display: inline-block;
}

.links-list li a:hover {
    color: var(--color-accent-light);
    transform: translateX(4px);
}

/* Responsive */
@media (max-width: 767px) {
    .error-404-page {
        padding: 6rem 1rem 2rem;
    }
    
    .error-content {
        grid-template-columns: 1fr;
        gap: 2rem;
        text-align: center;
    }
    
    .error-code {
        font-size: 6rem;
    }
    
    .error-title {
        font-size: 2rem;
    }
    
    .error-text {
        text-align: center;
    }
    
    .error-actions {
        flex-direction: column;
    }
    
    .btn {
        width: 100%;
    }
    
    .links-list {
        grid-template-columns: 1fr;
    }
}
</style>

<?php get_footer(); ?>
