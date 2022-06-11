const Navbar = () => {
  return (
    <header className="bg-gray-200 shadow-md text-black body-font">
      <div className="md:w-5/6 container mx-auto flex  p-5 md:pl-10 flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-pink-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Dream Quiz</span>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
