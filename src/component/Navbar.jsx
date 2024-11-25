import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
      {/* Logo */}
      <a
        href="#Home"
        className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100"
      >
        Hamazin
      </a>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-10">
        <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Home</li>
        </a>
        <a href="#Technology" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Technology</li>
        </a>
        <a href="#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Projects</li>
        </a>
        <a href="#Contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Contact</li>
        </a>
      </ul>

      {/* Social Icons */}
      <ul className="hidden md:flex gap-5">
        <li className="cursor-pointer opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
          <BsYoutube />
        </li>
        <a
          href="https://www.linkedin.com/in/rahman-ademola-421952246"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/Hamazinetwork"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100"
        >
          <BsGithub />
        </a>
      </ul>

      {/* Mobile Menu Icon */}
      {isOpen ? (
        <BiX className="block md:hidden text-4xl" onClick={menuOpen} />
      ) : (
        <BiMenu className="block md:hidden text-4xl" onClick={menuOpen} />
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-l border-gray-800 bg-black/90 p-12 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col gap-8">
            <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
              <li>Home</li>
            </a>
            <a href="#Technology" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
              <li>Technology</li>
            </a>
            <a href="#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
              <li>Projects</li>
            </a>
            <a href="#contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
              <li>Contact</li>
            </a>
          </ul>
          <ul className="flex flex-wrap gap-5">
            <li className="cursor-pointer opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
              <BsYoutube />
            </li>
            <a
              href="https://www.linkedin.com/in/rahman-ademola-421952246"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://github.com/Hamazinetwork"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100"
            >
              <BsGithub />
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

