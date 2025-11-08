<?php get_header(); ?>

<main class="home-page">
    <!-- Hero Section -->
    <section class="hero-section">
        <!-- Mobile Floating Action Button -->
        <a href="<?php echo esc_url(home_url('/contact')); ?>" class="mobile-fab" aria-label="Contact me">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
        </a>
        
        <div class="container">
            <div class="hero-grid">
                <!-- Left Column: Content -->
                <div class="hero-content animate-fade-up">
                    <span class="hero-tagline">CURIOUS MIND, ADAPTIVE SPIRIT</span>
                    
                    <h1 class="hero-title">
                        <span class="title-emphasis">I grow, therefore I am.</span>
                    </h1>
                    
                    <p class="hero-description">
                        On my first day teaching chess, I realized that breakthrough moments happen when complex ideas become simple. 
                        As a business IT student at Corvinus University with <strong>10+ students coached</strong> and a 
                        <a href="https://www.facebook.com/groups/364356162784165" target="_blank" rel="noopener noreferrer" class="community-link">
                            10,000 member community owner
                        </a>,
                        I turn confusion into confidence through technology and connection.
                    </p>
                    
                    <div class="hero-buttons">
                        <a href="<?php echo esc_url(home_url('/about')); ?>" class="btn btn-primary">
                            Learn More About Me
                        </a>
                        <a href="<?php echo esc_url(home_url('/contact')); ?>" class="btn btn-outline">
                            Get in Touch
                        </a>
                    </div>
                    
                    <!-- Testimonial -->
                    <div class="testimonial-box">
                        <p class="testimonial-quote">
                            "Salvador turned my fear of math into confidence during the teaching sessions. His teaching style makes everything click!"
                        </p>
                        <p class="testimonial-author">— Tomi, High School Student</p>
                    </div>
                </div>
                
                <!-- Right Column: Image -->
                <div class="hero-image animate-fade-up">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/hero-portrait.png" 
                         alt="Salvador Villarroel - Business IT Student and Educator" 
                         loading="lazy">
                </div>
            </div>
        </div>
    </section>
</main>

<style>
/* Hero Section */
.hero-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-primary);
    padding: 8rem 1.5rem 2.5rem;
    position: relative;
}

.mobile-fab {
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
    z-index: 40;
    display: none;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    background-color: var(--color-accent);
    border-radius: 50%;
    box-shadow: var(--shadow-lg);
    transition: var(--transition-base);
    animation: scaleIn 0.5s ease-out 1s forwards;
    opacity: 0;
}

.mobile-fab:hover {
    background-color: var(--color-accent-light);
    transform: scale(1.1);
}

.mobile-fab svg {
    color: white;
}

.hero-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
    max-width: 1280px;
    margin: 0 auto;
    width: 100%;
}

.hero-content {
    text-align: left;
    animation-delay: 0s;
}

.hero-tagline {
    display: inline-block;
    font-family: var(--font-montserrat);
    color: var(--color-secondary-dark);
    margin-bottom: 1rem;
    letter-spacing: 0.1em;
    font-size: 0.875rem;
    font-weight: 500;
}

.hero-title {
    font-family: var(--font-playfair);
    font-size: 3rem;
    color: var(--color-secondary);
    margin-bottom: 1.5rem;
    line-height: 1.2;
}

.title-emphasis {
    font-weight: 700;
    color: #1e3a8a;
}

.hero-description {
    font-family: var(--font-inter);
    color: var(--color-neutral-dark);
    font-size: 1.125rem;
    line-height: 1.7;
    margin-bottom: 2rem;
}

.community-link {
    font-weight: 700;
    color: #1e3a8a;
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 2px;
    transition: var(--transition-base);
}

.community-link:hover {
    color: #1e40af;
}

.hero-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 2rem;
}

.testimonial-box {
    background-color: var(--color-primary-light);
    padding: 1.5rem;
    border-radius: 0.5rem;
    border-left: 4px solid var(--color-accent-contrast);
    margin-top: 5rem;
}

.testimonial-quote {
    color: var(--color-neutral-dark);
    font-style: italic;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
}

.testimonial-author {
    color: var(--color-secondary-dark);
    font-family: var(--font-montserrat);
    font-size: 0.875rem;
    margin: 0;
}

.hero-image {
    position: relative;
    aspect-ratio: 3/4;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    animation-delay: 0.3s;
}

.hero-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
    box-shadow: var(--shadow-2xl);
    transition: var(--transition-base);
}

.hero-image img:hover {
    box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.3);
}

/* Responsive */
@media (max-width: 767px) {
    .mobile-fab {
        display: flex;
    }
    
    .hero-section {
        padding: 10rem 1rem 2.5rem;
    }
    
    .hero-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .hero-title {
        font-size: 2rem;
    }
    
    .hero-description {
        font-size: 1rem;
    }
    
    .hero-buttons {
        flex-direction: column;
    }
    
    .btn {
        width: 100%;
        text-align: center;
    }
}

@media (min-width: 768px) and (max-width: 1023px) {
    .hero-title {
        font-size: 2.5rem;
    }
}
</style>

<?php get_footer(); ?>
