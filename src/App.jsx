import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import CanvasPage from "./Pages/CanvasPage/CanvasPage.jsx";
import { ImageProvider } from "./store/ImageContext.jsx";

const App = () => {
  return (
    <ImageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/canvas" element={<CanvasPage />} />
        </Routes>
      </Router>
    </ImageProvider>
  );
};

export default App;
