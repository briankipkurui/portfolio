import React from "react";
import "./projects.scss";
import { Link } from "react-router-dom";

export const Projects = () => {
  return (
    <>
      <div className="projects" id="projects">
        <h1 className="foo py-10 capitalize text-[50px] font-[700] leading-[75px] text-center">
          projects
        </h1>
        <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[80%] mx-auto pb-[100px]">
          <div>
            <h1>Distributed Ticketing App</h1>
            <button>
              <Link to="/ticketing-app">read more</Link>
            </button>
          </div>
          <div>
            <h1>Rylan Laundry ERP</h1>
            <button>
              <Link to="/rylan_laundry_DMS">read more</Link>
            </button>
          </div>
          <div>
            <h1>E-shop</h1>
            <button>
              <Link to="/e-shop">read more</Link>
            </button>
          </div>
          <div>
            <h1>StoryHub</h1>
            <button>
              <Link to="/storyhub">read more</Link>
            </button>
          </div>

          <div>
            <h1>Task Manager-API</h1>
            <button>
              <Link to="taskmanagerAPI">read more</Link>
            </button>
          </div>
          <div>
            <h1>Landing Page</h1>
            <button>
              <Link to="landing-page">read more</Link>
            </button>
          </div>
          <div>
            <h1>SimonGame-Clone</h1>
            <button>
              <Link to="/simon-game-clone">read more</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
