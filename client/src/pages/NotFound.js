import React from 'react';
import { Link } from 'react-router-dom';

import { IoBugOutline } from 'react-icons/io5';

const NotFound = () => {
  return (
    <div className="h-[600px] flex flex-col items-center justify-center gap-y-4">
      <div className='flex items-center gap-x-5 text-[85px]'>
        <span><IoBugOutline /></span>
        <span>404</span>
      </div>
      <h2 className="h2">Ooops! page not found!</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-accent">
        Go to home page
      </Link>
    </div>
  );
};

export default NotFound;
