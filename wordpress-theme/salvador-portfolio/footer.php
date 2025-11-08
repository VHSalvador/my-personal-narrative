<footer class="site-footer">
    <div class="container">
        <!-- CTA Section -->
        <div class="footer-cta">
            <h3 class="cta-title">Ready to collaborate? Let's talk.</h3>
            <p class="cta-description">
                Whether you need tutoring, community building, or technical solutions, I'm here to help you succeed.
            </p>
            <a href="<?php echo esc_url(home_url('/contact')); ?>" class="btn btn-primary">
                Schedule a 15-min Call
            </a>
        </div>
        
        <!-- Footer Grid -->
        <div class="footer-grid">
            <!-- Column 1: About -->
            <div class="footer-column">
                <div class="footer-brand">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/logo.png" alt="Salvador Villarroel Logo" class="footer-logo">
                    <h3 class="footer-title">Salvador Villarroel</h3>
                </div>
                <nav class="footer-nav">
                    <a href="<?php echo esc_url(home_url('/about')); ?>">About</a>
                    <a href="<?php echo esc_url(home_url('/work')); ?>">Work</a>
                    <a href="<?php echo esc_url(home_url('/contact')); ?>">Contact</a>
                </nav>
            </div>
            
            <!-- Column 2: Connect -->
            <div class="footer-column">
                <h3 class="footer-title">Connect</h3>
                <div class="social-links">
                    <a href="https://github.com/VHSalvador" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/villarroel-hektor-salvador-45080732b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                    </a>
                    <a href="mailto:salvador.vh05@gmail.com" aria-label="Email Contact">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                    </a>
                </div>
            </div>
            
            <!-- Column 3: Highlights -->
            <div class="footer-column">
                <h3 class="footer-title">Highlights</h3>
                <div class="footer-highlights">
                    <p class="highlight-item">10+ Students Coached</p>
                    <p class="highlight-item">10,000 Community Members</p>
                    <p class="highlight-quote">"Challenges are opportunities in disguise."</p>
                </div>
            </div>
        </div>
        
        <!-- Copyright -->
        <div class="footer-copyright">
            <p>&copy; <?php echo date('Y'); ?> Salvador Villarroel. All rights reserved.</p>
        </div>
    </div>
</footer>

<style>
/* Footer Styles */
.site-footer {
    background-color: var(--color-secondary);
    border-top: 1px solid rgba(248, 246, 243, 0.1);
    color: var(--color-primary-muted);
}

.footer-cta {
    text-align: center;
    padding: 3rem 0;
    margin-bottom: 3rem;
    border-bottom: 1px solid rgba(248, 246, 243, 0.1);
}

.cta-title {
    font-family: var(--font-playfair);
    font-size: 2rem;
    color: var(--color-primary-light);
    margin-bottom: 1rem;
}

.cta-description {
    color: var(--color-primary-muted);
    max-width: 600px;
    margin: 0 auto 1.5rem;
}

.footer-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;
    padding: 3rem 0;
}

.footer-column {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.footer-brand {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
}

.footer-logo {
    height: 40px;
    width: auto;
}

.footer-title {
    font-family: var(--font-playfair);
    font-size: 1.25rem;
    color: var(--color-primary-light);
    margin: 0;
}

.footer-nav {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.footer-nav a {
    color: var(--color-primary-muted);
    transition: var(--transition-base);
}

.footer-nav a:hover {
    color: var(--color-primary-light);
}

.social-links {
    display: flex;
    gap: 1rem;
}

.social-links a {
    color: var(--color-primary-muted);
    transition: var(--transition-base);
}

.social-links a:hover {
    color: var(--color-primary-light);
    transform: scale(1.1);
}

.footer-highlights {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.highlight-item {
    font-size: 0.875rem;
    color: var(--color-primary-muted);
}

.highlight-quote {
    font-size: 0.875rem;
    color: var(--color-primary-muted);
    font-style: italic;
    margin-top: 0.5rem;
}

.footer-copyright {
    text-align: center;
    padding: 2rem 0;
    border-top: 1px solid rgba(248, 246, 243, 0.1);
}

.footer-copyright p {
    color: var(--color-primary-muted);
    font-size: 0.875rem;
    margin: 0;
}

@media (max-width: 767px) {
    .footer-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .cta-title {
        font-size: 1.5rem;
    }
}
</style>

<?php wp_footer(); ?>
</body>
</html>
