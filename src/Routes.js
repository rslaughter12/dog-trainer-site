import React from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Partners from "./pages/Partners";
import Bio from "./pages/Bio";
import Trainers from "./pages/Trainers";

const AppRoutes = () => {
    return (
        <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/trainers" element={<Trainers/>} />
        <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
    );
};

export default AppRoutes;

