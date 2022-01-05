import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./routes/HomePage";
import UpdatePage from "./routes/UpdatePage";
import ResturantDetails from "./routes/ResturantDetails";
import {
  RestaurantsContext,
  RestaurantsContextProvider,
} from "./context/RestaurantsContext";

function App(): JSX.Element {
  return (
    <>
      <div className="container">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/resturants/:id/update" element={<UpdatePage />} />
            <Route path="/resturants/:id" element={<ResturantDetails />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
