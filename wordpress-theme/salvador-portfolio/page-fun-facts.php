<?php
/**
 * Template Name: Fun Facts Page
 */
get_header();
?>

<main class="fun-facts-page">
    <div class="container pt-32 pb-20">
        
        <header class="page-header animate-fade-up">
            <h1 class="page-title">Fun Facts About Me</h1>
            <p class="page-subtitle">Beyond the resume—here's what makes me, me.</p>
        </header>
        
        <div class="facts-grid">
            
            <div class="fact-card animate-fade-up">
                <div class="fact-image">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/plant-parent.png" 
                         alt="Plant-filled room representing Salvador's love for nurturing growth" 
                         loading="lazy">
                </div>
                <h3 class="fact-title">Plant Parent 🌱</h3>
                <p class="fact-description">
                    I take care of over 15 indoor plants. Watching them grow reminds me that progress, whether in plants or people, 
                    requires patience, consistency, and the right environment. Each plant has its own personality—just like every student I teach.
                </p>
            </div>
            
            <div class="fact-card animate-fade-up">
                <div class="fact-image">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/chess-coach.png" 
                         alt="Chess board scene representing strategic thinking and mentorship" 
                         loading="lazy">
                </div>
                <h3 class="fact-title">Chess Coach ♟️</h3>
                <p class="fact-description">
                    I fell in love with chess not because of the strategy, but because of the stories behind every move. 
                    Each game is a puzzle where creativity meets logic—and that's exactly how I approach teaching and problem-solving.
                </p>
            </div>
            
            <div class="fact-card animate-fade-up">
                <div class="fact-image">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/green-tea.png" 
                         alt="Peaceful green tea setup representing mindful morning rituals" 
                         loading="lazy">
                </div>
                <h3 class="fact-title">Green Tea Ritual 🍵</h3>
                <p class="fact-description">
                    Every morning starts with a cup of green tea. It's my moment of calm before diving into a busy day of tutoring, 
                    coding, and community management. This simple ritual helps me stay grounded and focused.
                </p>
            </div>
            
            <div class="fact-card animate-fade-up">
                <div class="fact-image">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/community-builder.png" 
                         alt="Digital community connections representing online community building" 
                         loading="lazy">
                </div>
                <h3 class="fact-title">Community Builder 👥</h3>
                <p class="fact-description">
                    From managing a 10,000-member perfume enthusiast group to mentoring students, I thrive on bringing people together. 
                    Building communities isn't just about numbers—it's about creating spaces where people feel heard, valued, and inspired.
                </p>
            </div>
            
            <div class="fact-card animate-fade-up">
                <div class="fact-image">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/problem-solver.png" 
                         alt="Technology workspace representing problem-solving and innovation" 
                         loading="lazy">
                </div>
                <h3 class="fact-title">Problem Solver 🔧</h3>
                <p class="fact-description">
                    Whether it's automating workflows with n8n and Zapier or helping a student finally understand calculus, 
                    I love untangling complex problems. The satisfaction of finding elegant solutions never gets old.
                </p>
            </div>
            
            <div class="fact-card animate-fade-up">
                <div class="fact-image">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/lifelong-learner.png" 
                         alt="Books and learning materials representing continuous education" 
                         loading="lazy">
                </div>
                <h3 class="fact-title">Lifelong Learner 📚</h3>
                <p class="fact-description">
                    From mastering Japanese (N3 level) to exploring AI automation, I believe that curiosity is the key to growth. 
                    Learning isn't just about acquiring knowledge—it's about staying adaptable and open to new perspectives.
                </p>
            </div>
            
        </div>
    </div>
</main>

<style>
/* Fun Facts Page Styles */
.fun-facts-page {
    background-color: var(--color-primary);
    min-height: 100vh;
}

.page-header {
    text-align: center;
    margin-bottom: 3rem;
}

.page-title {
    font-family: var(--font-playfair);
    font-size: 3rem;
    color: var(--color-secondary);
    margin-bottom: 1rem;
}

.page-subtitle {
    font-size: 1.25rem;
    color: var(--color-neutral-dark);
}

.facts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.fact-card {
    background-color: var(--color-primary-light);
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: var(--shadow-md);
    transition: var(--transition-base);
}

.fact-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-xl);
}

.fact-image {
    width: 100%;
    height: 250px;
    overflow: hidden;
}

.fact-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition-base);
}

.fact-card:hover .fact-image img {
    transform: scale(1.05);
}

.fact-title {
    font-family: var(--font-montserrat);
    font-size: 1.5rem;
    color: var(--color-secondary-dark);
    padding: 1.5rem 1.5rem 0.5rem;
    margin: 0;
}

.fact-description {
    padding: 0 1.5rem 1.5rem;
    color: var(--color-neutral-dark);
    line-height: 1.7;
    margin: 0;
}

/* Responsive */
@media (max-width: 767px) {
    .page-title {
        font-size: 2rem;
    }
    
    .page-subtitle {
        font-size: 1rem;
    }
    
    .facts-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
}
</style>

<?php get_footer(); ?>
