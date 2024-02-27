import React from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Partners from "./pages/Partners";

const AppRoutes = () => {
    return (
        <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
    );
};

export default AppRoutes;

