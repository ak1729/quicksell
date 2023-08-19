import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Priority from "./components/priority/Priority";
import User from "./components/user/User";
import Navbar from "./components/navbar/Navbar";
import Grid from "./components/grid/Grid";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar /> <Grid />
              </>
            }
          />
          <Route
            path="/user"
            element={
              <>
                <Navbar /> <User />
              </>
            }
          />
          <Route
            path="/priority"
            element={
              <>
                <Navbar /> <Priority />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
