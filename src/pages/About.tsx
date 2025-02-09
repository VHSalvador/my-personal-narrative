
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <main className="bg-primary min-h-screen">
        <Navigation />
        <div className="container mx-auto px-6 pt-32">
          <section className="max-w-4xl mx-auto space-y-12 animate-fade-up">
            {/* Who I Am Section */}
            <div className="space-y-6">
              <h1 className="font-playfair text-4xl md:text-5xl text-secondary">
                Who I Am
              </h1>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  alt="Profile"
                  className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                />
                <div className="space-y-4">
                  <p className="text-neutral-dark leading-relaxed">
                    As a 20-year-old business IT student at Corvinus University, I bring together a unique blend of Hungarian-Spanish heritage and a passion for connecting technology with human experience. My journey is shaped by my multilingual abilities (English C1, Japanese N3) and a deep curiosity about the intersection of technology and human potential.
                  </p>
                  <p className="text-neutral-dark leading-relaxed">
                    Whether I'm teaching math to eager students, coaching chess moves, or scaling climbing walls, I'm constantly seeking ways to challenge myself and help others grow. My mornings begin with the peaceful ritual of green tea, setting the tone for days filled with learning and creation.
                  </p>
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div className="space-y-6 pt-12">
              <h2 className="font-playfair text-3xl md:text-4xl text-secondary">
                Experience & Skills
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="font-montserrat text-xl text-secondary-dark">
                    Teaching & Mentorship
                  </h3>
                  <p className="text-neutral-dark leading-relaxed">
                    With four years of mathematics teaching and a year of chess coaching under my belt, I've developed a knack for breaking down complex concepts into digestible pieces. This experience has honed my communication skills and patience, making me an effective bridge between technical concepts and practical understanding.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="font-montserrat text-xl text-secondary-dark">
                    Entrepreneurial Spirit
                  </h3>
                  <p className="text-neutral-dark leading-relaxed">
                    From managing a Minecraft server with over 100 members to growing a perfume enthusiast Facebook group to 6,000+ members, I've demonstrated my ability to build and nurture communities. My side ventures in land mowing, rare shoe trading, and website creation showcase my eye for opportunities and execution abilities.
                  </p>
                </div>
              </div>
            </div>

            {/* Passions Section */}
            <div className="space-y-6 pt-12">
              <h2 className="font-playfair text-3xl md:text-4xl text-secondary">
                Passions & Interests
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1501854140801-50d01698950b"
                    alt="Nature"
                    className="rounded-lg shadow-lg w-full h-[200px] object-cover"
                  />
                  <h3 className="font-montserrat text-xl text-secondary-dark">
                    Wall Climbing & Sports
                  </h3>
                  <p className="text-neutral-dark leading-relaxed">
                    Wall climbing challenges me both physically and mentally, teaching me the value of persistence and strategic thinking. My background in ice skating and roller skating has instilled a love for dynamic movement and continuous improvement.
                  </p>
                </div>
                <div className="space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                    alt="Technology"
                    className="rounded-lg shadow-lg w-full h-[200px] object-cover"
                  />
                  <h3 className="font-montserrat text-xl text-secondary-dark">
                    Technology & AI
                  </h3>
                  <p className="text-neutral-dark leading-relaxed">
                    My fascination with AI and psychology drives me to explore how technology can enhance human potential. Proficient in C# and Python, I'm constantly learning and adapting to new technological developments.
                  </p>
                </div>
                <div className="space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
                    alt="Professional"
                    className="rounded-lg shadow-lg w-full h-[200px] object-cover"
                  />
                  <h3 className="font-montserrat text-xl text-secondary-dark">
                    Creative Pursuits
                  </h3>
                  <p className="text-neutral-dark leading-relaxed">
                    From cooking to perfume collecting, I find joy in exploring sensory experiences. These creative outlets complement my technical work and help maintain a balanced perspective on life and learning.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
