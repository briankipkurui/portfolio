import React from 'react';
import { Navbar } from '../navbar/Navbar';
import './header.scss';
import Typed from 'react-typed';
import { FiChevronDown } from 'react-icons/fi';
import { Link } from 'react-scroll';

export const Header = () => {
  return (
    <div className='header'>
      <Navbar />
      <div className='text-white pt-[35vh]'>
        <h1 className='text-center mb-4 uppercase font-bold'>Hello 👋</h1>
        <h1 className='text-center uppercase tracking-[2px] font-bold text-lg'>
          welcome to my website
        </h1>

        <p className='mt-8 text-center'>
          <Typed
            strings={[
              'I am Allan Kipchumba.',
              'an agile full-stack developer,',
              'and an aggressive learner.',
            ]}
            typeSpeed={100}
            backSpeed={50}
            loop
            showCursor={true}
            className='text-xl sm:text-4xl md:text-4xl font-bold text-[#ffbd39]'
          />
        </p>
      </div>
      <div className='btn mt-20 flex gap-6'>
        <Link
          activeClass='active'
          to='projects'
          spy={true}
          smooth={true}
          offset={-65}
          duration={1000}
        >
          <button>View Work</button>
        </Link>
      </div>

      <div className='scroll-icon animate-bounce'>
        <Link
          activeClass='active'
          to='about'
          spy={true}
          smooth={true}
          offset={-65}
          duration={1000}
        >
          <FiChevronDown size={40} className='icon' />
        </Link>
      </div>
    </div>
  );
};
