import React, { useState } from "react";
import { Fade } from "react-reveal";
import { Link } from "react-scroll";

export const Packages = () => {
  const [hide, setHide] = useState(false);
  return (
    <>
      <h1>April2018 - July2018</h1>
      <h2>Fundamentals of Computers</h2>
      <h3>ICS college</h3>

      <button onClick={() => setHide(!hide)}>Read More</button>

      {hide && (
        <Fade left>
          <div className="readmore md:left-[-40vw]">
            <h1>fundamentals of computers</h1>
            <h2>ICS College</h2>
            <p>
              As a high school freshman, I was eager to join the digital
              revolution and learn how to use computers. My first practical
              experience with computing was a three-month course that covered
              the fundamentals of computing, including the Microsoft Office
              suite, networking, and the Internet. I learned how to design word
              documents, analyze data with Excel spreadsheets, establish a
              simple network, and stay current with the latest trends using the
              internet. This course sparked my interest in learning more about
              computer software.
            </p>
            <Link
              activeClass="active"
              to="webdev"
              spy={true}
              smooth={true}
              offset={-65}
              duration={1000}
            >
              <button onClick={() => setHide(!hide)}> close </button>
            </Link>
          </div>
        </Fade>
      )}
    </>
  );
};
