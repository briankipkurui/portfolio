import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  TaskmanagerApi,
  SimonGame,
  Sogy,
  Eshop,
  StoryHub,
  Rylan,
  TickettingApp,
} from "./pages/index";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="e-shop" element={<Eshop />} />
        <Route path="storyhub" element={<StoryHub />} />
        <Route path="taskmanagerAPI" element={<TaskmanagerApi />} />
        <Route path="simon-game-clone" element={<SimonGame />} />
        <Route path="landing-page" element={<Sogy />} />
        <Route path="rylan_laundry_DMS" element={<Rylan />} />
        <Route path="ticketing-app" element={<TickettingApp />} />
      </Routes>
    </>
  );
};
