import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-b from-black via-zinc-900 to-black text-white px-6"
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-7xl font-extrabold tracking-tight"
        >
          Lusine Vardanyan
        </motion.h1>

        {/* Animated typing */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xl sm:text-3xl text-gray-300"
        >
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              1500,
              "React Developer",
              1500,
              "UI / UX Enthusiast",
              1500,
            ]}
            speed={50}
            wrapper="span"
            repeat={Infinity}
          />
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex gap-4 mt-4"
        >
          <a
            href="#cv"
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 transition rounded-lg text-white font-medium"
          >
            View CV
          </a>

          <a
            href="#work"
            className="px-6 py-3 border border-gray-500 hover:border-white transition rounded-lg font-medium"
          >
            View Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
