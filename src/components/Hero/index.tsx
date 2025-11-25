import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import bgHero from "../../core/Images/bg-hero.jpg";
import "./index.css";

const Hero: React.FC = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-between px-8 sm:px-20 text-white overflow-hidden bg-[#0d0d12]"
    >
      {/* Mesh blobs */}
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-[#5c3aff] opacity-20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#18a3ff] opacity-20 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-xl ml-16">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-5xl sm:text-7xl font-extrabold leading-tight mb-8"
        >
          Hi, I'm <span className="text-indigo-400">Lusine</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-3xl sm:text-4xl text-gray-300 mb-8"
        >
          <TypeAnimation
            sequence={["React Developer", 1500, "Frontend Engineer", 1500, "UI/UX Enthusiast", 1500]}
            wrapper="span"
            speed={45}
            repeat={Infinity}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-10"
        >
          I create modern, responsive, and visually appealing web interfaces
          with React, TypeScript, and clean UI design. Passionate about
          animations and user experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="flex gap-6"
        >
          <a
            href="#work"
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-xl font-medium shadow-lg shadow-indigo-700/40 transition text-lg"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl font-medium hover:bg-white/20 transition text-lg"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      <div className="flex-1 hidden md:flex justify-end">
        <img
          src={bgHero}
          alt="Hero visual"
          className="w-[650px] lg:w-[850px] object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)] animate-float"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f] via-[#0a0a0a] to-[#111] opacity-60"></div>
    </section>
  );
};

export default Hero;
