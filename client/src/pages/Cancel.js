import React from 'react';
import { Link } from 'react-router-dom';

// library
import { BsCartX } from 'react-icons/bs';

const Cancel = () => {
  return (
    <div className="pt-40 lg:pt-0 h-[600px] flex items-center justify-center text-center">
      <div className="container mx-auto grad w-[350px] lg:w-[500px] h-[350px] lg:h-[500px] rounded-md flex flex-col justify-center items-center gap-y-5 p-2 lg:p-10">
        <span className="text-[40px] text-accent">
          <BsCartX />
        </span>
        <h2 className="text-2xl lg:h2">Order canceled</h2>
        <p>
          if you have any questions, please email{' '}
          <a
            className="text-accent hover:underline"
            href="mailto:order@example.com"
          >
            order@watchheaven.com
          </a>
        </p>
        <Link to="/" className="btn btn-accent mt-5">
          continue shoppping
        </Link>
      </div>
    </div>
  );
};

export default Cancel;
