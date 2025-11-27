import { motion } from "framer-motion";
import { projects } from "../../core/constants/projects";
import { Project } from "../../core/types/project";

const Projects: React.FC = () => {
  return (
    <section
      id="work"
      className="relative min-h-screen px-6 pt-32 pb-20 text-white bg-gradient-to-b from-[#0a0a12] via-[#111] to-[#0a0a12] overflow-hidden"
    >
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-[#5c3aff] opacity-20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#18a3ff] opacity-20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto flex flex-col items-center text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold mb-12 text-indigo-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project: Project, index: number) => (
            <motion.div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-[#0d0d0d]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {/* IMAGE BLOCK */}
              <div className="p-3 bg-[#111] rounded-xl">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-56 object-contain rounded-lg"
                />
              </div>

              <div className="p-5 flex flex-col items-center text-center">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-xl font-semibold shadow-lg shadow-indigo-700/40 transition-all duration-300 text-lg"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl font-medium hover:bg-white/20 transition text-lg"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
