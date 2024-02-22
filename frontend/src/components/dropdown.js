'use client'
import Link from 'next/link';
import { useState } from 'react';

const Dropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className=" bg-transparent  text-black  hover:text-[#C637A0] duration-200 rounded inline-flex items-center"
        onClick={handleToggle}
      >
         <Link
              key={options[0].name}
              href={options[0].url}
              className="block   w-full text-left"
            >
              {options[0].name}
            </Link>        <svg
          className="fill-current hover:text-[#C637A0] duration-200 h-4 w-4 "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M6 8l4 4 4-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-1 w-full  text-black  z-10">
          {options.slice(1).map(({ name, url }) => (
            <a href={url} key={name}>
              <a className="block px-2 py-2 hover:text-[#C637A0] duration-300 w-full text-left" onClick={handleToggle}>
                {name}
              </a>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;