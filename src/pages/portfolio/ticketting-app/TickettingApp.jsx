import React, { useEffect } from 'react';
import '../main.scss';
// import styles from "./styles.module.scss";
import { useNavigate } from 'react-router-dom';
import { Fade } from 'react-reveal';

export const TickettingApp = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='project-container bg-[#212124]'>
      <div className='project-heading-ticketting '>
        <div className='ml-8 md:ml-16 lg:ml-32'>
          <h1>Distributed Ticketing App</h1>
          <p>TypeScript/ Node/ MongoDB/ Docker/ Kubernetes/ Nats </p>
        </div>
      </div>

      <div className='pt-12 max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-5 gap-1 md:gap-8'>
        <Fade top>
          <div className='md:col-span-4 bg-[#39393F] rounded-3xl p-5 mb-3'>
            <h2 className='capitalize text-[36px] text-[#ffbd39] font-[700] tracking-[0.4px] leading-[75px]'>
              Overview
            </h2>
            <p className='text-[#bdc1c6]'>
              Ticketing App is a platform that facilitates seamless ticket
              buying and selling experiences for registered users. This dynamic
              and scalable application employs a microservices architecture and
              was crafted using TypeScript, Node and MongoDB.
              <br />
              <br />
              Technical Highlights:
              <ul>
                <li>
                  – Architecture: The application adopts a distributed
                  microservices architecture, promoting modularity and
                  scalability. This design approach ensures that various
                  components operate independently, leading to enhanced fault
                  tolerance and ease of maintenance.
                </li>
                <li>
                  – Containerization: The application is containerized using
                  Docker, enabling consistent deployment across various
                  environments and minimizing potential compatibility issues.
                </li>
                <li>
                  – Orchestration: Leveraging Kubernetes, the Docker containers
                  are orchestrated into a cohesive unit, ensuring efficient
                  resource utilization and automated scaling as per demand.
                </li>
                <li>
                  – Service Modules: The application encompasses distinct
                  services: Authentication (Auth), Tickets, Orders, Payment, and
                  Expiration. Each service is self-contained, serving a specific
                  purpose while allowing for easy integration and future
                  expansion.
                </li>
                <li>
                  – Event-Driven Communication: Communication between services
                  is orchestrated using event-driven architecture. The services
                  communicate seamlessly through the utilization of the Nats
                  Streaming Server messaging system, enhancing real-time
                  responsiveness and maintaining data consistency.
                </li>
              </ul>
              <br />
              By employing this architecture, the Ticketing Application achieves
              unparalleled flexibility and performance. The decoupled services
              facilitate rapid development, deployment, and debugging, while the
              event-based communication system enhances real-time interaction
              and ensures data integrity.
            </p>

            <div className='btn'>
              {/* <button>
                <a
                  href="https://dashboard-rylan-laundry-dms.vercel.app/"
                  target="self"
                >
                  demo
                </a>
              </button> */}
              <button>
                <a
                  href='https://github.com/AllanKipchumba/ticketingApp'
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
            <li>TypeScript</li>
            <li>Node</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>Nats (Message Queue System)</li>
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
