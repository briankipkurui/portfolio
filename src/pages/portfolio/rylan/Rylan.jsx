import React, { useEffect } from 'react';
import '../main.scss';
// import styles from "./styles.module.scss";
import { useNavigate } from 'react-router-dom';
import { Fade } from 'react-reveal';

export const Rylan = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='project-container bg-[#212124]'>
      <div className='project-heading-rylan'>
        <div className='ml-8 md:ml-16 lg:ml-32'>
          <h1>Rylan Laundry data management system</h1>
          <p>React/ TypeScript/ Node/ MongoDB </p>
        </div>
      </div>

      <div className='pt-12 max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-5 gap-1 md:gap-8'>
        <Fade top>
          <div className='md:col-span-4 bg-[#39393F] rounded-3xl p-5 mb-3'>
            <h2 className='capitalize text-[36px] text-[#ffbd39] font-[700] tracking-[0.4px] leading-[75px]'>
              Overview
            </h2>
            <p className='text-[#bdc1c6]'>
              The inspiration behind the Rylan Laundry Services Data Management
              System stems from my personal experiences. This project emerged
              during my time on campus when I ran a laundry business alongside
              my studies to supplement my financial streams. While managing the
              business, I encountered a significant challenge - the need to
              efficiently track crucial data such as cash flows and a record of
              the clients served. It became apparent that a robust solution was
              required to make informed business decisions, ensure seamless
              service delivery, and prevent losses. This inspired me to embark
              on developing a software solution that would address this pressing
              issue.
              <br /> <br />
              The Rylan Laundry Services Data Management System is a web
              application designed to streamline and simplify the management of
              transaction data for my laundry business. Using the latest
              technologies, this user-friendly application provides a
              comprehensive overview of transaction data through a visually
              appealing dashboard. It enabled eased access to assess the
              performance of the business, make informed decisions, and ensure
              smooth service delivery. The user interface boasts of a Dashboard,
              sales, expenditure and credits components, report generation and
              transaction input form that work to facilitate data entry and
              visualisation. The API was carefully designed to ensure secure
              access and to provides essential functionality for managing and
              manipulating transaction data
            </p>

            <div className='btn'>
              <button>
                <a
                  href='https://dashboard-rylan-laundry-dms.vercel.app/'
                  target='self'
                >
                  demo
                </a>
              </button>
              <button>
                <a
                  href='https://github.com/AllanKipchumba/Rylan_Laundry_Services_user_interface'
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
            <li>TypeScript</li>
            <li>Express.js</li>
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
