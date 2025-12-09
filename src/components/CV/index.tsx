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

// Active skills
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

// Keyboard layout
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
      className="
        relative min-h-screen px-6 py-28 text-white 
        bg-[#0d0d0d] overflow-hidden
      "
    >
      {/* --- CYBER GRADIENT BACKGROUND --- */}
     <div className="absolute inset-0 bg-gradient-to-br from-[#0b0b0d] via-[#09090b] to-[#000] opacity-90"></div>

      {/* --- NEBULA BLURS --- */}      
      <div className="absolute -top-32 left-0 w-[430px] h-[430px] bg-[#6a4dff] opacity-20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#18a3ff] opacity-20 blur-[130px] rounded-full"></div>

      {/* --- FUTURISTIC GRID OVERLAY --- */}
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(90deg,#ffffff10_1px,transparent_1px),linear-gradient(#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Title */}
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold mb-3 text-indigo-300 drop-shadow-[0_0_12px_rgba(99,102,241,0.7)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          My CV
        </motion.h2>

        {/* Short description */}
        <motion.p
          className="text-lg text-gray-300 mb-3 max-w-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Click the button below to view or download my CV.
        </motion.p>

        {/* CV Button */}
        <motion.a
          href="/Lusine Vardanyan.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-indigo-700/40 transition text-lg mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          View / Download CV
        </motion.a>

        {/* --- KEYBOARD CONTAINER --- */}
        <motion.div
          className="relative w-full max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
        >
          {/* RGB underglow */}
          <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 opacity-50 translate-y-6 pointer-events-none"></div>

          {/* Main keyboard body */}
          <div
            className="
              relative rounded-3xl 
              bg-gradient-to-b from-[#181820] via-[#050509] to-[#020206]
              border border-white/10
              shadow-[0_24px_70px_rgba(0,0,0,0.85)]
              px-4 py-6 sm:px-6 sm:py-7
            "
          >
            {/* Status bar */}
            <div className="mb-2 flex justify-between items-center text-xs text-gray-500">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500/60"></span>
                <span className="w-2 h-2 rounded-full bg-yellow-400/60"></span>
                <span className="w-2 h-2 rounded-full bg-green-500/60"></span>
              </div>

              <span className="text-[15px] uppercase tracking-[0.18em] text-gray-400">
                Skillboard
              </span>
            </div>

            {/* Keys */}
            <div className="grid grid-cols-8 gap-2 sm:gap-3">
              {layout.map((row, rIndex) => {
                const rowElements: React.ReactNode[] = [];

                // Passive keys
                for (let i = 0; i < row.passive; i++) {
                  rowElements.push(
                    <div
                      key={`p-${rIndex}-${i}`}
                      className="
                        h-12 sm:h-14 rounded-md
                        bg-[#101018] border border-[#252538] shadow-inner
                        relative overflow-hidden
                      "
                    >
                      <div className="absolute inset-x-0 top-0 h-1.5 bg-white/5" />
                    </div>
                  );
                }

                // Active keys
                for (let i = 0; i < row.active; i++) {
                  const skill = activeSkills[activeIndex++ % activeSkills.length];

                  rowElements.push(
                    <motion.div
                      key={`a-${rIndex}-${skill.label}`}
                      whileHover={{ y: -5, scale: 1.08 }}
                      transition={{ type: "spring", stiffness: 220, damping: 14 }}
                      className="
                        h-12 sm:h-14 rounded-md
                        bg-gradient-to-b from-[#20204a] via-[#181830] to-[#060612]
                        border border-indigo-400/60
                        shadow-lg shadow-indigo-700/50
                        flex items-center justify-center
                        cursor-pointer relative overflow-hidden
                      "
                    >
                      <div className="absolute inset-x-1 top-0 h-1/2 bg-white/5 opacity-60 blur-[2px]" />
                      <skill.Icon className="text-2xl sm:text-3xl text-indigo-200 drop-shadow-[0_0_8px_rgba(129,140,248,0.9)]" />
                    </motion.div>
                  );
                }

                return <React.Fragment key={rIndex}>{rowElements}</React.Fragment>;
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CV;
