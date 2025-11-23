const CV = () => {
    return (
      <section
        id="cv"
        className="w-full min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-6"
      >
        <h2 className="text-4xl font-bold mb-6">My CV</h2>
  
        <p className="text-lg text-gray-300 mb-8 text-center max-w-xl">
          Click the button below to view or download my CV.
        </p>
  
        <a
          href="/CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          View / Download CV
        </a>
      </section>
    );
  };
  
  export default CV;
  