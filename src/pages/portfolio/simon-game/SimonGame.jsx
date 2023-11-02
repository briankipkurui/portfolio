import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../main.scss';
import { Fade } from 'react-reveal';
import { useEffect } from 'react';

export const SimonGame = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='project-container bg-[#212124]'>
      <div className='project-heading-simonGame'>
        <div className='ml-8 md:ml-16 lg:ml-32'>
          <h1>Simon-game-clone</h1>
          <p>Javascript</p>
        </div>
      </div>

      <div className='pt-12 max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-5 gap-1 md:gap-8'>
        <Fade top>
          <div className='md:col-span-4 bg-[#39393F] rounded-3xl p-5 mb-3'>
            <h2 className='capitalize text-[36px] text-[#ffbd39] font-[700] tracking-[0.4px] leading-[75px]'>
              Overview
            </h2>
            <p className='text-[#bdc1c6]'>
              Experience the nostalgia of the classic Simon game online with
              this fully functional version. Test your short-term memory skills
              by repeating increasingly complex sequences of tones and lights.
              Challenge yourself to beat your highest score, or compete with
              friends to see who can achieve the highest level. This project
              allowed me to deepen my knowledge of JavaScript, including DOM
              manipulation and advanced methods. I used vanilla JavaScript to
              implement the game, ensuring a fast and responsive user
              experience. Whether you're reliving childhood memories or
              experiencing Simon for the first time, this online version is sure
              to provide hours of entertainment.
            </p>

            <div className='btn'>
              <button>
                <a
                  href='https://allankipchumba.github.io/simon_game_clone/'
                  target='self'
                >
                  demo
                </a>
              </button>
              <button>
                <a
                  href='https://github.com/AllanKipchumba/simon_game_clone'
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
            <li>Javascript</li>
            <li>HTML5</li>
            <li>CSS3</li>
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
