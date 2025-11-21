import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-black text-white"
    >
      <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-4">
        Lusine
      </h1>

      <TypeAnimation
        sequence={[
          "Frontend Developer",
          1500,
          "React Developer",
          1500,
          "UI / UX Enthusiast",
          1500,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="text-xl sm:text-3xl font-medium mb-8 text-gray-300"
      />

      <a
        href="#work"
        className="mt-8 animate-bounce text-gray-400 hover:text-white transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </a>
    </section>
  );
};

export default Hero;
