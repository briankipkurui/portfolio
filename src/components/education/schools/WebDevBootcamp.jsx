import React, { useState } from "react";
import { Fade } from "react-reveal";
import { Link } from "react-scroll";

export const WebDevBootcamp = () => {
  const [hide, setHide] = useState(false);
  return (
    <>
      <h1>March2021 - July2021</h1>
      <h2>Web Development Bootcamp</h2>
      <h3>App Brewery - Dr Angela Yu</h3>
      <button onClick={() => setHide(!hide)}>Read More</button>

      {hide && (
        <Fade left>
          <div className="readmore">
            <h1>web development bootcamp</h1>
            <h2>App Brewery</h2>
            <p>
              Dr. Angela Yu's 5-month Coding Bootcamp at App Brewery taught me
              the fundamentals of web development, from design to deployment.
              The project-based curriculum covered HTML5, CSS3, JavaScript, Git
              and GitHub, command line interface, Node.js, Express, MongoDB, and
              React.js, improving my stamina for web design and development. I
              also learned invaluable debugging techniques and best practices
              for ethical and professional software development. The bootcamp
              instilled in me the importance of continuous learning to remain
              relevant in a rapidly evolving industry, motivating me to seek out
              new skills and opportunities.
            </p>
            <Link
              activeClass="active"
              to="node"
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
