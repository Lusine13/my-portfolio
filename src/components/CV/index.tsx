import { motion } from "framer-motion";

const CV: React.FC = () => {
  return (
    <section id="cv" className="relative min-h-screen px-6 py-28 text-white bg-[#0d0d0d] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#0d0d0d] to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#0d0d0d] to-transparent pointer-events-none"></div>

      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-[#5c3aff] opacity-20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#18a3ff] opacity-20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-6xl mx-auto flex flex-col items-center text-center">
        <motion.h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-indigo-400" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          My CV
        </motion.h2>

        <motion.p className="text-lg text-gray-300 mb-10 max-w-xl" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          Click the button below to view or download my CV.
        </motion.p>

        <motion.a
          href="/Lusine Vardanyan.pdf"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-xl font-medium shadow-lg shadow-indigo-700/40 transition text-lg"
        >
          View / Download CV
        </motion.a>
      </div>
    </section>
  );
};

export default CV;
