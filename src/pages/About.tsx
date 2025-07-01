
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const About = () => {
  return <>
      <main className="bg-primary min-h-screen">
        <Navigation />
        <div className="container mx-auto px-6 pt-32">
          <section className="max-w-4xl mx-auto space-y-12">
            {/* Who I Am Section with Story Hook */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} className="space-y-6">
              <h1 className="font-playfair text-4xl md:text-5xl text-secondary">
                Who I Am
              </h1>
              
              {/* Story Hook */}
              <div className="bg-accent-contrast/10 p-6 rounded-lg border-l-4 border-accent-contrast mb-8">
                <p className="text-neutral-dark leading-relaxed italic text-lg">
                  "On my first day teaching chess, I watched a 12-year-old stare at the board for ten minutes, 
                  completely frozen. Then I asked one simple question: 'What if this knight was your friend trying 
                  to get home?' Suddenly, her whole face lit up, and she made her first strategic move. That moment 
                  taught me that the best learning happens when complex ideas become simple stories."
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <img src="/lovable-uploads/4184ae2e-ba7e-48c4-980c-add4e9f3cfa3.jpg" alt="Salvador Villarroel - Educator and Tech Enthusiast" className="rounded-lg shadow-lg w-full h-[400px] object-cover object-top hover:shadow-xl transition-shadow duration-300" loading="lazy" />
                <div className="space-y-4">
                  <p className="text-neutral-dark leading-relaxed">
                    As a 20-year-old business IT student at Corvinus University, I bring together a unique blend of 
                    Hungarian-Bolivian heritage and a passion for connecting technology with human experience. My journey 
                    is shaped by my multilingual abilities (English C1, Japanese N3) and a deep curiosity about making 
                    the complex simple.
                  </p>
                  <p className="text-neutral-dark leading-relaxed">
                    Whether I'm teaching math to eager students, coaching chess moves, or scaling climbing walls, 
                    I'm constantly seeking ways to challenge myself and help others grow. My mornings begin with the 
                    peaceful ritual of green tea, setting the tone for days filled with learning and creation.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Experience Section with Metrics */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} className="space-y-6 pt-12">
              <h2 className="font-playfair text-3xl md:text-4xl text-secondary">
                Experience & Impact
              </h2>
              
              {/* Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-4 bg-primary-light rounded-lg hover:shadow-md transition-shadow duration-300">
                  <div className="text-2xl font-bold text-accent-contrast">10+</div>
                  <div className="text-sm text-neutral-dark">Students Coached</div>
                </div>
                <div className="text-center p-4 bg-primary-light rounded-lg hover:shadow-md transition-shadow duration-300">
                  <div className="text-2xl font-bold text-accent-contrast">10,000</div>
                  <div className="text-sm text-neutral-dark">Community Members</div>
                </div>
                <div className="text-center p-4 bg-primary-light rounded-lg hover:shadow-md transition-shadow duration-300">
                  <div className="text-2xl font-bold text-accent-contrast">4+</div>
                  <div className="text-sm text-neutral-dark">Years Teaching</div>
                </div>
                <div className="text-center p-4 bg-primary-light rounded-lg hover:shadow-md transition-shadow duration-300">
                  <div className="text-2xl font-bold text-accent-contrast">3</div>
                  <div className="text-sm text-neutral-dark">Languages</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="font-montserrat text-xl text-secondary-dark">
                    Teaching & Mentorship
                  </h3>
                  <p className="text-neutral-dark leading-relaxed">
                    With four years of mathematics teaching and a year of chess coaching under my belt, I've helped 
                    over 10 students transform their relationship with learning. My approach focuses on building 
                    confidence through understanding, not memorization. Students consistently improve their grades 
                    by 1-2 grades by the first year.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="font-montserrat text-xl text-secondary-dark">
                    Community & Entrepreneurship
                  </h3>
                  <p className="text-neutral-dark leading-relaxed">
                    From growing a perfume enthusiast Facebook group to 10,000 members to managing online 
                    communities with hundreds of active participants, I've demonstrated my ability to build and 
                    nurture thriving digital spaces. My ventures in e-commerce and service provision have generated 
                    consistent revenue while teaching me valuable business skills.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Passions Section with Hover Effects */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.4
          }} className="space-y-6 pt-12 pb-20">
              <h2 className="font-playfair text-3xl md:text-4xl text-secondary">
                Passions & Interests
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="group space-y-4 hover:transform hover:scale-105 transition-all duration-300">
                  <img src="https://images.unsplash.com/photo-1501854140801-50d01698950b" alt="Wall climbing representing physical and mental challenges" className="rounded-lg shadow-lg w-full h-[200px] object-cover group-hover:shadow-xl transition-shadow duration-300" loading="lazy" />
                  <h3 className="font-montserrat text-xl text-secondary-dark">
                    Wall Climbing & Sports
                  </h3>
                  <p className="text-neutral-dark leading-relaxed">
                    Wall climbing challenges me both <strong>physically</strong> and <strong>mentally</strong>, teaching me the value of <strong>persistence</strong> 
                    and strategic thinking. My background in ice skating and roller skating has instilled a love 
                    for dynamic movement and <strong>continuous improvement</strong>.
                  </p>
                </div>
                <div className="group space-y-4 hover:transform hover:scale-105 transition-all duration-300">
                  <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" alt="Technology and collaboration in learning environments" className="rounded-lg shadow-lg w-full h-[200px] object-cover group-hover:shadow-xl transition-shadow duration-300" loading="lazy" />
                  <h3 className="font-montserrat text-xl text-secondary-dark">
                    Technology & AI
                  </h3>
                  <p className="text-neutral-dark leading-relaxed">
                    I specialize in <strong>building AI agents</strong> and <strong>automated workflows</strong> that help businesses streamline 
                    their operations. My expertise lies in using <strong>n8n</strong> and <strong>Zapier</strong> to create powerful integrations 
                    and automations through various <strong>APIs</strong>. I'm also proficient in <strong>SQL</strong>, <strong>Python</strong>, and <strong>C#</strong>, 
                    constantly learning and adapting to new technological developments that can solve real-world problems.
                  </p>
                </div>
                <div className="group space-y-4 hover:transform hover:scale-105 transition-all duration-300">
                  <img src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" alt="Creative workspace representing innovation and professional growth" className="rounded-lg shadow-lg w-full h-[200px] object-cover group-hover:shadow-xl transition-shadow duration-300" loading="lazy" />
                  <h3 className="font-montserrat text-xl text-secondary-dark">
                    Creative Pursuits
                  </h3>
                  <p className="text-neutral-dark leading-relaxed">
                    From building <strong>online communities</strong> to perfume collecting, I find joy in exploring <strong>sensory 
                    experiences</strong> and human connections. These creative outlets complement my technical work and 
                    help maintain a <strong>balanced perspective</strong> on life and learning.
                  </p>
                </div>
              </div>
            </motion.div>
          </section>
        </div>
      </main>
      <Footer />
    </>;
};

export default About;
