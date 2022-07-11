import React from "react";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom"
import Result from "./pages/Result";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/result/:query" element={<Result /> } />
        <Route path="/channel/:query" element={<Profile /> } />
      </Routes>

    </div>
  );
}

export default App;
