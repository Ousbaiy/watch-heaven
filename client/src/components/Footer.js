import React from 'react';

// library
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaReddit,
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-16 bg-primary">
      <div className="container mx-auto">
        <div className='text-center'>
          <h2 className='h2 uppercase mb-6 font-semibold'>Subscribe to our newsletter</h2>
          <p className='text-white/70'>
            be the first to get the latest news about trends, promotions and
            much more!
          </p>
          {/* form  */}
          <form className="w-full max-w-3xl mx-auto flex flex-col md:flex-row gap-5 my-14">
            <input
              type="text"
              placeholder="Your email address"
              className="input min-w-[150px] caret-accent"
            />
            <button className="btn btn-accent">join</button>
          </form>
          {/* links */}
          <div className='text-base text-white/60 flex flex-col md:flex-row gap-6 capitalize max-w-max mx-auto'>
            <a href="#1" className="hover:text-white transition-all">
              Returns policy
            </a>
            <a href="#2" className="hover:text-white transition-all">
              Track your order
            </a>
            <a href="#3" className="hover:text-white transition-all">
              Shipping & delivery
            </a>
            <a href="#3" className="hover:text-white transition-all">
              Help & Contact
            </a>
          </div>
          {/* socials */}
          <div className='my-6 text-white/60 flex gap-x-6 capitalize max-w-max mx-auto text-lg'>
            <a href="#1" className="hover:text-white transition-all">
              <FaReddit />
            </a>
            <a href="#2" className="hover:text-white transition-all">
              <FaInstagram />
            </a>
            <a href="#3" className="hover:text-white transition-all">
              <FaTwitter />
            </a>
            <a href="#3" className="hover:text-white transition-all">
              <FaFacebook />
            </a>
          </div>
        </div>
        {/* copyright */}
        <div className='py-10 border-t border-t-white/10'>
            <div className='container mx-auto'>
              <p className='text-center text-sm text-white/60'>
                Copyright &copy; Watch Heaven {currentYear}. All rights
                reserved.
              </p>
            </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
