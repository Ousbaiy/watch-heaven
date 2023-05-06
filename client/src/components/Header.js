import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

// images
import Logo from '../img/logo-light.png';
import LogoDark from '../img/logo-dark.png';

// library
import { SlBag } from 'react-icons/sl';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';

// components
import SearchForm from '../components/SearchForm';
import CategoryNavMobile from '../components/CategoryNavMobile';
import Cart from '../components/Cart';

// context
import { CartContext } from '../context/CartContext';

// custom hook
import useTheme from "../hooks/useTheme";

const Header = () => {
  const { isOpen, setIsOpen, itemsAmount } = useContext(CartContext);
  const [catNavMobile, setCatNavMobile] = useState(false);
  const [theme, toggleTheme] = useTheme();

  return (
    <header className="bg-white dark:bg-primary py-6 fixed w-full top-0 z-40 lg:relative xl:mb-[30px] shadow-xl dark:shadow">
      <div className="container mx-auto">
        <div className="flex flex-row gap-4 items-center justify-between mb-4 xl:mb-0">
          {/* menu  */}
          <div
            onClick={() => setCatNavMobile(true)}
            className="text-3xl xl:hidden cursor-pointer"
          >
            <HiOutlineMenuAlt1 />
          </div>
          {/* cat nav mobile  */}
          <div
            className={`${
              catNavMobile ? 'left-0' : '-left-full'
            } fixed top-0 bottom-0 z-30 w-full h-screen transition-all duration-200`}
          >
            <CategoryNavMobile setCatNavMobile={setCatNavMobile} />
          </div>
          {/* logo  */}
          <Link to={'/'}>
            <img
              src={theme === 'dark' ? LogoDark : Logo}
              alt="store logo"
              className="h-[50px] w-[120px] lg:w-[150px] object-contain"
            />
          </Link>
          {/* searchform only on desktop */}
          <div className="hidden w-full xl:flex xl:max-w-[730px]">
            <SearchForm />
          </div>
          <div className="flex items-center gap-x-5">
            {/* cart icon */}
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="relative cursor-pointer"
            >
              <SlBag className="text-2xl" />
              <div className="bg-accent text-primary absolute w-[18px] h-[18px] rounded-full top-3 -right-1 text-[13px] flex justify-center items-center font-bold tracking-[0.1em]">
                {itemsAmount}
              </div>
            </div>
            {/* theme  */}
            <div className="text-3xl cursor-pointer" onClick={toggleTheme}>
              {theme === 'dark' ? <HiOutlineSun /> : <HiOutlineMoon />}
            </div>
          </div>
          {/* cart  */}
          <div
            className={`${
              isOpen ? 'right-0' : '-right-full'
            } bg-[#0e0f10] shadow-xl fixed top-0 bottom-0 w-full z-10 md:max-w-[500px] transition-all duration-300`}
          >
            <Cart />
          </div>
        </div>
        {/* search form - show on mobile  */}
        <div className="xl:hidden">
          <SearchForm />
        </div>
      </div>
    </header>
  );
};

export default Header;
