import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

// images
import Logo from '../img/logo-dark.png';

// library
import { SlBag } from 'react-icons/sl';
import { CiMenuFries } from 'react-icons/ci';
import { FiMenu } from 'react-icons/fi';

// components
import SearchForm from '../components/SearchForm';
import CategoryNavMobile from '../components/CategoryNavMobile';
import Cart from '../components/Cart';

// context
import { CartContext } from '../context/CartContext';

const Header = () => {
  const { isOpen, setIsOpen } = useContext(CartContext);
  const [catNavMobile, setCatNavMobile] = useState(false);

  return (
    <header className="bg-primary py-6 fixed w-full top-0 z-40 lg:relative xl:mb-[30px]">
      <div className="container mx-auto">
        <div className="flex flex-row gap-4 items-center justify-between mb-4 xl:mb-0">
          {/* menu  */}
          <div
            onClick={() => setCatNavMobile(true)}
            className="text-3xl xl:hidden cursor-pointer"
          >
            <FiMenu />
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
              src={Logo}
              alt="store logo"
              className="h-[50px] w-[120px] lg:w-[150px] object-contain"
            />
          </Link>
          {/* searchform only on desktop */}
          <div className="hidden w-full xl:flex xl:max-w-[730px]">
            <SearchForm />
          </div>
          {/* cart icon */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="relative cursor-pointer"
          >
            <SlBag className="text-2xl" />
            <div className="bg-accent text-primary absolute w-[18px] h-[18px] rounded-full top-3 -right-1 text-[13px] flex justify-center items-center font-bold tracking-[0.1em]">
              1
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
