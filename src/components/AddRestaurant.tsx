import React, { useState } from "react";
import ResturantsFinder from "../apis/ResturantsFinder";
import axios from "axios";
export default function AddRestaurant(): JSX.Element {
  const [name, setName] = useState(" ");
  const [location, setLocation] = useState(" ");
  const [priceRange, setPriceRange] = useState("Price Range ");

  const baseURL = "http://localhost:5000/";

  const handleSubmit = () => {
    try {
      const response = axios.post(baseURL + "resturants", {
        name: name,
        location: location,
        price_range: priceRange,
      });
      console.log(response);
    } catch (error) {
      console.log("failed to post...");
      setName("");
      setLocation(" ");
      setPriceRange("Price range");
    }
  };

  // const handleSubmit = (e)=> {
  //   e.preventDefault()
  //   try {
  //      async const response = await ResturantsFinder.post("/"{
  //       name,
  //       location,
  //       price_range
  //     })

  //   } catch (error) {

  //   }

  // }

  return (
    <div className="mb-4">
      <form action="">
        <div className="form-row">
          <div className="col">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              placeholder="name"
            />
          </div>
          <div className="col">
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="form-control"
              type="text"
              placeholder="location"
            />
          </div>
          <div className="col">
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="custom-select my-1 mr-sm-2"
            >
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-primary"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
