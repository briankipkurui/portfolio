import React from "react";
import "./education.scss";
import { Degree } from "./schools/Degree";
import { Packages } from "./schools/IcsCollege";
import { NodejsBootcamp } from "./schools/NodejsBootcamp";
import { WebDevBootcamp } from "./schools/WebDevBootcamp";

export const Education = () => {
  return (
    <>
      <div className="education" id="education">
        <h1 className="py-14 foo capitalize text-[50px] font-[700] leading-[75px] text-center">
          Education
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[80%] mx-auto pb-[100px]">
          <div id="degree">
            <Degree />
          </div>
          <div id="node">
            <NodejsBootcamp />
          </div>
          <div id="webdev">
            <WebDevBootcamp />
          </div>
          <div>
            <Packages />
          </div>
        </div>
      </div>
    </>
  );
};
