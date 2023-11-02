import React, { useEffect } from 'react';
import '../main.scss';
import { useNavigate } from 'react-router-dom';
import { Fade } from 'react-reveal';

export const Eshop = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='project-container bg-[#212124]'>
      <div className='project-heading-e-shop'>
        <div className='ml-8 md:ml-16 lg:ml-32'>
          <h1>e-shop</h1>
          <p>React/ Firebase / Node</p>
        </div>
      </div>

      <div className='pt-12 max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-5 gap-1 md:gap-8'>
        <Fade top>
          <div className='md:col-span-4 bg-[#39393F] rounded-3xl p-5 mb-3'>
            <h2 className='capitalize text-[36px] text-[#ffbd39] font-[700] tracking-[0.4px] leading-[75px]'>
              Overview
            </h2>
            <p className='text-[#bdc1c6]'>
              E-shop revolutionizes the world of online shopping, providing
              users with a seamless and enjoyable e-commerce experience. Our
              user-friendly website allows customers to effortlessly browse and
              purchase a wide range of items from various categories. With just
              a few clicks, users can add their desired products to their
              shopping cart, enabling easy tracking and customization before
              proceeding to checkout.
              <br /> <br />
              At the core of our platform lies Firebase, a powerful technology
              that handles data storage, database management, and user
              authentication. By leveraging Firebase's robust and secure backend
              capabilities, we ensure that user data is stored safely and
              readily accessible. This scalable solution allows us to
              accommodate a high volume of users and support future growth.
              <br /> <br />
              Our ultimate goal is to deliver a secure and reliable platform,
              combining an intuitive interface with cutting-edge technology.
              E-shop aims to redefine the online shopping experience, providing
              customers with convenience, choice, and peace of mind. Join us in
              exploring the possibilities of seamless e-commerce at E-shop.
            </p>

            <div className='btn'>
              <button>
                <a href='https://e-shop-client.onrender.com/' target='self'>
                  demo
                </a>
              </button>
              <button>
                <a
                  href='https://github.com/AllanKipchumba/e-shop'
                  target='self'
                >
                  code
                </a>
              </button>
            </div>
          </div>
        </Fade>
        <div className='mb-4'>
          <h3 className='text-[25px] leading-[75px]  text-[#ffbd39] '>
            Technologies
          </h3>
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>Firebase</li>
            <li>Node.js</li>
          </ul>
        </div>
      </div>
      <div className='max-w-[80%] mx-auto'>
        <button onClick={() => navigate(-1)} className='back-btn'>
          back
        </button>
      </div>
    </div>
  );
};
