import React from "react";
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiAntdesign,
  SiFramer,
} from "react-icons/si";

const activeSkills = [
  { Icon: FaHtml5, label: "HTML5" },
  { Icon: FaCss3Alt, label: "CSS3" },
  { Icon: FaJsSquare, label: "JavaScript" },
  { Icon: SiTypescript, label: "TypeScript" },
  { Icon: FaReact, label: "React" },
  { Icon: SiRedux, label: "Redux Toolkit" },
  { Icon: SiTailwindcss, label: "Tailwind CSS" },
  { Icon: SiAntdesign, label: "Ant Design" },
  { Icon: SiFramer, label: "Framer Motion" },
  { Icon: FaGitAlt, label: "Git" },
];

const layout = [
  { passive: 4, active: 4 }, 
  { passive: 3, active: 5 }, 
  { passive: 6, active: 2 }, 
  { passive: 8, active: 0 }, 
];

const CV: React.FC = () => {
    let activeIndex = 0;

  return (
    <section
      id="cv"
      className="relative min-h-screen px-6 py-28 text-white bg-[#0d0d0d] overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-[#5c3aff] opacity-20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#18a3ff] opacity-20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Main Title */}
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold mb-4 text-indigo-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My CV
        </motion.h2>

        {/* Short description */}
        <motion.p
          className="text-lg text-gray-300 mb-10 max-w-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Click the button below to view or download my CV.
        </motion.p>

        {/* CV Button */}
        <motion.a
          href="/Lusine Vardanyan.pdf"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-xl font-medium shadow-lg shadow-indigo-700/40 transition text-lg mb-16"
        >
          View / Download CV
        </motion.a>

        {/* Skills Title */}
        <motion.h3
          className="text-2xl sm:text-3xl font-semibold mb-8 text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Technical Skills
        </motion.h3>

        {/* KEYBOARD CONTAINER */}
        <motion.div
          className="relative w-full max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
        >
          {/* RGB underglow (edge only) */}
          <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 opacity-50 translate-y-6 pointer-events-none"></div>

          {/* Keyboard body */}
          <div
            className="
              relative rounded-3xl 
              bg-gradient-to-b from-[#181820] via-[#050509] to-[#020206]
              border border-white/10
              shadow-[0_24px_70px_rgba(0,0,0,0.85)]
              px-4 py-6 sm:px-6 sm:py-7
            "
          >
            {/* Top little “status bar” strip */}
            <div className="mb-4 flex justify-between items-center text-xs text-gray-500">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500/70"></span>
                <span className="w-2 h-2 rounded-full bg-yellow-400/70"></span>
                <span className="w-2 h-2 rounded-full bg-green-500/70"></span>
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400">
                Skillboard v1.0
              </span>
            </div>

            {/* Keys grid */}
            <div className="grid grid-cols-8 gap-2 sm:gap-2.5 md:gap-3">
              {layout.map((row, rowIndex) => {
                const rowElements: React.ReactNode[] = [];

                // Passive keys
                for (let i = 0; i < row.passive; i++) {
                  rowElements.push(
                    <div
                      key={`p-${rowIndex}-${i}`}
                      className="
                        h-12 sm:h-14 rounded-md
                        bg-[#101018]
                        border border-[#252538]
                        shadow-inner
                        relative overflow-hidden
                      "
                    >
                      {/* subtle top highlight */}
                      <div className="absolute inset-x-0 top-0 h-1.5 bg-white/5" />
                    </div>
                  );
                }

                // Active keys (skills)
                for (let i = 0; i < row.active; i++) {
                  const skill =
                    activeSkills[activeIndex % activeSkills.length];
                  activeIndex++;

                  rowElements.push(
                    <motion.div
                      key={`a-${rowIndex}-${skill.label}-${i}`}
                      whileHover={{ y: -5, scale: 1.06 }}
                      transition={{ type: "spring", stiffness: 220, damping: 14 }}
                      className="
                        h-12 sm:h-14 rounded-md
                        bg-gradient-to-b from-[#20204a] via-[#181830] to-[#060612]
                        border border-indigo-400/60
                        shadow-lg shadow-indigo-700/50
                        flex items-center justify-center
                        cursor-pointer
                        relative overflow-hidden
                      "
                    >
                      {/* glossy reflection */}
                      <div className="absolute inset-x-1 top-0 h-1/2 bg-white/5 opacity-60 blur-[2px] pointer-events-none" />
                      {/* inner glow ring */}
                      <div className="absolute inset-0 rounded-md ring-1 ring-indigo-400/40 pointer-events-none" />
                      <skill.Icon className="relative text-2xl sm:text-3xl text-indigo-200 drop-shadow-[0_0_6px_rgba(129,140,248,0.9)]" />
                    </motion.div>
                  );
                }

                return (
                  <React.Fragment key={rowIndex}>{rowElements}</React.Fragment>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CV;
