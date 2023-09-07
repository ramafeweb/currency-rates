import { useState } from 'react';

const navLinks = [
  {
    id: 'home',
    title: 'Home',
  },
  {
    id: 'currency',
    title: 'Currency',
  },
];

const Navbar = () => {
  const [active, setActive] = useState('Home');

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={'/logo.png'} alt="unpbank" className=" h-[30px] mr-10" />
      <span className="text-white text-2xl mr-2 ml-[-2rem] font-bold">Currency</span>{' '}
      <span className="text-[#5CE1E6] text-2xl font-bold">Rates</span>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`group font-poppins cursor-pointer text-[16px] ${
              active === nav.title ? 'text-secondary font-semibold' : 'text-dimWhite font-regular'
            } ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
            <div className="h-0.5 bg-secondary scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out" />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
