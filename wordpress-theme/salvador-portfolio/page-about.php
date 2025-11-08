<?php
/**
 * Template Name: About Page
 */
get_header();
?>

<main class="about-page">
    <div class="container pt-32">
        <section class="about-content">
            
            <!-- Story Hook -->
            <div class="story-hook animate-fade-up">
                <h1 class="page-title">Who I Am</h1>
                
                <div class="story-box">
                    <p class="story-text">
                        "On my first day teaching chess, I watched a 12-year-old stare at the board for ten minutes, 
                        completely frozen. Then I asked one simple question: 'What if this knight was your friend trying 
                        to get home?' Suddenly, her whole face lit up, and she made her first strategic move. That moment 
                        taught me that the best learning happens when complex ideas become simple stories."
                    </p>
                </div>
                
                <div class="bio-grid">
                    <div class="bio-image">
                        <img src="<?php echo get_template_directory_uri(); ?>/images/about-photo.jpg" 
                             alt="Salvador Villarroel - Educator and Tech Enthusiast" 
                             loading="lazy">
                    </div>
                    <div class="bio-text">
                        <p>
                            As a 20-year-old business IT student at Corvinus University, I bring together a unique blend of 
                            Hungarian-Bolivian heritage and a passion for connecting technology with human experience. My journey 
                            is shaped by my multilingual abilities (English C1, Japanese N3) and a deep curiosity about making 
                            the complex simple.
                        </p>
                        <p>
                            Whether I'm teaching math to eager students, coaching chess moves, or scaling climbing walls, 
                            I'm constantly seeking ways to challenge myself and help others grow. My mornings begin with the 
                            peaceful ritual of green tea, setting the tone for days filled with learning and creation.
                        </p>
                    </div>
                </div>
            </div>
            
            <!-- Metrics Grid -->
            <div class="metrics-section animate-fade-up">
                <h2 class="section-title">Experience & Impact</h2>
                
                <div class="metrics-grid">
                    <div class="metric-card">
                        <div class="metric-value">10+</div>
                        <div class="metric-label">Students Coached</div>
                    </div>
                    <div class="metric-card">
                        <div class="metric-value">10,000</div>
                        <div class="metric-label">Community Members</div>
                    </div>
                    <div class="metric-card">
                        <div class="metric-value">4+</div>
                        <div class="metric-label">Years Teaching</div>
                    </div>
                    <div class="metric-card">
                        <div class="metric-value">3</div>
                        <div class="metric-label">Languages</div>
                    </div>
                </div>
                
                <!-- Experience Details -->
                <div class="experience-grid">
                    <div class="experience-item">
                        <h3 class="experience-title">Teaching & Mentorship</h3>
                        <p>
                            With four years of mathematics teaching and a year of chess coaching under my belt, I've helped 
                            over 10 students transform their relationship with learning. My approach focuses on building 
                            confidence through understanding, not memorization. Students consistently improve their grades 
                            by 1-2 grades by the first year.
                        </p>
                    </div>
                    <div class="experience-item">
                        <h3 class="experience-title">Community & Entrepreneurship</h3>
                        <p>
                            From growing a perfume enthusiast Facebook group to 10,000 members to managing online 
                            communities with hundreds of active participants, I've demonstrated my ability to build and 
                            nurture thriving digital spaces. My ventures in e-commerce and service provision have generated 
                            consistent revenue while teaching me valuable business skills.
                        </p>
                    </div>
                </div>
            </div>
            
            <!-- Passions Section -->
            <div class="passions-section animate-fade-up">
                <h2 class="section-title">Passions & Interests</h2>
                
                <div class="passions-grid">
                    <div class="passion-card">
                        <div class="passion-image">
                            <img src="https://images.unsplash.com/photo-1501854140801-50d01698950b" 
                                 alt="Wall climbing representing physical and mental challenges" 
                                 loading="lazy">
                        </div>
                        <h3 class="passion-title">Wall Climbing & Sports</h3>
                        <p>
                            Wall climbing challenges me both <strong>physically</strong> and <strong>mentally</strong>, teaching me the value of <strong>persistence</strong> 
                            and strategic thinking. My background in ice skating and roller skating has instilled a love 
                            for dynamic movement and <strong>continuous improvement</strong>.
                        </p>
                    </div>
                    
                    <div class="passion-card">
                        <div class="passion-image">
                            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                                 alt="Technology and collaboration in learning environments" 
                                 loading="lazy">
                        </div>
                        <h3 class="passion-title">Technology & AI</h3>
                        <p>
                            I specialize in <strong>building AI agents</strong> and <strong>automated workflows</strong> that help businesses streamline 
                            their operations. My expertise lies in using <strong>n8n</strong> and <strong>Zapier</strong> to create powerful integrations 
                            and automations through various <strong>APIs</strong>. I'm also proficient in <strong>SQL</strong>, <strong>Python</strong>, and <strong>C#</strong>, 
                            constantly learning and adapting to new technological developments that can solve real-world problems.
                        </p>
                    </div>
                    
                    <div class="passion-card">
                        <div class="passion-image">
                            <img src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" 
                                 alt="Creative workspace representing innovation and professional growth" 
                                 loading="lazy">
                        </div>
                        <h3 class="passion-title">Creative Pursuits</h3>
                        <p>
                            From building <strong>online communities</strong> to perfume collecting, I find joy in exploring <strong>sensory 
                            experiences</strong> and human connections. These creative outlets complement my technical work and 
                            help maintain a <strong>balanced perspective</strong> on life and learning.
                        </p>
                    </div>
                </div>
            </div>
            
        </section>
    </div>
</main>

<?php get_footer(); ?>
