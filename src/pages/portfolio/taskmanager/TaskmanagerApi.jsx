import React from 'react';
import '../main.scss';
import { useNavigate } from 'react-router-dom';
import { Fade } from 'react-reveal';

export const TaskmanagerApi = () => {
  const navigate = useNavigate();
  return (
    <div className='project-container bg-[rgb(33,33,36)]'>
      <div className='project-heading-taskmanager'>
        <div className='ml-8 md:ml-16 lg:ml-32'>
          <h1>Task manager API</h1>
          <p>Node/ MongoDB</p>
        </div>
      </div>

      <div className='pt-12 max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-5 gap-1 md:gap-8'>
        <Fade top>
          <div className='md:col-span-4 bg-[#39393F] rounded-3xl p-5 mb-3'>
            <h2 className='capitalize text-[36px] text-[#ffbd39] font-[700] tracking-[0.4px] leading-[75px]'>
              Overview
            </h2>
            <p className='text-[#bdc1c6]'>
              A rest API that authenticated users can use to create and track
              tasks. It is a simple API that allows users to add, change, and
              delete jobs. It makes use of jwt tokens for authentication.
              Express and MongoDB were used to develop this project. For API
              testing, I relied heavily on Postman.{' '}
            </p>

            <div className='btn'>
              <button>
                <a
                  href='https://github.com/AllanKipchumba/task-manager-api'
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
            <li>Node</li>
            <li>MongoDB</li>
            <li>Postman</li>
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
