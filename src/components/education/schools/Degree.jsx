import React, { useState } from "react";
import { Fade } from "react-reveal";
import { Link } from "react-scroll";

export const Degree = () => {
  const [hide, setHide] = useState(false);

  return (
    <>
      <h1>September2018 - present</h1>
      <h2>Bachelor of Engineering</h2>
      <h3>moi university</h3>
      <button onClick={() => setHide(!hide)}>Read More</button>

      {hide && (
        <Fade left>
          <div className="readmore">
            <h1>BE in Electrical and Electronics Engineering,</h1>
            <h2>Moi University.</h2>
            <p>
              Studying Electrical and Electronics Engineering at Moi University,
              I've gained a strong problem-solving foundation and knowledge in
              diverse subjects such as mechanics, telecommunications,
              electronics, power, computer engineering, advanced mathematics,
              and applied physics. This program has fostered critical thinking,
              objectivity, creativity, and discipline while encouraging
              out-of-the-box thinking, attention to detail, and broad technical
              skill development. Engineering school has been invaluable,
              challenging me to think beyond the obvious and consider all
              possibilities. I highly recommend this exciting STEM field to
              anyone interested in Science, Technology, Engineering, and
              Mathematics.
            </p>
            <Link
              activeClass="active"
              to="education"
              spy={true}
              smooth={true}
              offset={-65}
              duration={1000}
            >
              <button
                onClick={() => setHide(!hide)}
                className="md:!mb-[35px] lg:!mb-[100px]"
              >
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
