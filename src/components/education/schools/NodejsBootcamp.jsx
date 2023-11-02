import React, { useState } from "react";
import { Fade } from "react-reveal";
import { Link } from "react-scroll";

export const NodejsBootcamp = () => {
  const [hide, setHide] = useState(false);

  return (
    <>
      <h1>Nov2021 - March2022</h1>
      <h2>Node Js Bootcamp</h2>
      <h3>Udemy - Andrew Mead</h3>
      <button onClick={() => setHide(!hide)}>Read More</button>

      {hide && (
        <Fade left>
          <div className="readmore md:left-[-40vw]">
            <h1>node js Bootcamp</h1>
            <h2>Udemy</h2>
            <p>
              I pursued my interest in backend technologies by taking Andrew
              Mead's Udemy course, where he demonstrated exceptional teaching
              abilities. The focus of the course was on Node.js, a JavaScript
              runtime that allows for the use of JavaScript in web servers.
              Through numerous hands-on projects, I gained practical experience
              in the latest ES6/ES7 JavaScript, building web servers and APIs
              with Express, and storing data using Mongoose and MongoDB. I also
              learned about REST APIs, non-relational databases, server-side
              authentication, and Postman API testing, as well as SocketIO APIs
              for building real-time web apps and JWT tokens for restricting
              access to protected routes in applications. The course covered
              deploying Node.js applications to production environments,
              providing me with a strong foundation in backend technologies. I
              am excited to continue learning and leveraging this technology to
              create innovative solutions.
            </p>
            <Link
              activeClass="active"
              to="degree"
              spy={true}
              smooth={true}
              offset={-65}
              duration={1000}
            >
              <button onClick={() => setHide(!hide)} className="lg:!mb-[50px]">
                {" "}
                close{" "}
              </button>
            </Link>
          </div>
        </Fade>
      )}
    </>
  );
};
