import React from 'react';
import '../main.scss';
import { useNavigate } from 'react-router-dom';
import { Fade } from 'react-reveal';
import { useEffect } from 'react';

export const StoryHub = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='project-container bg-[#212124]'>
      <div className='project-heading-storyhub'>
        <div className='ml-8 md:ml-16 lg:ml-32'>
          <h1>StoryHub</h1>
          <p>React/ Node/ MongoDB</p>
        </div>
      </div>

      <div className='pt-12 max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-5 gap-1 md:gap-8'>
        <Fade top>
          <div className='md:col-span-4 bg-[#39393F] rounded-3xl p-5 mb-3'>
            <h2 className='capitalize text-[36px] text-[#ffbd39] font-[700] tracking-[0.4px] leading-[75px]'>
              Overview
            </h2>
            <p className='text-[#bdc1c6]'>
              StoryHub is a secure platform where users can publish and discover
              previously shared content. The website requires authentication in
              order to interact with the information, and new users can easily
              sign up using their email address and password. With a range of
              categories available, users can browse through a variety of posts.
              The website's development utilized React, Redux, Tailwind, and
              Sass for the front end, while Node, Express, Mongoose, JWT tokens,
              and MongoDB Atlas were used for the backend. Postman was utilized
              for API testing, ensuring a smooth user experience. The website is
              hosted on Vercel, and Render, offering a seamless experience for
              all users.
            </p>

            <div className='btn'>
              <button>
                <a href='https://storyhub-webapp.vercel.app/' target='self'>
                  demo
                </a>
              </button>
              <button>
                <a
                  href='https://github.com/AllanKipchumba/StoryHub_ui'
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
            <li>redux</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
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
