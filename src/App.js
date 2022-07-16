import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom"
import Result from "./pages/Result";
import Profile from "./pages/Profile";
import Video from "./pages/Video";
import Navbar from "./components/Navbar";

import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result/:query" element={<Result />} />
          <Route path="/channel/:query" element={<Profile />} />
          <Route path="/video/:link" element={<Video />} />
        </Routes>
      </div>
    </AppProvider>
  );
}

export default App;
