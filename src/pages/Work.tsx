
import { BookOpen, BrainCircuit, Code, Laptop, Sword } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <div className="bg-cream min-h-screen">
      <Navigation />
      
      {/* Header Section */}
      <header className="pt-24 px-6 container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6 mb-16"
        >
          <h1 className="font-playfair text-4xl md:text-5xl text-primary">
            Empowering Growth Through Teaching, Technology, and Community Building
          </h1>
          <p className="text-primary-muted max-w-3xl mx-auto">
            With over four years of experience teaching math and chess, a strong foundation in business IT from Corvinus University, and a passion for entrepreneurship, I help people solve problems, learn new skills, and connect with innovative ideas. Whether it's tutoring students, building communities, or creating websites, I thrive on challenges that inspire growth.
          </p>
        </motion.div>
      </header>

      {/* Split Section */}
      <section className="container mx-auto max-w-6xl px-6 mb-16">
        <div className="grid md:grid-cols-2 gap-12 relative">
          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="font-playfair text-2xl text-primary mb-8">Timeline</h2>
            <div className="space-y-6 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-primary/10">
              {timelineEvents.map((event, index) => (
                <div key={index} className="pl-8 relative">
                  <div className="absolute left-0 top-2 w-4 h-4 bg-accent-terra rounded-full" />
                  <h3 className="font-montserrat text-primary">{event.year}</h3>
                  <p className="text-primary-muted">{event.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <h2 className="font-playfair text-2xl text-primary mb-8">Skills</h2>
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-4">
                <h3 className="font-montserrat text-lg text-primary flex items-center gap-2">
                  {category.icon}
                  {category.title}
                </h3>
                <ul className="list-disc list-inside text-primary-muted space-y-2 pl-6">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-12"
          >
            <h2 className="font-playfair text-3xl text-primary text-center mb-12">Work Experience</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {workExperience.map((work, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm space-y-4">
                  <div className="w-12 h-12 bg-accent-terra/10 rounded-lg flex items-center justify-center">
                    {work.icon}
                  </div>
                  <h3 className="font-montserrat text-lg text-primary">{work.title}</h3>
                  <p className="text-primary-muted">{work.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const timelineEvents = [
  { year: "2005", description: "Born in Budapest" },
  { year: "2015", description: "Created my first Minecraft server" },
  { year: "2018", description: "Tried myself out in selling rare shoes" },
  { year: "2020–2024", description: "Attended Szinyei Merse High School" },
  { year: "2021–Present", description: "Started working as a math teacher" },
  { year: "2023", description: "Founded Parfüm Adok Veszek (a perfume trading community)" },
  { year: "2024", description: "Founded Velora" },
  { year: "2024–Present", description: "Began teaching chess" },
  { year: "2024–Present", description: "Enrolled at Corvinus University of Budapest" },
];

const skillCategories = [
  {
    title: "Teaching & Coaching",
    icon: <BookOpen className="w-5 h-5 text-accent-terra" />,
    skills: [
      "Math tutoring (4 years of experience)",
      "Chess coaching (1 year of experience)",
      "Ability to make complex concepts simple and engaging",
    ],
  },
  {
    title: "Entrepreneurship & Side Hustles",
    icon: <Laptop className="w-5 h-5 text-accent-terra" />,
    skills: [
      "Experience in selling rare shoes (business acumen and market knowledge)",
      "Website creation (technical skills in design and development)",
      "Managing communities (e.g., Facebook perfume group with 6,000+ members)",
    ],
  },
  {
    title: "Technical Skills",
    icon: <Code className="w-5 h-5 text-accent-terra" />,
    skills: [
      "Programming: Basics of C# and Python",
      "Business IT knowledge from university studies",
    ],
  },
  {
    title: "Soft Skills",
    icon: <BrainCircuit className="w-5 h-5 text-accent-terra" />,
    skills: [
      "Emotional intelligence: Understanding people's needs and motivations",
      "Communication: Clear and effective teaching methods",
      "Adaptability: Thriving in diverse environments",
    ],
  },
];

const workExperience = [
  {
    icon: <BookOpen className="w-6 h-6 text-accent-terra" />,
    title: "Math Tutoring",
    description: "Personalized lessons for students of all levels, focusing on simplifying difficult concepts and building confidence.",
  },
  {
    icon: <Sword className="w-6 h-6 text-accent-terra" />,
    title: "Chess Coaching",
    description: "Beginner-friendly coaching to develop strategic thinking and problem-solving skills.",
  },
  {
    icon: <Code className="w-6 h-6 text-accent-terra" />,
    title: "Website Creation",
    description: "Custom websites tailored to individual or business needs, combining technical knowledge with creativity.",
  },
  {
    icon: <BrainCircuit className="w-6 h-6 text-accent-terra" />,
    title: "AI Solutions",
    description: "Leveraging artificial intelligence to create innovative solutions for modern challenges.",
  },
];

export default Work;
