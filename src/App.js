import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Contact from "./Page/Contact";
import NotFound from "./Page/NotFound";
import Project1 from "./Page/Project1";
import Project2 from "./Page/Project2";
import Project3 from "./Page/Project3";
import Project4 from "./Page/Project4";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/project-1" element={<Project1 />} />
        <Route path="/project-2" element={<Project2 />} />
        <Route path="/project-3" element={<Project3 />} />
        <Route path="/project-4" element={<Project4 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
