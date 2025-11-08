<?php
/**
 * Template Name: Contact Page
 */
get_header();
?>

<main class="contact-page">
    <div class="container pt-32 pb-20">
        
        <div class="contact-grid animate-fade-up">
            
            <!-- Left Column: Image -->
            <div class="contact-image">
                <img src="<?php echo get_template_directory_uri(); ?>/images/about-photo.jpg" 
                     alt="Salvador Villarroel - Get in touch" 
                     loading="lazy">
            </div>
            
            <!-- Right Column: Contact Info -->
            <div class="contact-info">
                <h1 class="contact-title">Let's Connect</h1>
                <p class="contact-description">
                    I'm always open to new opportunities and connections. Feel free to reach out!
                </p>
                
                <div class="contact-methods">
                    <a href="tel:+36308601718" class="contact-method">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        <span>+36 30 860 1718</span>
                    </a>
                    
                    <a href="mailto:salvador.vh05@gmail.com" class="contact-method">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        <span>salvador.vh05@gmail.com</span>
                    </a>
                    
                    <a href="https://www.linkedin.com/in/villarroel-hektor-salvador-45080732b/" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       class="contact-method">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                        <span>LinkedIn Profile</span>
                    </a>
                    
                    <a href="https://github.com/VHSalvador" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       class="contact-method">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                        <span>GitHub Profile</span>
                    </a>
                </div>
            </div>
        </div>
        
        <!-- Calendar/Booking Section -->
        <div class="booking-section animate-fade-up">
            <h2 class="booking-title">Schedule a Meeting</h2>
            <p class="booking-description">
                Book a 15-minute consultation to discuss how I can help with tutoring, community building, or technical solutions.
            </p>
            
            <!-- Add your booking integration here -->
            <div class="booking-placeholder">
                <!-- Option 1: Calendly Embed -->
                <!-- 
                <div class="calendly-inline-widget" 
                     data-url="https://calendly.com/your-calendly-link" 
                     style="min-width:320px;height:630px;">
                </div>
                <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
                -->
                
                <!-- Option 2: Contact Form 7 Shortcode -->
                <!-- <?php echo do_shortcode('[contact-form-7 id="YOUR_FORM_ID" title="Contact form 1"]'); ?> -->
                
                <!-- Option 3: Simple Booking Form Placeholder -->
                <form class="simple-booking-form">
                    <div class="form-group">
                        <label for="name">Your Name</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Your Email</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="date">Preferred Date</label>
                        <input type="date" id="date" name="date" required>
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" name="message" rows="4"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Request Meeting</button>
                </form>
            </div>
        </div>
        
    </div>
</main>

<style>
/* Contact Page Styles */
.contact-page {
    background-color: var(--color-primary);
    min-height: 100vh;
}

.contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: start;
    margin-bottom: 4rem;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
}

.contact-image {
    position: relative;
    aspect-ratio: 1;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: var(--shadow-xl);
}

.contact-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.contact-info {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.contact-title {
    font-family: var(--font-playfair);
    font-size: 3rem;
    color: var(--color-secondary);
    margin-bottom: 0;
}

.contact-description {
    color: var(--color-neutral-dark);
    font-size: 1.125rem;
}

.contact-methods {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.contact-method {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: var(--color-secondary);
    padding: 0.75rem;
    border-radius: 0.5rem;
    transition: var(--transition-base);
}

.contact-method:hover {
    background-color: rgba(26, 26, 46, 0.05);
    color: var(--color-secondary-dark);
}

.contact-method svg {
    flex-shrink: 0;
}

/* Booking Section */
.booking-section {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
}

.booking-title {
    font-family: var(--font-playfair);
    font-size: 2.5rem;
    color: var(--color-secondary);
    margin-bottom: 1rem;
}

.booking-description {
    color: var(--color-neutral-dark);
    font-size: 1.125rem;
    margin-bottom: 2rem;
}

.booking-placeholder {
    background-color: var(--color-primary-light);
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: var(--shadow-md);
}

/* Simple Booking Form */
.simple-booking-form {
    max-width: 600px;
    margin: 0 auto;
    text-align: left;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    font-family: var(--font-montserrat);
    font-weight: 500;
    color: var(--color-secondary-dark);
    margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid rgba(26, 26, 46, 0.2);
    border-radius: 0.5rem;
    font-family: var(--font-inter);
    font-size: 1rem;
    transition: var(--transition-fast);
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--color-accent);
    box-shadow: 0 0 0 3px rgba(232, 116, 97, 0.1);
}

.simple-booking-form .btn {
    width: 100%;
    margin-top: 1rem;
}

/* Responsive */
@media (max-width: 767px) {
    .contact-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .contact-title {
        font-size: 2rem;
    }
    
    .booking-title {
        font-size: 1.75rem;
    }
    
    .booking-placeholder {
        padding: 1.5rem;
    }
}
</style>

<?php get_footer(); ?>
