import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Jira Project",
      img: "/projects/jira.png",
      description: "A Jira clone built using React, TypeScript, Zustand, and Drag & Drop.",
      link: "https://jira-4a78d5.netlify.app",
      github: "https://github.com/Lusine13/Jira2",
    },
    {
      title: "Spender App",
      img: "/projects/spender.png",
      description: "A financial tracker built with React, TypeScript, and local storage.",
      link: "https://spender-969.netlify.app",
      github: "https://github.com/Lusine13/Spender",
    },
  ];

  return (
    <section
    id="work"
    className="relative min-h-screen px-6 pt-32 pb-20 text-white bg-gradient-to-b from-[#0a0a12] via-[#111] to-[#0a0a12] overflow-hidden"
  >
    {/* MESH BACKGROUND BLOBS */}
    <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-[#5c3aff] opacity-20 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#18a3ff] opacity-20 blur-[120px] rounded-full"></div>
  
    {/* Content */}
    <div className="relative max-w-6xl mx-auto flex flex-col items-center text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-extrabold mb-12 text-indigo-400"
      >
        My Projects
      </motion.h2>
  
      {/* PROJECT CARDS */}
      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-56 object-cover rounded-t-lg"
            />
  
            <div className="p-5 flex flex-col items-center text-center bg-[#0d0d0d]">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
  
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
